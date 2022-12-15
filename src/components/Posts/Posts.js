import React from "react";
import "./Posts.css";
import Post from "../Post";
//import robot_lecture from './PostMedia/robot_lecture.png'

/* ALL IMAGES ARE OF RATIO 2500pxH 6000pxW (25:60)*/

const Posts = () => {
const newsPosts = [
	{
	title: "Connected Vehicle Demonstration",
	body: `The CAV-Lab presentation at the University of Surrey captivated audiences with a demonstration of
			internally developed connected vehicle technology. The cars seen above have been designed, engioneered
			and programmed to operate through a WiFi connection.\n\n
			
			Through the use of a video feed, the operators were able to successfully navigate the university
			and communicate with spectators. This initial demonstration was an insight into the connected vehicle 
			research undergone in the lab. Future work will look at 4G connection to enable unbounded connections,
			furthermore the car is being fit with state-of-the-art object detection through the use of YOLO-v5. These
			advancements in vehicle technology lay the groundwork for autonomous research, as each car is equiped
			with a veriety of precise sensors designed to enable autonomous navigation.

			`,
	date: "12th November 2021",
	imgUrl:
	require('./PostMedia/demonstration.png'),
	}		
	,
	{
	title: "Data Structure ",
	body: `There are many real-life examples of
	a stack. Consider an example of plates stacked
	over one another in the canteen. The plate
	which is at the top is the first one to be
	removed, i.e. the plate which has been placed
	at the bottommost position remains in the
	stack for the longest period of time. So, it
	can be simply seen to follow LIFO(Last In
	First Out)/FILO(First In Last Out) order.`,
	date: "12/01/2022",
	imgUrl:
		"https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",

	},
	{
	title: "Algorithm",
	body: `The word Algorithm means “a process
	or set of rules to be followed in calculations
	or other problem-solving operations”. Therefore
	Algorithm refers to a set of rules/instructions
	that step-by-step define how a work is to be
	executed upon in order to get the expected
	results. `,
	date: "12/01/2022",
	imgUrl:
		"https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
	},
	{
	title: "Computer Network",
	body: `An interconnection of multiple devices,
	also known as hosts, that are connected using
	multiple paths for the purpose of sending/
	receiving data media. Computer networks can
	also include multiple devices/mediums which
	help in the communication between two different
	devices; these are known as Network devices
	and include things such as routers, switches,
	hubs, and bridges. `,
	date: "12/01/2022",
	imgUrl:
	
		"https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
	},
];

return (
	<div className="posts-container">
	{newsPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default Posts;
