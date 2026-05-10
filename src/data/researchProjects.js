import carmaImage from '../assets/images/research/carma.png';
import cogniautoaiImage from '../assets/images/research/cogniautoai.png';
import futureRobotsImage from '../assets/images/research/futurerobots.png';
import iawareImage from '../assets/images/research/iaware.png';

export const researchProjects = [
  {
    title: 'CogniAutoAI',
    summary: 'Human-aligned AI for responsible and explainable autonomous driving',
    themes: ['Neurosymbolic AI', 'Explainable AI', 'Human-centred decision-making'],
    image: cogniautoaiImage,
    imageAlt: 'CogniAutoAI cognitive hybrid intelligence architecture',
    description: [
      'Autonomous vehicles are progressing rapidly, powered by advanced machine learning approaches to perception, prediction, and decision-making. While deployments in the United States and China report promising safety in selected cities, their operation remains restricted to tightly defined domains, and demonstrating safety still depends on vast data collection and costly validation.',
      'More fundamentally, current machine learning architectures struggle with reasoning under uncertainty, adaptive risk assessment, and social interaction: capabilities that are essential for handling novel, ambiguous, or socially complex urban driving situations. In the UK, these challenges are intensified by dense environments and diverse road users, while the Automated Vehicles Act now requires autonomous vehicles to be demonstrably as safe as careful and competent human drivers.',
      'CogniAutoAI introduces Cognitive Hybrid Intelligence, a conceptual architecture that complements existing autonomous vehicle systems by combining human-inspired cognitive reasoning, including intent recognition, risk adaptation, and semantic abstraction, with statistical learning for transparent, adaptable, and evidence-based decisions. By integrating these capabilities, Cognitive Hybrid Intelligence establishes theoretical and methodological foundations for trustworthy AI in autonomous vehicles.',
    ],
  },
  {
    title: 'IAWARE',
    summary: 'Intelligent situational awareness and decision-making for safer CCAM systems',
    themes: ['Collective awareness', 'Multimodal AI', 'Ethical decision-making'],
    image: iawareImage,
    imageAlt: 'IAWARE collective awareness and decision-making architecture',
    description: [
      'IAWARE (Intelligent Situation-Aware Decision-Making System for CCAM Applications) advances AI-driven collective awareness and decision-making for Cooperative, Connected, and Automated Mobility. The project develops explainable AI models that help automated vehicles, infrastructure, services, and vulnerable road users exchange trusted information in real time and build a shared understanding of complex traffic environments.',
      'Its technical focus includes predictive system-state awareness, multimodal sensor fusion, resilient collective perception, road-user behaviour prediction, driver-state and vehicle-perception fusion, and high-level world models that support ethical decision-making. IAWARE also addresses operational design domain and scenario recognition, enabling automated systems to identify when conditions are changing and trigger safe actions in response to hazards, faulty perception sources, occlusions, or uncertain road-user behaviour.',
      'A central ambition of the project is to embed human-centric and responsible AI into the full CCAM action chain, from perception to decision-making and control. This includes ethical and human-like goal functions, assurance frameworks for trustworthy AI components, secure data and AI model spaces, and user-acceptance methods that consider the needs of diverse road users. Through simulation, proof-of-concept demonstrations, and real-world evaluations, IAWARE aims to improve the safety, transparency, resilience, and societal readiness of future CCAM technologies.',
    ],
  },
  {
    title: 'FAIR-ROBOTS',
    summary: 'Autonomous robotics for long-duration space missions and hazardous environments',
    themes: ['Space robotics', 'Autonomous manipulation', 'Human-robot interaction'],
    image: futureRobotsImage,
    imageAlt: 'FAIR-ROBOTS space robotics and autonomous systems overview',
    description: [
      'FAIR-ROBOTS builds on the FAIR-SPACE Hub to advance robotic sensing, perception, mobility, manipulation, autonomy, and human-robot interaction for future space missions. As human and scientific exploration move deeper into space, robots will increasingly act as proxy explorers: preparing infrastructure for human arrival, supporting crews during in-space operations, managing assets left behind, and carrying out repetitive or hazardous tasks that allow humans to focus on problems requiring cognition and judgment.',
      'For scientific exploration, autonomous spacecraft and robotic platforms will continue to operate in Earth orbit and deep space, reaching remote and hostile environments while returning valuable samples and data for analysis. The project aims to move beyond the state of the art by enabling space robots to perform complex tasks on long-duration missions with minimal dependence on ground crews. This includes technologies for on-orbit robots that repair satellites, assemble large space telescopes, manufacture in space, and remove orbital debris, as well as planetary rovers that survey terrain, support observation, extract resources, and deploy infrastructure for future human habitation.',
      'FAIR-ROBOTS also addresses human-robot interoperability in crewed environments such as the International Space Station. CAV-Lab contributes AI, control, teleoperation, and energy-aware planning methods that support more self-sufficient robotic systems capable of detecting anomalies, adapting to uncertainty, and operating reliably in extreme environments. The wider FAIR-SPACE programme connects academic research with industrial needs in robotics, artificial intelligence, and satellite and space technologies, while creating methods that can also transfer to nuclear, deep mining, and offshore energy sectors.',
    ],
  },
  {
    title: 'CARMA',
    summary: 'Cloud-assisted control and decision-making architectures for connected autonomous vehicles',
    themes: ['Connected autonomy', 'Distributed control', '5G and cloud systems'],
    image: carmaImage,
    imageAlt: 'CARMA connected autonomous vehicle architecture',
    description: [
      'CARMA (Secure Cloud-based Distributed Control Systems for Connected Autonomous Cars) develops cloud-assisted control and decision-making architectures for connected autonomous vehicles. The project integrates off-board information with on-board vehicle control through cloud computing, 5G communications, AI, and distributed optimal control, enabling vehicles to make better use of data from infrastructure, neighbouring vehicles, and remote services.',
      'The research extends vehicle perception beyond local sensor limits, expands the information horizon, and improves real-time decision-making when visibility, line of sight, or local sensing are constrained. It addresses the control and coordination challenges that arise when autonomous vehicles operate in dynamic traffic, high-speed manoeuvres, and uncertain driving conditions.',
      'CAV-Lab developed a connected control platform, cloud-assisted learning control methods for challenging manoeuvres such as overtaking, and AI-enabled interactive decision-making for highly interactive driving scenarios. Together, these methods support safer, faster, and more cooperative autonomous vehicle behaviour in complex real-world environments.',
    ],
  },
];

export const fundingGroups = [
  {
    title: 'EPSRC:',
    items: [
      'Vision-based Localisation Using Satellite Imagery (£80K), Oct. 2022 – present.',
      'Predictive Fault-detection for Autonomous Mobile Robots (£50K), Principal Investigator, March 2021 – March 2022.',
      'Future AI and Robotics for Space (£7M), Nov. 2017 – March 2022.',
      'End-to-End Deep Learning Control for Connected Autonomous Vehicles (£70K), Sept. 2017 – Sept. 2021.',
      'Secure Cloud-based Distributed Control Systems for Connected Autonomous Cars (£4M), June 2015 – March 2022.',
    ],
  },
  {
    title: 'InnovateUK:',
    items: [
      'A Digital Twin Simulation Platform for an AI-powered AMR for Warehousing, Aug. 2023 – Dec. 2023.',
      'Research to Consider the Future UK Opportunities in Active Debris Removal and in Orbit Servicing, Jan. 2022 – June 2022.',
      'GPR for Localisation of Autonomous Vehicles (£100K) , Oct. 2018 – May 2019.',
      'Holistic Energy Management Software Tool for a Fleet of Connected Electric Vehicles (£260K), Principal Investigator, Sept. 2018 – Sept. 2021.',
      '5G Above the Cloud (£270K), Innovate UK, Sept. 2018 – Sept. 2021.',
    ],
  },
  {
    title: 'EU Commission:',
    items: [
      'HARMO: Human-Aware Road Mobility Optimization (£220K), Jan. 2027 – present.',
      'Powering EU Net Zero Future by Escalating Zero Emission HDVs and Logistic Intelligence (£350K), Jan. 2023 - Jan. 2026',
      'Optimization of scalable real-time models and functional testing for e-drive concepts (£250K), Oct. 2017 – Nov. 2020.',
      'Improved Trustworthiness and Weather-Independence of Conditionally Automated Vehicles in Mixed Traffic Scenarios (£350K), June 2017 – Oct. 2020.',
      'Integrated Control of Multiple-Motor and Multiple-Storage Fully Electric Vehicles (£300K), Oct. 2013 – Sept. 2016.',
    ],
  },
  {
    title: 'Industry:',
    items: [
      'Supporting AI Required to Allow DEXTER Telemanipulator to Autonomously Respond to Haptic Feedback (£55K), Veolia Nuclear Solutions, Oct. 2021 – present.',
      'Autonomous Decision System Support (£70K), SPRINT, March 2021 – March 2022.',
      'UK In-Orbit Servicing Capability: A Platform for Growth, UKSA, Nov. 2020 – May 2021.',
      'Deep Learning for the Energy-Aware Guidance of Robots in Natural Environments (£65K), The UK Atomic Energy Authority, RACE, Oct. 2018 – Oct 2021.',
      'Autonomous High-Speed Overtaking in Structured Environments (£80K), Jaguar Land Rover, Oct. 2016 – Dec. 2019.',
      'Development of Pre-emptive Optimal Control for Active Suspension Systems (£170K), Jaguar Land Rover, Jan. 2013 – Jan. 2015.',
      'Development of Regenerative Auxiliary Power Systems, Automotive Partnership Canada (APC) and Canada Foundation for Innovation (CFI).',
    ],
  },
];
