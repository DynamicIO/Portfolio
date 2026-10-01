import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";
import project11 from "../assets/projects/project-11.jpg";
import project12 from "../assets/projects/project-12.jpg";
import project13 from "../assets/projects/project-13.jpg";
import project14 from "../assets/projects/project-14.jpg";
import project15 from "../assets/projects/project-15.jpg";

export const HERO_CONTENT = `Passionate about research, cybersecurity, hackathons, CTFs, and building
meaningful technology. Always exploring new challenges, learning, and looking for opportunities
to turn ideas into impactful solutions.`;

export const ABOUT_TEXT = [
  `I'm a Computer Science graduate student at Kean University with a background in networking and
  cybersecurity. My work spans several areas: I've simulated quantum networks for the Department of
  Defense and NSF, built deep learning models for IoT device authentication, analyzed data for
  socio-economic research, and supported live operations at the New Jersey State Police Real Time
  Crime Center.`,
  `Outside the lab, I compete in hackathons and CTFs and build web tools, from security utilities to
  full products. I'm drawn to work that combines research with real-world impact, and I'm always
  looking for the next hard problem to solve.`,
  `When I'm not at a keyboard, I'm usually building something with a Raspberry Pi or Arduino, or
  indulging my love of aviation.`,
];

export const EXPERIENCES = [
  {
    year: "2026",
    role: "Graduate Research Assistant",
    company: "Kean University, Department of Psychology (TEEN Lab)",
    logo: "/Kean_univ_nj_seal.png",
    description: `Serve as project manager for a developmental neuroscience study on how VR social stressors affect
    adolescent physiological and behavioral responses, coordinating multimodal data collection (EEG, actigraphy,
    salivary hormones, behavioral data). Support data cleaning, integration, and analysis in Python toward publication.`,
    technologies: ["Project Management", "Python", "EEG", "Data Analysis", "IRB"]
  },
  {
    year: "2025",
    role: "Graduate Research Assistant",
    company: "Kean University, College of Business and Public Management",
    logo: "/Kean_univ_nj_seal.png",
    description: `Designed and executed data cleaning and analysis pipelines in Python for Survey of Income and Program
    Participation (SIPP) datasets, spanning raw data acquisition and preprocessing across the 1996 to 2008 panels.`,
    technologies: ["Python", "Data Pipelines", "Data Cleaning", "SIPP"]
  },
  {
    year: "2025",
    role: "Quantum Researcher",
    company: "Department of Defense, National Science Foundation, Florida International University",
    logo: "/Seal_of_the_United_States_Department_of_Defense.svg.png",
    description: `Designed and implemented quantum network simulations scaling to 1,200 nodes to evaluate how imperfect
    Bell State Measurements (BSMs) and classical communication delays affect end-to-end entanglement fidelity and throughput.`,
    technologies: ["NetSquid", "Python", "Quantum Networking", "Pandas", "Matplotlib"]
  },
  {
    year: "2025",
    role: "Co-Entrepreneurial Lead",
    company: "National Science Foundation I-Corps Hub (Northeast Region), Team SAGEM",
    logo: "/NSF.svg.png",
    description: `Completed the NSF I-Corps program as Co-Entrepreneurial Lead, driving customer discovery, market validation,
    and commercialization research for a cognitive health product. Conducted and analyzed 30+ customer interviews and
    delivered cohort presentations to inform the product and business plan.`,
    technologies: ["Customer Discovery", "Market Validation", "Commercialization"]
  },
  {
    year: "2024",
    role: "Real Time Crime Center Data Analyst",
    company: "New Jersey State Police",
    logo: "/Logo_of_the_New_Jersey_State_Police.svg.png",
    description: `Monitored and analyzed 9+ real-time criminal intelligence feeds, license plate recognition systems, and
    surveillance databases to support active investigations. Produced intelligence reports, data visualizations, and crime
    pattern analyses, and facilitated information sharing across local, state, and federal partners.`,
    technologies: ["Intelligence Analysis", "OSINT", "ALPR", "Data Visualization"]
  },
  {
    year: "2024",
    role: "Socio-Economic Research Fellowship",
    company: "Kean University, National Science Foundation",
    logo: "/NSF.svg.png",
    description: `Developed and implemented machine learning models in Python (logistic regression and additional statistical
    techniques) to predict contingent worker classification as part of an NSF-funded research team.`,
    technologies: ["Python", "STATA", "Logistic Regression", "Machine Learning"]
  },
  {
    year: "2024",
    role: "CAHSI Cyber Security Researcher",
    company: "University of Texas, Kean University, National Science Foundation",
    logo: "/Kean_univ_nj_seal.png",
    description: `Conducted mentored cybersecurity research through the CAHSI REU program; authored a research plan,
    tracked progress, and presented findings via a formal research poster.`,
    technologies: ["Cybersecurity Research", "Python", "Research Poster"]
  },
  {
    year: "2024",
    role: "End User Field Services Technician",
    company: "NJ Transit",
    logo: "/nj-transit-logo.jpg",
    description: `Provided on-site technical support across NJ Transit, troubleshooting hardware, software, and network
    connectivity issues to minimize downtime. Configured and deployed workstations, and used Active Directory and
    PowerShell for diagnostics and user account management.`,
    technologies: ["Active Directory", "PowerShell", "TCP/IP", "Technical Support"]
  },
  {
    year: "2023",
    role: "IoT Research Assistant",
    company: "Department of Defense, National Science Foundation, Florida International University",
    logo: "/Seal_of_the_United_States_Department_of_Defense.svg.png",
    description: `Contributed to the development of a deep learning-based radio fingerprinting system for IoT device
    authentication, working with software-defined radios (SDR) and RF signal processing.`,
    technologies: ["PyTorch", "Deep Learning", "SDR", "RF Fingerprinting", "IoT Security"]
  },
  {
    year: "2022",
    role: "Cisco Network Intern",
    company: "Cisco Inc.",
    logo: "/cisco-systems.png",
    description: `Collaborated with Cisco and Round Rock engineers to deploy 16 Meraki MR76 and MR86 Wi-Fi 6 access points
    across VIP and outdoor zones for the Global Citizen Festival in NYC, gaining hands-on experience in large-scale event
    networking and wireless infrastructure optimization.`,
    technologies: ["Cisco Meraki", "Wi-Fi 6", "Network Deployment"]
  },
];

export const PROJECTS = [
  {
    title: "InviteUs",
    image: project15,
    description:
      "InviteUs - A modern invitation platform for creating and managing digital invitations with ease.",
    technologies: ["React", "Next.js", "Vercel", "Web Development"],
    link: "https://inviteus.vercel.app/"
  },
  {
    title: "Dynamic.IO",
    image: project14,
    description:
      "Dynamic.IO - Premium Web Development Agency specializing in modern web solutions and digital experiences.",
    technologies: ["Web Development", "UI/UX Design", "Digital Solutions"],
    link: "https://www.dynamicio.net/"
  },
  {
    title: "PasswordGenanAlyser",
    image: project6,
    description:
      "PasswordGenAnalyser is a fast, easy tool to create secure passwords and check their strength for better online protection.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://passwordgenanalyser.vercel.app/"
  },
  {
    title: "GenHash",
    image: project11,
    description:
      "GenHash is a simple, fast hash generator that lets users input text and instantly generate secure MD5, SHA-1, and SHA-256 hashes.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://genhash.vercel.app/"
  },
  {
    title: "MetaDataTool",
    image: project9,
    description:
      "Metadata Tool lets you view, edit, and remove image metadata instantly—fast, easy, and privacy-focused.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://metadatatool.vercel.app/"
  },
  {
    title: "ZeroGPT",
    image: project12,
    description:
      "ZeroGPT AI Detector helps users detect AI-generated text using advanced algorithms, offering quick, reliable insights for educators, students, and content reviewers.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://zerogptai.vercel.app/"
  },
  {
    title: "ParticleVisualizer",
    image: project13,
    description:
      "Particle Visualizer is an interactive simulator for creating and customizing particle effects, perfect for exploring physics-based visualizations in real time.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://particlesimulator.vercel.app/"
  },
  {
    title: "BananaCPMgame",
    image: project7,
    description:
      "BananaCPMGame is a fun clicker game where you measure clicks per minute (CPM) by clicking a banana, fast-paced, addictive, and perfect for quick play.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://bananacpmgame.vercel.app/"
  },
  {
    title: "DebtCalc",
    image: project8,
    description:
      "DebtCalc helps you quickly estimate how long it will take to pay off your debt and how much interest you'll pay—simple, clear, and effective.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://ccdebtcalc.vercel.app/"
  },
  {
    title: "Audio Sampler - Opera Extension",
    image: project10,
    description:
      "Audio Sampler is a simple Opera extension for quick, in-browser audio recording—built for easy capture, playback, and management as part of a senior capstone project.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://github.com/d-yager/audio-extension/"
  },
  {
    title: "SAM IN USA E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website built on shopify backend with all Ecom features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://saminusa.com/"
  },
  {
    title: "Focal Stands E-Commerce Website",
    image: project5,
    description:
      "Focal Stands is an Ecom website specializing in watch stand holders. The website is built on shopify backend with all features of an Ecom website such as user authenticaion, product browsing and checkout directly from site",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://focalstands.com/"
  },
  {
    title: "RFID Door Lock",
    image: project2,
    description:
      "A fully functional RFID door lock built on an Arduino Uno with custom 3D-printed parts, created during Kean Hackathon 2022 and earning my team 2nd place.",
    technologies: ["Arduino Uno", "C++", "RFID", "3D Printing"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and experince.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Web Games",
    image: project4,
    description:
      "Created varius webgames such as Chess, Tic Tac Toe and matching cards. Gaming website in progress",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "New Jersey, USA",
  email: "ben.harry.abraham@gmail.com",
};

export const ACHIEVEMENTS = [
  {
    title: "Competitions",
    items: [
      { name: "TryHackMe", detail: "Ranked in the top 2% globally (2021)" },
      { name: "NJIT National CTF", detail: "Top 20% nationally (2023 & 2025)" },
      { name: "GMIS National Conference CTF", detail: "Top 25% nationally (2024)" },
      { name: "Kean University Hackathon", detail: "2nd place, RFID door lock on Arduino Uno with 3D-printed parts (2022)" },
    ],
  },
  {
    title: "Training",
    items: [
      { name: "TryHackMe Cyber Defense", detail: "Threat & vulnerability management, incident response" },
      { name: "TryHackMe Junior Penetration Tester", detail: "Learning path" },
    ],
  },
  {
    title: "Leadership",
    items: [
      { name: "Police Explorers", detail: "Promoted to Sergeant, then Chief; led drills, mentored junior Explorers, and contributed hundreds of hours of community service" },
      { name: "SkillsUSA", detail: "Judge for the Tech Apps competition (Thomas Edison High School, NYC)" },
    ],
  },
  {
    title: "Affiliations",
    items: [
      { name: "IEEE", detail: "Member" },
      { name: "ACM", detail: "Member, Kean University chapter" },
    ],
  },
];
