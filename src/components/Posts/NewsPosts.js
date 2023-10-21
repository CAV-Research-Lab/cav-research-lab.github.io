
const NewsPosts = () => {

const newsPosts = [

{
	title: "CAV-Lab Contributes to Government Report on Location Data for Safe Self-Driving Vehicles",
	body: `Autonomous and highly automated vehicles will rely on location data to know where they are in relation to their surroundings, including the kerbside, other vehicles and pedestrians. Innovative location technologies could enable vehicles to communicate with other road users and smart infrastructure, improving traffic flow and congestion as well as making it safer and easier for drivers. Location data and technology will have a key role in the sector, but there are challenges around data discoverability, accessibility and quality. The recent report published by Geospatial Commission highlights the role location data in the safe deployment of self-driving road vehicles. Prof Fallah contributed to this report by sharing the outcome of CAV-Lab's research on vehicle localisation and control in last 10 years.`,
	imgUrl: require('./PostMedia/Report.png'),
	videoUrl: "" ,
	date: "20/10/2023"
	},




{
	title: "CAV-LAB Presents Its Research on Remote-Local Robots in IROS 2023",
	body: `Local-remote (tele-operated) systems enable robots to carry out complex tasks in hazardous environments, such as space and nuclear power stations. These systems have also been adopted for remote surgery and driving applications. However, a primary challenge for reliable operation is the presence of time delays in these local-remote teleoperation systems. Such delays can compromise the accuracy of positional mapping between the local and remote devices which can negatively impact the performance and stability of the system. CAV-Lab researcher, Luc McCutcheon, has presented his research work on addressing the challenge of synchronising the actions of the local and remote devices despite the presence of stochastic time delays in IROS 2023.`,
	imgUrl: require('./PostMedia/LUC-IROS.jpg'),
	videoUrl: "" ,
	date: "07/10/2023"
	},



{
	title: "Safe Autonomous Driving for Future Cities",
	body: `How can we ensure the safety of our future transportation systems? How can we develop or augment existing standards to guarantee the safety of highly automated vehicles? Is SOTIF a good alternative standard for safety assurance of future highly automated vehicles? What are the expert opinions on the imminent deployment of level 3+ automated vehicles? What are the challenges and barriers in verification and validation of autonomous vehicles using simulations? At the Intelligent Safety Conference China, Prof Fallah and other experts experts worldwide convened to answer these critical questions.`,
	imgUrl: require('./PostMedia/FISITA-CHINA.jpeg'),
	videoUrl: "" ,
	date: "27/07/2023"
	},


{
	title: "Introducing 'Agility' – The Future of Autonomous Robotics at CAV-Lab",
	body: `For the first time, CAV-Lab's researchers publicly demonstrated the Agility Car and its AI algorithms real-time performance at the University of Surrey demonstration day. The current and former researchers and students of CAV-Lab have worked tirelessly over the last three years to design and assemble the hardware, as well as develop the software for the Agility Car, which is a tele-operated mobile robot. Even though the Agility Car is remote-operated, it has the ability to drive itself to its station in the event of a communication failure. Agility car is a perfect solution for surveillance, remote inspection, reaching hazardous/extreme environments.`,
	imgUrl: require('./PostMedia/surrey_2023_showcase-180.jpg'),
	videoUrl: "" ,
	date: "30/06/2023"
	},




{
	title: "Autonomous Vehicles - Trends, Outlook and Forecast",
	body: `At the ICA Summit 2023, Dr Fallah with  key industry leaders - Christian Bering Pedersen, Mirko Reuter, and Marvin Ruf, engaged in a stimulating dialogue on the future landscape of autonomous vehicles. They explored key issues from market trends and emerging players, to comparisons of development between Europe, USA, and China. The discussion extended to the prospect of initial deployments in Europe, countries leading in autonomous technology, and pertinent use-cases in the region. They emphasised on challenges that extend beyond technology, like public acceptance, data privacy, cyber security, infrastructure, and legislation, underlining the immediate need to address these for the successful evolution of the autonomous vehicle sector.`,
	imgUrl: require('./PostMedia/ICA-001-2.jpg'),
	videoUrl: "" ,
	date: "15/05/2023"
	},



{
	title: "Challenges of AI for Autonomous Driving Explained",
	body: `Dr. Fallah, at the Software Defined Vehicle Conference, shed light on the challenges associated with AI in autonomous driving. He highlighted the need for AI systems to accurately interpret complex real-world scenarios and to make ethical decisions under potential risk situations, all while complying with legal and regulatory requirements. Addressing these challenges, he emphasised, is essential for the full potential of AI to be realised in autonomous driving, thereby ensuring its future widespread adoption. The insights delivered by Dr. Fallah are significant for progressing the UK automotive industry's understanding of AI in autonomous vehicles.`,
	imgUrl: require('./PostMedia/VECTOR_2.jpg'),
	videoUrl: "" ,
	date: "27/04/2023"
	},

	

{
	title: "Autonomous Driving – Are We Nearly There Yet?",
	body: `During a Cambridge Wireless event, Dr Fallah highlighted the criticality of public trust in autonomous vehicles, emphasising their need to balance system efficiency and capacity with safety and legality. He argued that without a solid understanding of these factors, the potential benefits of autonomous vehicles may not come to fruition. His presentation explored the challenges associated with establishing this trust and introduced innovative solutions designed to address both human apprehensions and technical design requirements. This insightful discussion underscored the intersection of human values and technological advancement in autonomous driving.`,
	imgUrl: require('./PostMedia/CW.png'),
	videoUrl: "" ,
	date: "07/12/2022"
	},



{
		title: "Concerns on Trustworthiness of Deep Learning Object Detection Systems",
		body: `At CAV-Lab, we recently used and trained YOLO-v4 for pedestrians, vehicles, and bicycle detection. The algorithm showed good performance in detecting and classifying objects in the video. However, we noticed that the algorithm suffers from a major issue that raises a safety concern, which is not specified. Even though there are some misclassifications and classifications with poor accuracy, they can be addressed with larger datasets and longer training process. However, there is a major safety concern in this video that has not been well understood by the research community and autonomous driving industry. Can you guess what is this safety/performance issue? `,
		videoUrl:"DSusXuPpXOE", // only include the url after https://youtu.be/
		date: "11/08/2022"		
	},



{
	title: "Vision-based Reinforcement Learning for Emergency Braking",
	body: `Our PhD student at CAV-Lab, Vinal Asodia, designed an emergency braking system using a vision-based reinforcement learning technique. However, during testing, the car exhibited an unexpected behavior: it brakes twice in emergency scenarios when a pedestrian is detected. This is likely a feature that was unintentionally learned by the vehicle. It is important to investigate why the car is braking twice and determine if this behavior is beneficial or detrimental before implementing AI-powered autonomous vehicles in real-world applications. This highlights the need to address such questions and challenges to ensure the technology is trustworthy.`,
	videoUrl:'I_eGm44ncg8', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/I_eGm44ncg8
	date: "17/07/2022"
	},


	
{
	title: "CAV-Lab Expertise Introduced in Commercialising CAM Event",
	body: `Advances in automation, connectivity, and electrification – together – can make journeys safer, fairer, cleaner, more efficient and more productive, unlocking significant social and economic benefits. In commercialising connected and automated mobility event organised by Innovate UK and Centre for Connected Autonomous Vehicles (CCAV), Dr Fallah presented the expertise and skills that CAV-Lab can offer to the UK CCAM industry`,
	videoUrl:'dckVZYyQEa8', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/
	date: "24/05/2022"
	},



{
	title: "CARMA Project Closing Event",
	body: `The Cloud Assisted Real-time Methods for Autonomy (CARMA) project, is part of the £11m TASCC programme funded by the Engineering and Physical Sciences Research Council (EPSRC) and Jaguar Land Rover. Supported by WMG’s Centre High Value Manufacturing Catapult, the CARMA project was established with the intention to create secure and resilient cloud-based platforms to enable safe and robust semi-autonomous functions on future cars in the short term, and with the vision of achieving fully autonomous vehicles. Dr Saber Fallah, Director of the Connected Autonomous Research Lab at the University of Surrey commented: “This technology enables new business models for the transportation system in alignment with the rise of shared mobility. In addition, autonomous vehicle technology also highlights the potential for how elderly people or disabled people can benefit from the joy of driving from point A to point B safely.”`,
	videoUrl:'_PG4HWLiBXM', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/
	date: "24/05/2022"
	},



{
	title: "Innovation at CAV-Lab Recognised",
	body: `Dr Saber Fallah and his team scooping the ‘Emerging Technologies Tomorrow's World’ award for their work on autonomous vehicles.  The team partnered with Technics Group and others to develop a novel and unique algorithm to locate autonomous vehicles in all weather conditions using ground penetrating radar. The algorithm can be used in variety of applications including connected autonomous cars, agricultural autonomous vehicles, military autonomous vehicles, and planetary autonomous rovers. Chris Burchell, Local Economy Manager at Guildford Borough Council says: The Innovation Awards celebrate the best and brightest that our borough has to offer. Congratulations to this year's winners and all who entered.`,
	imgUrl: require('./PostMedia/Guildford Innovation Award.jpeg'),
	videoUrl: "" ,
	date: "19/12/2019"
	},



{
	title: "CAV-Lab's Innovations Presented at NASA",
	body: `On March 27th and 28th, a delegation of UK researchers was invited to Houston, Texas to attend an Automation, AI & Robotics Workshop. The workshop was hosted by NASA and organized by the Houston Technology Collaboration Center and UK Science & Innovation Network. During the event, Dr. Fallah presented the audience with the latest advancements in autonomous mobile robots and AI developed at CAV-Lab.`,
	imgUrl: require('./PostMedia/nasa.JPG'),
	videoUrl: "" ,
	date: "18/03/2019"
	},



{
	title: "CAV-Lab's Research Presented in 13th UK China Space Conference",
	body: `Dr. Fallah delivered a presentation on the cutting-edge research conducted at CAV-Lab on intelligent and autonomous mobile robot systems for space exploration. The presentation took place during the 13th UK-China Workshop on Space Science and Technology, where British and Chinese delegates were in attendance. The primary objective of the workshop was to facilitate collaboration between space experts from academia and industry, promoting partnerships in capabilities, skills, and technologies within the UK and Chinese space sectors.`,
	imgUrl: require('./PostMedia/China-UK.jpeg'),
	videoUrl: "" ,
	date: "13/12/2018"
	},






];
return (
	newsPosts
);
};

export default NewsPosts;
