
const NewsPosts = () => {

const newsPosts = [
	

{
	title: "Autonomous driving – are we nearly there yet?",
	body: `One critical part of the effective deployment of AVs is for them to be trusted by the public to make the right decisions in road traffic, properly balancing the system goals of efficiency and capacity with human values such as safety and legality. Without this being well understood, the potential benefits of AVs could fail to materialise. In this talk, I will introduce the challenges towards trustworthy autonomous driving and novel solutions to address both human concerns and design requirements. Please see the details here: https://www.cambridgewireless.co.uk/events/autonomous-driving-are-we-there-yet/`,
	date: "12/01/2022",
	imgUrl:
		require('./PostMedia/CW.png'),

	},



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
	require('./PostMedia/demonstration.jpg'),
	}		
	,
	
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
	newsPosts
);
};

export default NewsPosts;