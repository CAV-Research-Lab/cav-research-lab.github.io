
const NewsPosts = () => {

const newsPosts = [

{
	title: "What are the challenges of AI for autonomous driving and how can they be addressed?",
	body: `The use of AI in autonomous driving systems enables higher levels of autonomy. However, significant challenges remain associated with the use of AI for perception and decision-making in autonomous driving. One major challenge is ensuring that AI systems can accurately and reliably detect and interpret complex real-world driving scenarios. Another challenge is developing AI systems that can make ethical and moral decisions when faced with potential collisions or other dangerous situations, while also accounting for legal and regulatory requirements. Addressing these challenges will be critical to realising the full potential of AI for autonomous driving and ensuring its widespread adoption in the future. At the Software Defined Vehicle Conference, Dr. Fallah presented the challenges of AI for autonomous driving and potential solutions to address them to the UK automotive industry.`,
	imgUrl: require('./PostMedia/VECTOR.jpg'),
	videoUrl: "" ,
	date: "27/04/2023"
	},
	

{
	title: "Autonomous driving – are we nearly there yet?",
	body: `One critical part of the effective deployment of autonomous vehicles is for them to be trusted by the public to make the right decisions in road traffic, properly balancing the system goals of efficiency and capacity with human values such as safety and legality. Without this being well understood, the potential benefits of autonomous vehicles could fail to materialise. In this talk, I will introduce the challenges towards trustworthy autonomous driving and novel solutions to address both human concerns and design requirements.`,
	imgUrl: require('./PostMedia/CW.png'),
	videoUrl: "" ,
	date: "07/12/2022"
	},


	{
		title: "Concerns on trustworthiness of deep learning object detection systems",
		body: `At CAV-Lab, we recently used and trained YOLO-v4 for pedestrians, vehicles, and bicycle detection. The algorithm showed good performance in detecting and classifying objects in the video. However, we noticed that the algorithm suffers from a major issue that raises a safety concern, which is not specified. Even though there are some misclassifications and classifications with poor accuracy, they can be addressed with larger datasets and longer training process. However, there is a major safety concern in this video that has not been well understood by the research community and autonomous driving industry. Can you guess what is this safety/performance issue? `,
		videoUrl:"DSusXuPpXOE", // only include the url after https://youtu.be/
		date: "11/08/2022"
		
	
	},


	{
	title: "Vision-based reinforcement learning for emergency braking",
	body: `Our PhD student at CAV-Lab, Vinal Asodia, designed an emergency braking system using a vision-based reinforcement learning technique. However, during testing, the car exhibited an unexpected behavior: it brakes twice in emergency scenarios when a pedestrian is detected. This is likely a feature that was unintentionally learned by the vehicle. It is important to investigate why the car is braking twice and determine if this behavior is beneficial or detrimental before implementing AI-powered autonomous vehicles in real-world applications. This highlights the need to address such questions and challenges to ensure the technology is trustworthy.`,
	videoUrl:'I_eGm44ncg8', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/I_eGm44ncg8
	date: "17/07/2022"

	},
	
{
	title: "Introducing CAV-Lab and its expertise in commercialising connected and automated mobility event",
	body: `Advances in automation, connectivity, and electrification – together – can make journeys safer, fairer, cleaner, more efficient and more productive, unlocking significant social and economic benefits. In commercialising connected and automated mobility event organised by Innovate UK and Centre for Connected Autonomous Vehicles (CCAV), Dr Fallah presented the expertise and skills that CAV-Lab can offer to the UK CCAM industry`,
	videoUrl:'dckVZYyQEa8', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/
	date: "24/05/2022"

	},

{
	title: "CARMA: Secure Cloud-based Distributed Control Systems for Connected Autonomous Cars",
	body: `The Cloud Assisted Real-time Methods for Autonomy (CARMA) project, is part of the £11m TASCC programme funded by the Engineering and Physical Sciences Research Council (EPSRC) and Jaguar Land Rover. Supported by WMG’s Centre High Value Manufacturing Catapult, the CARMA project was established with the intention to create secure and resilient cloud-based platforms to enable safe and robust semi-autonomous functions on future cars in the short term, and with the vision of achieving fully autonomous vehicles.
Dr Saber Fallah, Director of the Connected Autonomous Research Lab at the University of Surrey commented: “This technology enables new business models for the transportation system in alignment with the rise of shared mobility. In addition, autonomous vehicle technology also highlights the potential for how elderly people or disabled people can benefit from the joy of driving from point A to point B safely.”`,
	videoUrl:'_PG4HWLiBXM', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/
	date: "24/05/2022"

	},
 
	
];
return (
	newsPosts
);
};

export default NewsPosts;
