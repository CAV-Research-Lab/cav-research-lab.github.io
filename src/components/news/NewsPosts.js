
import reportImage from '../../assets/images/news/Report.jpg';
import lucIrosImage from '../../assets/images/news/LUC-IROS.jpg';
import fisitaChinaImage from '../../assets/images/news/FISITA-CHINA.jpeg';
import surreyShowcaseImage from '../../assets/images/news/surrey_2023_showcase-180.jpg';
import icaImage from '../../assets/images/news/ICA-001-2.jpg';
import vectorImage from '../../assets/images/news/VECTOR_2.jpg';
import cambridgeWirelessImage from '../../assets/images/news/CW.jpg';
import guildfordAwardImage from '../../assets/images/news/Guildford Innovation Award.jpeg';
import nasaImage from '../../assets/images/news/nasa.JPG';
import chinaUkImage from '../../assets/images/news/China-UK.jpeg';
import genAIFrankfortImage from '../../assets/images/news/GenAI-Frankfort.jpg';
import china2024Image from '../../assets/images/news/fchina2024.jpeg';
import BBCNewsImage from '../../assets/images/news/BBCNews.jpg';
import dvsaImage from '../../assets/images/news/dvsa.jpg';
import reutersImage from '../../assets/images/news/reuters.jpeg';
import massdriveImage from '../../assets/images/news/massdrive.png';
import squImage from '../../assets/images/news/squ.jpeg';
import aventineImage from '../../assets/images/news/aventine.png';
import d3ipImage from '../../assets/images/news/D3iP.jpg';
import malaysia2025Image from '../../assets/images/news/malaysia2025.jpeg';
import darcImage from '../../assets/images/news/darc.jpg';

const NewsPosts = () => {

const newsPosts = [

{
	title: "Embodied AI: Invisible Cues Webinar",
	body: `This webinar, "Embodied AI: Invisible Cues", brings together experts from Waymo, Waye, Fusion Processing Ltd, ITS Leeds, RiDC, and TH Ingolstadt to explore how embodied artificial intelligence can enable safer, more inclusive, and more human-centred autonomous systems. The discussion covers technical foundations, human factors and inclusivity, and AI safety as part of an ongoing research dialogue on safe and trusted AI for autonomous mobility.`,
	videoUrl: "nuHHnWmESXM",
	links: [
		{ label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=nuHHnWmESXM" },
	],
	date: "10/2026"
	},

{
	title: "Prof Fallah Featured on The Age of AI Podcast on Autonomous Vehicles",
	body: `Autonomous vehicles are no longer a future promise; they are becoming a real-world, high-stakes systems challenge. In the latest episode of The Age of AI, Lara Lewington and Ben Clark unpack the technology, strategy, and ethics behind this shift, from Waymo's large-scale robotaxi deployment to Wayve's adaptive AI approach in the UK. Prof Saber Fallah contributes expert insight on one of the hardest challenges in autonomous driving: enabling AI systems to generalise safely in unpredictable situations they have never seen before. The episode explores why autonomous vehicles are not only a software problem, but also a societal one.`,
	videoUrl: "K0z9QNTd6XA",
	date: "05/2026"
	},

{
	title: "CAV-Lab Research on Trusted Automated Vehicles Presented at Defence Autonomy Event",
	body: `Prof Fallah delivered an invited talk titled "From AI Foundational Models to Human-like Reasoning: Towards Trusted Automated Vehicles" at the Defence Autonomy Research Collaboration Event in Twickenham. The talk highlighted the lab's work on trustworthy AI, reasoning, and assurance for autonomous systems.`,
	imgUrl: darcImage,
	videoUrl: "" ,
	date: "11/2025"
	},

{
	title: "Invited Talk on AI Dreams and Creative Futures at Global Higher Education Forum",
	body: `Prof Fallah delivered an invited talk titled "AI Dreams and Our Creative Future Together" at the 9th Global Higher Education Forum 2025 in Malaysia, reflecting on the future of AI, creativity, education, and responsible innovation.`,
	imgUrl: malaysia2025Image,
	videoUrl: "" ,
	date: "11/2025"
	},

{
	title: "Building Trust in AI and Autonomy at Autonomy Unleashed",
	body: `Prof Fallah delivered an invited talk titled "Realising Autonomous Potential: Building Trust in AI and Autonomy" at Autonomy Unleashed, held at BattleLab, Dorset Innovation Park. The talk addressed trusted deployment, assurance, and the practical barriers to responsible autonomous systems adoption.`,
	imgUrl: d3ipImage,
	videoUrl: "" ,
	date: "09/2025"
	},

{
	title: "CAV-Lab Expertise Featured in International Media on Driverless Vehicle Deployment",
	body: `Across 2025, Prof Fallah provided expert commentary for Reuters, Forbes, Business Insider, MSN, and Aventine on robotaxis, autonomous vehicle regulation, Tesla Full Self-Driving, terminology around autonomous driving, and the technical and operational barriers to scaling driverless vehicles safely.`,
	imgUrl: aventineImage,
	links: [
		{ label: "Reuters", url: "https://www.investing.com/news/stock-market-news/cybertruck-crash-raises-alarm-bells-about-teslas-selfdriving-software-3869416" },
		{ label: "Forbes", url: "https://www.forbes.com/sites/nicolekobie/2025/04/17/china-bans-autonomous---so-what-should-driverless-ish-cars-be-called/" },
		{ label: "Business Insider", url: "https://www.businessinsider.com/robotaxis-general-motors-cruise-problems-tesla-elon-musk-2024-12" },
		{ label: "MSN", url: "https://www.msn.com/en-us/search?q=Saber%20Fallah%20autonomous%20vehicles" },
		{ label: "Aventine", url: "https://www.aventine.org/autonomous-vehicles-driverless-cars-waymo-tesla/" },
	],
	date: "07/2025"
	},

{
	title: "Advances in AI and Autonomous Systems Presented at Sultan Qaboos University",
	body: `Prof Fallah delivered an invited talk titled "Advances in AI and Autonomous Systems" at Sultan Qaboos University in Oman, sharing CAV-Lab research on AI-enabled autonomy, safety, and intelligent mobility systems.`,
	imgUrl: squImage,
	videoUrl: "" ,
	date: "02/2025"
	},

{
	title: "MASSDRIVE Recommendations Presented to the Driver and Vehicle Standards Agency",
	body: `Prof Fallah presented "MASSDRIVE: Recommendations for Accelerating Certification of Self-driving Vehicles in the UK" to the Driver and Vehicle Standards Agency, contributing research-led insight on certification, verification, validation, and safety assurance for self-driving vehicles.`,
	imgUrl: massdriveImage,
	videoUrl: "" ,
	date: "11/2024"
	},

{
	title: "Prof Fallah Moderates Reuters MomentumAI Panel on Responsible AI Deployment",
	body: `At MomentumAI London, organised by Reuters Events, Prof Fallah moderated the panel "Responsible Deployment of AI in Business", supporting cross-sector discussion on trustworthy AI, governance, and practical adoption.`,
	imgUrl: reutersImage,
	videoUrl: "" ,
	date: "10/2024"
	},

{
	title: "AI Safety and Human-Centric Autonomous Driving Presented at FISITA Shanghai",
	body: `Prof Fallah delivered an invited talk titled "AI safety and human-centric autonomous driving" at the FISITA Intelligent Safety Conference in Shanghai, China. The talk explored safety assurance, human-centred design, and trusted AI for future autonomous driving systems.`,
	imgUrl: china2024Image,
	date: "09/2024"
	},

{
	title: "Can We Trust Machines and AI To Drive Us?",
	body: `Prof Fallah delivered an invited expert talk titled "Can We Trust Machines and AI To Drive Us?" for the Driver and Vehicle Standards Agency, discussing trust, safety, verification, and the readiness of AI-enabled automated vehicles for public roads.`,
	imgUrl: dvsaImage,
	date: "07/2024"
	},

{
	title: "BBC News Highlights UK Work on Safer Self-Driving Technologies",
	body: `Prof Fallah was quoted as an expert by BBC News on UK initiatives to improve the safety and trustworthiness of self-driving technologies through interdisciplinary collaboration, technical assurance, and responsible innovation.`,
	imgUrl: BBCNewsImage,
	date: "04/2024"
	},

{
	title: "Human-Centric AI in Autonomous Driving Presented in Frankfurt",
	body: `Prof Fallah was an invited speaker at the Generative AI for Automotive event in Frankfurt, presenting "Human-Centric AI in Autonomous Driving" and discussing how AI-enabled vehicle systems can be designed with safety, trust, and human needs at the centre.`,
	imgUrl: genAIFrankfortImage,
	date: "02/2024"
	},

{
	title: "CAV-Lab Contributes to Government Report on Location Data for Safe Self-Driving Vehicles",
	body: `Autonomous and highly automated vehicles will rely on location data to know where they are in relation to their surroundings, including the kerbside, other vehicles and pedestrians. Innovative location technologies could enable vehicles to communicate with other road users and smart infrastructure, improving traffic flow and congestion as well as making it safer and easier for drivers. Location data and technology will have a key role in the sector, but there are challenges around data discoverability, accessibility and quality. The recent report published by Geospatial Commission highlights the role location data in the safe deployment of self-driving road vehicles. Prof Fallah contributed to this report by sharing the outcome of CAV-Lab's research on vehicle localisation and control in last 10 years.`,
	imgUrl: reportImage,
	videoUrl: "" ,
	date: "10/2023"
	},




{
	title: "CAV-LAB Presents Its Research on Remote-Local Robots in IROS 2023",
	body: `Local-remote (tele-operated) systems enable robots to carry out complex tasks in hazardous environments, such as space and nuclear power stations. These systems have also been adopted for remote surgery and driving applications. However, a primary challenge for reliable operation is the presence of time delays in these local-remote teleoperation systems. Such delays can compromise the accuracy of positional mapping between the local and remote devices which can negatively impact the performance and stability of the system. CAV-Lab researcher, Luc McCutcheon, has presented his research work on addressing the challenge of synchronising the actions of the local and remote devices despite the presence of stochastic time delays in IROS 2023.`,
	imgUrl: lucIrosImage,
	videoUrl: "" ,
	date: "10/2023"
	},



{
	title: "Safe Autonomous Driving for Future Cities",
	body: `How can we ensure the safety of our future transportation systems? How can we develop or augment existing standards to guarantee the safety of highly automated vehicles? Is SOTIF a good alternative standard for safety assurance of future highly automated vehicles? What are the expert opinions on the imminent deployment of level 3+ automated vehicles? What are the challenges and barriers in verification and validation of autonomous vehicles using simulations? At the Intelligent Safety Conference China, Prof Fallah and other experts experts worldwide convened to answer these critical questions.`,
	imgUrl: fisitaChinaImage,
	videoUrl: "" ,
	date: "07/2023"
	},


{
	title: "Introducing 'Agility' – The Future of Autonomous Robotics at CAV-Lab",
	body: `For the first time, CAV-Lab's researchers publicly demonstrated the Agility Car and its AI algorithms real-time performance at the University of Surrey demonstration day. The current and former researchers and students of CAV-Lab have worked tirelessly over the last three years to design and assemble the hardware, as well as develop the software for the Agility Car, which is a tele-operated mobile robot. Even though the Agility Car is remote-operated, it has the ability to drive itself to its station in the event of a communication failure. Agility car is a perfect solution for surveillance, remote inspection, reaching hazardous/extreme environments.`,
	imgUrl: surreyShowcaseImage,
	videoUrl: "" ,
	date: "06/2023"
	},




{
	title: "Autonomous Vehicles - Trends, Outlook and Forecast",
	body: `At the ICA Summit 2023, Dr Fallah with  key industry leaders - Christian Bering Pedersen, Mirko Reuter, and Marvin Ruf, engaged in a stimulating dialogue on the future landscape of autonomous vehicles. They explored key issues from market trends and emerging players, to comparisons of development between Europe, USA, and China. The discussion extended to the prospect of initial deployments in Europe, countries leading in autonomous technology, and pertinent use-cases in the region. They emphasised on challenges that extend beyond technology, like public acceptance, data privacy, cyber security, infrastructure, and legislation, underlining the immediate need to address these for the successful evolution of the autonomous vehicle sector.`,
	imgUrl: icaImage,
	videoUrl: "" ,
	date: "05/2023"
	},



{
	title: "Challenges of AI for Autonomous Driving Explained",
	body: `Dr. Fallah, at the Software Defined Vehicle Conference, shed light on the challenges associated with AI in autonomous driving. He highlighted the need for AI systems to accurately interpret complex real-world scenarios and to make ethical decisions under potential risk situations, all while complying with legal and regulatory requirements. Addressing these challenges, he emphasised, is essential for the full potential of AI to be realised in autonomous driving, thereby ensuring its future widespread adoption. The insights delivered by Dr. Fallah are significant for progressing the UK automotive industry's understanding of AI in autonomous vehicles.`,
	imgUrl: vectorImage,
	videoUrl: "" ,
	date: "04/2023"
	},

	

{
	title: "Autonomous Driving – Are We Nearly There Yet?",
	body: `During a Cambridge Wireless event, Dr Fallah highlighted the criticality of public trust in autonomous vehicles, emphasising their need to balance system efficiency and capacity with safety and legality. He argued that without a solid understanding of these factors, the potential benefits of autonomous vehicles may not come to fruition. His presentation explored the challenges associated with establishing this trust and introduced innovative solutions designed to address both human apprehensions and technical design requirements. This insightful discussion underscored the intersection of human values and technological advancement in autonomous driving.`,
	imgUrl: cambridgeWirelessImage,
	videoUrl: "" ,
	date: "12/2022"
	},



{
		title: "Concerns on Trustworthiness of Deep Learning Object Detection Systems",
		body: `At CAV-Lab, we recently used and trained YOLO-v4 for pedestrians, vehicles, and bicycle detection. The algorithm showed good performance in detecting and classifying objects in the video. However, we noticed that the algorithm suffers from a major issue that raises a safety concern, which is not specified. Even though there are some misclassifications and classifications with poor accuracy, they can be addressed with larger datasets and longer training process. However, there is a major safety concern in this video that has not been well understood by the research community and autonomous driving industry. Can you guess what is this safety/performance issue? `,
		videoUrl:"DSusXuPpXOE", // only include the url after https://youtu.be/
		date: "08/2022"
	},



{
	title: "Vision-based Reinforcement Learning for Emergency Braking",
	body: `Our PhD student at CAV-Lab, Vinal Asodia, designed an emergency braking system using a vision-based reinforcement learning technique. However, during testing, the car exhibited an unexpected behavior: it brakes twice in emergency scenarios when a pedestrian is detected. This is likely a feature that was unintentionally learned by the vehicle. It is important to investigate why the car is braking twice and determine if this behavior is beneficial or detrimental before implementing AI-powered autonomous vehicles in real-world applications. This highlights the need to address such questions and challenges to ensure the technology is trustworthy.`,
	videoUrl:'I_eGm44ncg8', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/I_eGm44ncg8
	date: "07/2022"
	},


	
{
	title: "CAV-Lab Expertise Introduced in Commercialising CAM Event",
	body: `Advances in automation, connectivity, and electrification – together – can make journeys safer, fairer, cleaner, more efficient and more productive, unlocking significant social and economic benefits. In commercialising connected and automated mobility event organised by Innovate UK and Centre for Connected Autonomous Vehicles (CCAV), Dr Fallah presented the expertise and skills that CAV-Lab can offer to the UK CCAM industry`,
	videoUrl:'dckVZYyQEa8', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/
	date: "05/2022"
	},



{
	title: "CARMA Project Closing Event",
	body: `The Cloud Assisted Real-time Methods for Autonomy (CARMA) project, is part of the £11m TASCC programme funded by the Engineering and Physical Sciences Research Council (EPSRC) and Jaguar Land Rover. Supported by WMG’s Centre High Value Manufacturing Catapult, the CARMA project was established with the intention to create secure and resilient cloud-based platforms to enable safe and robust semi-autonomous functions on future cars in the short term, and with the vision of achieving fully autonomous vehicles. Dr Saber Fallah, Director of the Connected Autonomous Research Lab at the University of Surrey commented: “This technology enables new business models for the transportation system in alignment with the rise of shared mobility. In addition, autonomous vehicle technology also highlights the potential for how elderly people or disabled people can benefit from the joy of driving from point A to point B safely.”`,
	videoUrl:'_PG4HWLiBXM', // only include the url after https://youtu.be/ e.g. this video is https://youtu.be/
	date: "05/2022"
	},



{
	title: "Innovation at CAV-Lab Recognised",
	body: `Dr Saber Fallah and his team scooping the ‘Emerging Technologies Tomorrow's World’ award for their work on autonomous vehicles.  The team partnered with Technics Group and others to develop a novel and unique algorithm to locate autonomous vehicles in all weather conditions using ground penetrating radar. The algorithm can be used in variety of applications including connected autonomous cars, agricultural autonomous vehicles, military autonomous vehicles, and planetary autonomous rovers. Chris Burchell, Local Economy Manager at Guildford Borough Council says: The Innovation Awards celebrate the best and brightest that our borough has to offer. Congratulations to this year's winners and all who entered.`,
	imgUrl: guildfordAwardImage,
	videoUrl: "" ,
	date: "12/2019"
	},



{
	title: "CAV-Lab's Innovations Presented at NASA",
	body: `On March 27th and 28th, a delegation of UK researchers was invited to Houston, Texas to attend an Automation, AI & Robotics Workshop. The workshop was hosted by NASA and organized by the Houston Technology Collaboration Center and UK Science & Innovation Network. During the event, Dr. Fallah presented the audience with the latest advancements in autonomous mobile robots and AI developed at CAV-Lab.`,
	imgUrl: nasaImage,
	videoUrl: "" ,
	date: "03/2019"
	},



{
	title: "CAV-Lab's Research Presented in 13th UK China Space Conference",
	body: `Dr. Fallah delivered a presentation on the cutting-edge research conducted at CAV-Lab on intelligent and autonomous mobile robot systems for space exploration. The presentation took place during the 13th UK-China Workshop on Space Science and Technology, where British and Chinese delegates were in attendance. The primary objective of the workshop was to facilitate collaboration between space experts from academia and industry, promoting partnerships in capabilities, skills, and technologies within the UK and Chinese space sectors.`,
	imgUrl: chinaUkImage,
	videoUrl: "" ,
	date: "12/2018"
	},






];
return (
	newsPosts
);
};

export default NewsPosts;
