import gym
from gym import error, spaces, utils
from gym.utils import seeding
from gym.envs.registration import register
from gym.spaces import Dict, Box

from dm_control import suite

import numpy as np
import math

from stable_baselines3 import SAC
from collections import OrderedDict

import sys
import random
import torch
import utils

def norm_obs(obs):
    # np.array(list(obs.values())).flatten()
    return np.concatenate([x.reshape(-1) for x in obs.values()]).astype(np.float32)



class LEnv(gym.Env):
    """Custom Environment that follows gym interface"""
    metadata = {'render.modes': ['console']}

    def __init__(self, env_id=("manipulator", "bring_ball"), seed=None):
        print(f"Local Environment training {env_id}")
        super(LEnv, self).__init__()

        self.Env = suite.load(*env_id)

        if seed:
            self.Env.task.random.seed(seed)
            random.seed(seed)
            np.random.seed(seed)
            torch.manual_seed(seed) # probably only need the first line here
            # print(seed)

        self.time_step = self.Env.reset()

        self.env_id = env_id
        # Make the values adaptive to environmennt

        max = int(self.Env.action_spec().maximum[0]) #* 14
        min = int(self.Env.action_spec().minimum[0]) #* 14

        self.action_space = spaces.Box(low=min, high=max, shape=self.Env.action_spec().shape, dtype=np.float32)
        obs_shape = len(norm_obs(self.time_step.observation))
        # print(obs_shape)

        self.observation_space = Box(low=-np.inf, high=np.inf, shape=(obs_shape,), dtype=np.float32)


    def step(self, action):
        self.time_step = self.Env.step(action)
        obs = norm_obs(self.time_step.observation)
        reward = self.time_step.reward

        return obs, reward, self.time_step.last(), {}


    def reset(self):
        self.time_step = self.Env.reset()
        obs = norm_obs(self.time_step.observation)

        return obs # reward, done, info can't be included

    def render(self, mode='human'):
        pass

    def close(self):
        self.Env.close()


HER_ENVS = ["reacher", "manipulator"]
# Local Environment (Operator)
class LEnvHER(gym.GoalEnv):
    """Custom Environment that follows gym interface"""
    metadata = {'render.modes': ['console']}

    def __init__(self, env_id=("reacher", "hard"), seed=None):
        super(LEnvHER, self).__init__()

        self.Env = suite.load(*env_id)
        if seed:
            self.Env.task.random.seed(seed)
            # random.seed(seed)
            # np.random.seed(seed)
            # torch.manual_seed(seed)
            # print(seed)

        self.time_step = self.Env.reset()

        self.env_id = env_id
        # Make the values adaptive to environmennt
        assert HER_ENVS.__contains__(self.env_id[0]),"ERROR: HER not implemented for this environment"

        max = int(self.Env.action_spec().maximum[0]) #* 14
        min = int(self.Env.action_spec().minimum[0]) #* 14

        # Might want to times by 14
        self.action_space = spaces.Box(low=min, high=max, shape=self.Env.action_spec().shape, dtype=np.float32)
        #obs_shape = len(norm_obs(self.time_step.observation))

        # Specific to environment
        if self.env_id[0] == "reacher":
            self.observation_space = Dict({"observation": Box(low=-np.inf, high=np.inf, shape=(6,), dtype=np.float32),
                                            "achieved_goal": Box(low=-np.inf, high=np.inf, shape=(2,), dtype=np.float32),
                                            "desired_goal": Box(low=-np.inf, high=np.inf, shape=(2,))})

        elif self.env_id[0] == "manipulator":
            self.observation_space = Dict({"observation": Box(low=-np.inf, high=np.inf, shape=(44,), dtype=np.float32),
                                            "achieved_goal": Box(low=-np.inf, high=np.inf, shape=(4,), dtype=np.float32),
                                            "desired_goal": Box(low=-np.inf, high=np.inf, shape=(4,))})



    def step(self, action):
        self.time_step = self.Env.step(action)
        if self.env_id[0] == "reacher":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["position"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["to_target"].astype(np.float32),
            }
        elif self.env_id[0] == "manipulator":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["object_pos"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["target_pos"].astype(np.float32),
            }

        obs = OrderedDict(obs)
        #reward = self.compute_reward(obs["achieved_goal"], obs["desired_goal"], {})
        reward = self.time_step.reward
        return obs, reward, self.time_step.last(), {}


    def reset(self):
        self.time_step = self.Env.reset()
        if self.env_id[0] == "reacher":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["position"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["to_target"].astype(np.float32),
            }
        elif self.env_id[0] == "manipulator":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["object_pos"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["target_pos"].astype(np.float32),
            }

        obs = OrderedDict(obs)

        return obs # reward, done, info can't be included

    def render(self, mode='human'):
        pass

    def close(self):
        self.Env.close()

    def compute_reward(self, achieved_goal, desired_goal, info):
        reward = float(-np.linalg.norm(achieved_goal - desired_goal))
        # Make accurate
        if reward > -0.5:
            reward = 1
        else:
            reward = 0
        # reward = self.Env.task.get_reward(self.Env.physics) # +=
        return reward
        #return float(-np.linalg.norm(achieved_goal - desired_goal)/100)



# Remote Environment (Remote)
class REnv(gym.Env):
    """Custom Environment that follows gym interface"""
    '''
    Change the reward to make it the distance from entire state not just position and take the entire
    Operator state as input.
    '''
    metadata = {'render.modes': ['console']}

    def __init__(self, env_id=("reacher", "hard"), seed=None):
        super(REnv, self).__init__()
        # Make the values adaptive to environmennt
        self.Env = suite.load(*env_id)
        self.operator_Env = suite.load(*env_id)
        seed = np.random.randint(0,100) if not seed else seed

        # print("remote",seed)
        self.operator = SAC.load("./models/reacher/SAC/operator/normal")

        self.Env.task.random.seed(seed)
        self.operator_Env.task.random.seed(seed)

        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()

        # self.action_space = spaces.Box(low=-14, high=14, shape=(2,), dtype=np.float32)
        max = int(self.Env.action_spec().maximum[0]) #* 14
        min = int(self.Env.action_spec().minimum[0]) #* 14

        self.action_space = spaces.Box(low=min, high=max, shape=self.Env.action_spec().shape, dtype=np.float32)
        obs_shape = len(norm_obs(self.time_step.observation))

        self.observation_space = Box(low=-np.inf, high=np.inf, shape=(obs_shape,), dtype=np.float32)
        # self.observation_space = spaces.Box(low=-100, high=100, shape=(6,), dtype=np.float32)


        assert np.array_equal(self.operator_time_step.observation['to_target'], self.time_step.observation['to_target'])


        # Modified for remote
    def step(self, action): # Make sure the operator obs is a copy
        self.time_step = self.Env.step(action)

        operator_obs = norm_obs(self.operator_time_step.observation)
        operator_action, _states = self.operator.predict(operator_obs, deterministic=True)
        self.operator_time_step = self.operator_Env.step(operator_action)

        # Modify obs
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        # Euclidean distance
        reward = -np.linalg.norm(self.time_step.observation['position'] - self.time_step.observation['to_target'])
        # Sigmoid normalisation
        # reward = 1 / (1 + math.exp(reward/100))
        #reward = -utils.softmax([0,reward,1])[1] # Normalise within range
        reward = max(-2, reward)
        return norm_obs(self.time_step.observation), float(reward), self.time_step.last(), {}


    def reset(self):
        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        return norm_obs(self.time_step.observation) # reward, done, info can't be included

    def render(self, mode='human'):
        pass

    def close(self):
        self.Env.close()


# Remote Environment (Remote)
class REnvHER(gym.GoalEnv):
    """Custom Environment that follows gym interface"""
    '''
    Change the reward to make it the distance from entire state not just position and take the entire
    Operator state as input.
    '''
    metadata = {'render.modes': ['console']}

    def __init__(self, env_id=("reacher", "hard"), seed=None):
        super(REnvHER, self).__init__()
        self.env_id = env_id

        assert HER_ENVS.__contains__(self.env_id[0]),"ERROR: HER not implemented for this environment"

        self.Env = suite.load(*env_id)
        self.operator_Env = suite.load(*env_id)

        # Make the values adaptive to environmennt
        # self.action_space = spaces.Box(low=-14, high=14, shape=(2,), dtype=np.float32)
        # self.observation_space = spaces.Box(low=-100, high=100, shape=(6,), dtype=np.float32)
        max = int(self.Env.action_spec().maximum[0]) #* 14
        min = int(self.Env.action_spec().minimum[0]) #* 14

        # Might want to times by 14
        self.action_space = spaces.Box(low=min, high=max, shape=self.Env.action_spec().shape, dtype=np.float32)
        #obs_shape = len(norm_obs(self.time_step.observation))

        # Specific to environment
        if self.env_id[0] == "reacher":
            self.observation_space = Dict({"observation": Box(low=-np.inf, high=np.inf, shape=(6,), dtype=np.float32),
                                            "achieved_goal": Box(low=-np.inf, high=np.inf, shape=(2,), dtype=np.float32),
                                            "desired_goal": Box(low=-np.inf, high=np.inf, shape=(2,))})
        # TODO
        elif self.env_id[0] == "manipulator":
            self.observation_space = Dict({"observation": Box(low=-np.inf, high=np.inf, shape=(44,), dtype=np.float32),
                                            "achieved_goal": Box(low=-np.inf, high=np.inf, shape=(4,), dtype=np.float32),
                                            "desired_goal": Box(low=-np.inf, high=np.inf, shape=(4,))})



        #
        if not seed:
            seed = np.random.randint(0,100)

        # print("remote",seed)
        self.operator = SAC.load("./models/reacher/SAC/operator/normal")

        self.Env.task.random.seed(seed)
        self.operator_Env.task.random.seed(seed)

        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()

        # print(np.array_equal(self.operator_time_step.observation.values, self.time_step.observation.values))
        # print((self.operator_time_step.observation.values(), self.time_step.observation.values()))

        assert np.array_equal(self.operator_time_step.observation['to_target'], self.time_step.observation['to_target'])


        # Modified for remote
    def step(self, action): # Make sure the operator obs is a copy
        self.time_step = self.Env.step(action)

        operator_obs = norm_obs(self.operator_time_step.observation)
        operator_action, _states = self.operator.predict(operator_obs, deterministic=True)
        self.operator_time_step = self.operator_Env.step(operator_action)

        # Modify obs
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        # Euclidean distance
        reward = -np.linalg.norm(self.time_step.observation['position'] - self.time_step.observation['to_target'])
        # Sigmoid normalisation

        if self.env_id[0] == "reacher":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["position"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["to_target"].astype(np.float32),
            }
        elif self.env_id[0] == "manipulator":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["object_pos"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["target_pos"].astype(np.float32),
            }
        obs = OrderedDict(obs)

        # reward = 1 / (1 + math.exp(reward/100))
        return obs, float(reward/100), self.time_step.last(), {}


    def reset(self):
        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        if self.env_id[0] == "reacher":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["position"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["to_target"].astype(np.float32),
            }
        elif self.env_id[0] == "manipulator":
            obs = {
            "observation": norm_obs(self.time_step.observation),
            "achieved_goal": self.time_step.observation["object_pos"].astype(np.float32), # Maybe np.append other state info here
            "desired_goal": self.time_step.observation["target_pos"].astype(np.float32),
            }
            obs = OrderedDict(obs)


        return obs # reward, done, info can't be included

    def render(self, mode='human'):
        pass

    def close(self):
        self.Env.close()
        self.operator_Env.close()

    def compute_reward(self, achieved_goal, desired_goal, info):
        # This may only work on reacher for now
        reward = float(-np.linalg.norm(achieved_goal - desired_goal))
        # Make accurate
        if reward > -0.5:
            reward = 1
        else:
            reward = 0
        # reward = self.Env.task.get_reward(self.Env.physics) # +=
        return reward
        #return float(-np.linalg.norm(achieved_goal - desired_goal)/100)

# Remote Environment (Remote)
class REnvPD(gym.Env):
    """Custom Environment that follows gym interface"""
    '''
    Change the reward to make it the distance from entire state not just position and take the entire
    Operator state as input.
    '''
    metadata = {'render.modes': ['console']}

    def __init__(self, env_id=("reacher", "hard"), seed=None):
        super(REnvPD, self).__init__()
        # Make the values adaptive to environmennt
        self.Env = suite.load(*env_id)
        self.operator_Env = suite.load(*env_id)
        seed = np.random.randint(0,100) if not seed else seed

        # print("remote",seed)
        self.operator = SAC.load("./models/reacher/SAC/operator/normal")

        self.Env.task.random.seed(seed)
        self.operator_Env.task.random.seed(seed)

        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()

        self.prev_error = [0,0]

        # self.action_space = spaces.Box(low=-14, high=14, shape=(2,), dtype=np.float32)
        max = int(self.Env.action_spec().maximum[0]) #* 14
        min = int(self.Env.action_spec().minimum[0]) #* 14

        self.action_space = spaces.Box(low=min, high=max, shape=(2,), dtype=np.float32)
        obs_shape = len(norm_obs(self.time_step.observation))

        self.observation_space = Box(low=-np.inf, high=np.inf, shape=(obs_shape,), dtype=np.float32)
        # self.observation_space = spaces.Box(low=-100, high=100, shape=(6,), dtype=np.float32)


        assert np.array_equal(self.operator_time_step.observation['to_target'], self.time_step.observation['to_target'])


        # Modified for remote
    def step(self, action, obs): # Make sure the operator obs is a copy
        # PD Controller
        P, D = (action[0], action[1])

        #error = self.time_step.observation['position'] - self.time_step.observation['to_target']
        # Only works for reacher so maybe changes this
        # print(obs)
        error = obs[:2] - obs[2:4]

        proportional = error
        derivative = error - self.prev_error

        pd_value = P * proportional + D * derivative

        self.time_step = self.Env.step(pd_value)
        self.prev_error = error

        operator_obs = norm_obs(self.operator_time_step.observation)
        operator_action, _states = self.operator.predict(operator_obs, deterministic=True)
        self.operator_time_step = self.operator_Env.step(operator_action)

        # Modify obs
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        # Euclidean distance
        reward = -np.linalg.norm(self.time_step.observation['position'] - self.time_step.observation['to_target'])
        # Sigmoid normalisation
        # reward = 1 / (1 + math.exp(reward/100))
        #reward = -utils.softmax([0,reward,1])[1] # Normalise within range
        # reward = max(-2, reward) # Helps but not not for PD?
        return norm_obs(self.time_step.observation), float(reward/100), self.time_step.last(), {}


    def reset(self):
        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        return norm_obs(self.time_step.observation) # reward, done, info can't be included

    def render(self, mode='human'):
        pass

    def close(self):
        self.Env.close()

# register(
#     id="Custom-Reacher-Local-v0",
#     entry_point="gym.envs.classic_control:LEnv",
#     max_episode_steps=2000,
# )
#
# register(
#     id="Custom-Reacher-Remote-v0",
#     entry_point="gym.envs.classic_control:REnv",
#     max_episode_steps=2000,
# )

'''
class LREnv(gym.Env):
    """Custom Environment that follows gym interface"""
    metadata = {'render.modes': ['console']}

    def __init__(self, env_id, seed=None):
        super(LREnv, self).__init__()
        # Make the values adaptive to environmennt
        self.action_space = spaces.Box(low=-14, high=14, shape=(2,), dtype=np.float32)
        self.observation_space = spaces.Box(low=-100, high=100, shape=(6,), dtype=np.float32)

        self.Env = suite.load(*env_id)
        self.operator_Env = suite.load(*env_id)
        #
        if not seed:
            seed = np.random.randint(0,100)

        # print("remote",seed)
        self.operator = SAC.load("sac_operator")

        self.Env.task.random.seed(seed)
        self.operator_Env.task.random.seed(seed)

        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()

        # print(np.array_equal(self.operator_time_step.observation.values, self.time_step.observation.values))
        # print((self.operator_time_step.observation.values(), self.time_step.observation.values()))

        assert np.array_equal(self.operator_time_step.observation['to_target'], self.time_step.observation['to_target'])


        # Modified for remote
    def step(self, action): # Make sure the operator obs is a copy
        self.time_step = self.Env.step(action)

        operator_obs = self.norm_obs(self.operator_time_step.observation)
        operator_action, _states = self.operator.predict(operator_obs, deterministic=True)
        self.operator_time_step = self.operator_Env.step(operator_action)

        # Modify obs
        self.time_step.observation['to_target'] = self.operator_time_step.observation['position']

        # Euclidean distance
        reward = -np.linalg.norm(self.time_step.observation['position'] - self.time_step.observation['to_target'])
        # Sigmoid normalisation
        # reward = 1 / (1 + math.exp(reward/100))
        return self.norm_obs(self.time_step.observation), float(reward/100), self.time_step.last(), {}


    def reset(self):
        self.time_step = self.Env.reset()
        self.operator_time_step = self.operator_Env.reset()

        return self.norm_obs(self.time_step.observation) # reward, done, info can't be included

    def render(self, mode='human'):
        pass

    def norm_obs(self, obs):
        return np.array(list(obs.values())).flatten().astype(np.float32)

    def close(self):
        self.Env.close()'''
