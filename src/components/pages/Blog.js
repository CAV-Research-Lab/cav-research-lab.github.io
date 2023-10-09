import React from 'react';
import Posts from "../Posts/Posts";
import '../../App.css';
import Footer from '../Footer';

export default function Blog() {
  return (
    <>
    <div class="blog-body" style={{height: "100%"}}>
      <div class="blog-item">
        <h4>Bridging Human Cognition and Autonomous Driving</h4>
        <p>How human cognition can be linked to safe AI for autonomous driving? This article addresses this question based on the human cognition description given in the book "The Mind is Flat". <a href="https://www.linkedin.com/pulse/bridging-human-cognition-autonomous-driving-saber-fallah-phd-peng/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>
      </div>

      <div class="blog-item">
        <h4>Adaptive PD Control using Deep Reinforcement Learning for Local-Remote Teleoperation with Stochastic Time Delays</h4>
        <p>How to adjust the gains of control systems of tele-operated robots subject to random communication time delays? CAV-Lab's researcher, Luc McCutcheon, has design a new reinforcement learning method to answer the question. <a href="https://www.linkedin.com/pulse/adaptive-pd-control-using-deep-reinforcement-learning-saber/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>
      </div>
      <div class="blog-item">
        <h4>Why not to use reasonable AI for autonomous driving decision-making?</h4>
        <p>Do we need rational AI or human-like AI for autonomous driving? What is difference between human-like AI and rational AI? <a href="https://www.linkedin.com/pulse/why-use-reasonable-ai-autonomous-driving-saber-fallah-phd-peng/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>
      </div>
     
	<div class="blog-item">
        <h4>Rational AI: A Guide to Autonomous Driving</h4>
        <p>what the strengths and limitations of human brains in making decisions which can be used to develop AI algorithms especially suitable for safety critical applications such as autonomous driving? <a href="https://www.linkedin.com/pulse/rational-ai-guide-autonomous-driving-saber-fallah-phd-peng/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>

      </div>
    </div>
    <Footer/>
    </>
  );
}
