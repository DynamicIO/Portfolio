import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

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
    year: "09-2024 - 01-2025",
    role: "Real Time Crime Center Analyst",
    company: "New Jersey State Police",
    description: `Data monitoring and analysis, Technological support, Reporting and
    documentation`,
    technologies: ["365 Suite","Law Enforcment Databases" ,"ALPRs", ]
  },
  {
    year: "01-2024 - 01-2025",
    role: "NSF Build and Broaden Research Fellowship",
    company: "Kean University",
    description: `Assisted in the development and implementation of machine learning
    models to predict contingent workers using logistic regression and
    other statistical techniques.`,
    technologies: ["Python", "STATA", ,,],
  },
  {
    year: "01-2024 - 05-2024",
    role: "End User Field Services Technician Intern",
    company: "NJ Transit",
    description: `Hardware and Software installation and maintenance, User Assistance,
    Security Compliance and Documentation.`,
    technologies: ["TCP/IP", "PowerShell","Active Directory" ,]
  },
  {
    year: "02-2024 - 05-2024",
    role: "CAHSI Research Scholar",
    company: "University of Texas, Kean University",
    description: `Conducted mentored research as part of the CAHSI REU program, and
    engaged in training to strengthen my computing, communication, and
    professional skills. Created a research plan, maintained a journal to
    report on research progress, and created a research poster to
    disseminate my research results..`,
    technologies: ["Python", , , ],
  },
  {
    year: "05-2023 - 09-2023",
    role: "FIU Research Intern",
    company: "Florida International University",
    description: `Contributed and assisted in the development of a deep learning-based
    radio fingerprinting system for IoT device authentication.`,
    technologies: ["Python", "SDR", , ],
  },
  {
    year: "08-2022 - 09-2022",
    role: "Cisco Network Intern",
    company: "Cisco inc.",
    description: `Worked in a team consisted of Round Rock and Cisco network
    engineers to set up all WIFI-6 access points for the Global Citizens
    Festival in NYC.`,
    technologies: ["TCP/IP", , , ],
  },
 
];

export const PROJECTS = [
  {
    title: "SAM-IN-USA E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website built on shopify with all ecom features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "RFID Door Lock",
    image: project2,
    description:
      " A fully functional RFID door lock that could be mounted on any door, created during Hackathon 2022.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Web Games",
    image: project4,
    description:
      "Created varius webgames such as Chess, Tic Tac Toe and matching cards.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Eatontown, NJ ",
  email: "abrahabe@kean.edu",
};
