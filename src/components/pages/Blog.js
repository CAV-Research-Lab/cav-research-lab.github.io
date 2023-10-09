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
        <p>I am fortunate to have had the privilege of working with Prof. Nick Chater at the University of Warwick. Nick is an expert in human behavioural sciences and the author of the book “The Mind is Flat”. Together, we aim to enable AI algorithms to interpret the driving context and make decisions in the same way a responsible human driver would. In this article, based on Nick’s book, I would like to highlight the link between Nick’s research and my own on Safe AI for autonomous driving. In his book, Nick challenges many of the widely held beliefs about the nature of our minds. One of the central themes of his book is the idea that our minds don't harbour deep unconscious thoughts, desires, or motives. Instead, he argues that our thinking, feelings, and behaviour are constructed on the spot. One of the intriguing aspects of "The Mind is Flat" is the exploration of how the human brain interprets situations and reasons about them. Here are some of the key points from the book related to interpretation and reasoning: <a href="https://www.linkedin.com/pulse/bridging-human-cognition-autonomous-driving-saber-fallah-phd-peng/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>
      </div>

      <div class="blog-item">
        <h4>Adaptive PD Control using Deep Reinforcement Learning for Local-Remote Teleoperation with Stochastic Time Delays</h4>
        <p> Local-remote (tele-operated) systems enable robots to carry out complex tasks in hazardous environments, such as space and nuclear power stations. These systems have also been adopted for remote surgery and driving applications. However, a primary challenge for reliable operation is the presence of time delays in these local-remote teleoperation systems. Such delays can compromise the accuracy of positional mapping between the local and remote devices which can negatively impact the performance and stability of the system. The research paper written by CAV-Lab researcher, Luc McCutcheon, focuses on addressing the challenge of synchronising the actions of the local and remote devices despite the presence of stochastic time delays.

The paper proposes an adaptive control method that combines deep reinforcement learning with a model-based approach to address time delays in local-remote teleoperation systems. The method utilises an adaptive PD (Proportional-Derivative) controller, which adjusts  <a href="https://www.linkedin.com/pulse/adaptive-pd-control-using-deep-reinforcement-learning-saber/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>
      </div>
      <div class="blog-item">
        <h4>Why not to use reasonable AI for autonomous driving decision-making?</h4>
        <p>In the book "Thinking, Fast and Slow," Daniel Kahneman discusses the concepts of a reasonable agent and a rational agent. A reasonable agent refers to an individual or decision-maker who makes choices based on intuition and heuristics, relying on their fast, automatic, and intuitive thinking. While this approach is efficient for everyday tasks, it can also lead to cognitive biases and errors in decision-making. On the other hand, a rational agent is one who consistently makes choices based on logical and deliberate analysis, utilising their slow, effortful, and logical thinking. Kahneman argues that while the idea of a rational agent may be an idealised theoretical construct, in reality, humans tend to be more akin to reasonable agents, as the limitations of our cognitive processes often hinder purely rational decision-making. Understanding the interplay between these two modes of thinking is crucial for comprehending human behavior and improving decision-making processes, both for individuals and for the development of AI systems.  <a href="https://www.linkedin.com/pulse/why-use-reasonable-ai-autonomous-driving-saber-fallah-phd-peng/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>
      </div>
     
	<div class="blog-item">
        <h4>Rational AI: A Guide to Autonomous Driving</h4>
        <p>A few months back, my esteemed colleague and friend, Prof Stephen Muggleton, a leading figure in logical AI research, recommended me to read the book “Thinking, Fast and Slow" by Daniel Kahneman. The book explores the two systems that drive how we, as human, think: System 1, which is fast, intuitive, and operates automatically, and System 2, which is slow, deliberate, and requires conscious effort. The book explains cognitive biases, heuristics, and and the boundaries of human decision-making. Kahneman's work sheds light on how our thought processes can lead to errors and offers insights into how to improve decision-making in various contexts. The book highlights very well the strengths and limitations of human brains in making decisions which, in my view, can be used to develop AI algorithms especially suitable for safety critical applications such as autonomous driving. Here are some takeaways that I thought of:  <a href="https://www.linkedin.com/pulse/rational-ai-guide-autonomous-driving-saber-fallah-phd-peng/?trackingId=i%2F8788qaSfCZBh3kjo4dSA%3D%3D">Read More</a></p>

      </div>
    </div>
    <Footer/>
    </>
  );
}
