
const NewsPosts = () => {

const newsPosts = [
	

{
	title: "Autonomous driving – are we nearly there yet?",
	body: `One critical part of the effective deployment of autonomous vehicles is for them to be trusted by the public to make the right decisions in road traffic, properly balancing the system goals of efficiency and capacity with human values such as safety and legality. Without this being well understood, the potential benefits of autonomous vehicles could fail to materialise. In this talk, I will introduce the challenges towards trustworthy autonomous driving and novel solutions to address both human concerns and design requirements. Please see the details here: https://www.cambridgewireless.co.uk/events/autonomous-driving-are-we-there-yet/`,
	imgUrl:
		require('./PostMedia/CW.png'),

	},



{
	title: "Vision-based Reinforcement Learning for Emergency Braking",
	body: `Our PhD student at CAV-Lab, Vinal Asodia, designed an emergency braking system using a vision-based reinforcement learning technique. However, during testing, the car exhibited an unexpected behavior: it brakes twice in emergency scenarios when a pedestrian is detected. This is likely a feature that was unintentionally learned by the vehicle. It is important to investigate why the car is braking twice and determine if this behavior is beneficial or detrimental before implementing AI-powered autonomous vehicles in real-world applications. This highlights the need to address such questions and challenges to ensure the technology is trustworthy.`,
	videoUrl:
		require('./PostMedia/visionRL.mp4'),

	},
	
	{
	title: "Concerns on Trustworthiness of Deep Learning Object Detection Systems",
	body: `At CAV-Lab, we recently used and trained YOLO-v4 for pedestrians, vehicles, and bicycle detection. The algorithm showed good performance in detecting and classifying objects in the video. However, we noticed that the algorithm suffers from a major issue that raises a safety concern, which is not specified. Even though there are some misclassifications and classifications with poor accuracy, they can be addressed with larger datasets and longer training process. However, there is a major safety concern in this video that has not been well understood by the research community and autonomous driving industry. Can you guess what is this safety/performance issue? `,
	videoUrl:
		"./PostMedia/yolo7.mov",
	},
	
];
return (
	newsPosts
);
};

export default NewsPosts;