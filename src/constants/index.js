
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    react,
    redux,
    tailwindcss,
    typescript,
    bird,
    chai,
    school,
    cloth,
    springboot,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
  
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: springboot,
        name: "SpringBoot",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        project_name: "MBA Chaiwala Clone / Portfolio / School Website for client / Client Dashboard /Samyati (A Startup Fashion Brand)",
        icon: "",
        iconBg: "#accbe1",
        date: "March 2022 - April 2025",
        points: [
           "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-origin technologies, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Spring Boot Developer",
        project_name: "Client Dashboard/ Samyati (A Startup Fashion Brand)",
        icon: "",
        iconBg: "#fbc3bc",
        date: "March 2023 - April 2025",
        points: [
            "Developing and maintaining web applications using SpringBoot and other related technologies.",
            "Collaborating with cross-origin technologies, and other developers to create high-quality products.",
            "Implementing Orms to control query operations.",
            "Implementing Spring Security to control authentication.",
            ],
    },
    {
        title: "Web Developer",
        project_name: "Samyati / Blues&Pink ",
        icon: "",
        iconBg: "#b7e4c7",
        date: "March 2025 - Current",
        points: [
"Developing and maintaining web application, client dashboard using React.js, SpringBoot and other related technologies.",
            "Collaborating with cross-functional teams including fashion designers, client, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://wa.me/917678466800',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/akshargoel',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akshargoel/',
    }
];

export const projects = [
    {
        iconUrl: bird,
        theme: 'btn-back-red',
        name: 'My Portfolio',
        description: 'Developed a website to summarize my journey. In the process, learnt three.js, redux.',
        link: 'https://portfolio-akshar-goels-projects.vercel.app/',
    },
    {
        iconUrl: cloth,
        theme: 'btn-back-pink',
        name: 'Samyati',
        description: 'An ecommerce website for a clothing designer startup brand. Developed using Reactjs, SpringBoot and Mysql. ',
        link: '',
    },
    {
        iconUrl: chai,
        theme: 'btn-back-green',
        name: 'MBA CHAIWALA Clone',
        description: 'Created a frontend replica of the popular franchise "MBA Chaiwala.',
        link: 'https://mba-chaiwala-clone-silk.vercel.app/',
    },
    {
        iconUrl: school,
        theme: 'btn-back-blue',
        name: 'Blues&Pink',
        description: 'Designed and built a responsive school website for a client. ',
        link: 'https://blues-pink.vercel.app/',
    },
    {
        iconUrl: "",
        theme: 'btn-back-black',
        name: 'Client Dashboard',
        description: 'Developed a client dashboard for one client.',
        link: 'https://github.com/akshargoel/clientDashboard',
    },
];