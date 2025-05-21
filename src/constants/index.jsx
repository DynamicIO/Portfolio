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

export const HERO_CONTENT = `A motivated senior at Kean University with passion for Hackathons, CTF's, and
enriching oppurtunites in the tech field.`;

export const ABOUT_TEXT = `As a student of Information Technology and Cyber Security, 
I have a passion for technology and all its aspects, especially its application in the realm of cybersecurity. 
I am extremely interested and passionate about pursuing opportunities that will enable me to further expand and 
enhance my knowledge, skill set, and gain more experience in the field, to prepare myself for my upcoming M.S 
program as well as the professional work field. In addition to my academic background, I have also gained practical
experience in the field through various internships, hackathons and comptetions. Through these experiences, I have 
developed a strong foundation in Information Technology, networking (TCP/IP) and cybersecurity.`;

export const EXPERIENCES = [
  {
    year: "",
    role: "Real Time Crime Center Analyst",
    company: "New Jersey State Police",
    description: `Data monitoring and analysis, Technological support, Reporting and
    documentation`,
    technologies: ["Law Enforcment Databases" ,"ALPRs", "365 Suite"]
  },
  {
    year: "",
    role: "NSF Build and Broaden Research Fellowship",
    company: "Kean University",
    description: `Assisted in the development and implementation of machine learning
    models to predict contingent workers using logistic regression and
    other statistical techniques.`,
    technologies: ["Python", "STATA", "365 Suite"]
  },
  {
    year: "",
    role: "End User Field Services Technician Intern",
    company: "NJ Transit",
    description: `Hardware and Software installation and maintenance, User Assistance,
    Security Compliance and Documentation.`,
    technologies: ["Active Directory", "TCP/IP", "PowerShell", "365 Suite"]
  },
  {
    year: "",
    role: "CAHSI Research Scholar",
    company: "University of Texas, Kean University",
    description: `Conducted mentored research as part of the CAHSI REU program, and
    engaged in training to strengthen my computing, communication, and
    professional skills. Created a research plan, maintained a journal to
    report on research progress, and created a research poster to
    disseminate my research results..`,
    technologies: ["Python", "365 Suite"]
  },
  {
    year: "",
    role: "FIU Research Intern",
    company: "Florida International University",
    description: `Contributed and assisted in the development of a deep learning-based
    radio fingerprinting system for IoT device authentication.`,
    technologies: ["Python", "SDR"]
  },
  {
    year: "",
    role: "Cisco Network Intern",
    company: "Cisco inc.",
    description: `Worked in a team consisted of Round Rock and Cisco network
    engineers to set up all WIFI-6 access points for the Global Citizens
    Festival in NYC.`,
    technologies: ["TCP/IP"]
  },
 
];

export const PROJECTS = [
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
      "A fully functional RFID door lock that could be mounted on any door, created during Kean Hackathon 2022 earning my team and I 2nd place.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
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
  address: "Eatontown, NJ ",
  email: "abrahabe@kean.edu",
};
