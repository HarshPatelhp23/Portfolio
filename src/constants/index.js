import { atharva, corelto, virtueinfo } from "../assets/images";
import {
  html,
  css,
  javascript,
  jquery,
  tailwindcss,
  git,
  github,
  ruby,
  ror,
  rspec,
  mysql,
  postgresql,
  mongodb,
  linkedin,
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
  contact
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: jquery,
    name: 'Jquery',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
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
    imageUrl: ruby,
    name: "Ruby",
    type: "Backend",
  },
  {
    imageUrl: ror,
    name: "Ruby On Rails",
    type: "Backend",
  },
  {
    imageUrl: rspec,
    name: "rspec",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: postgresql,
    name: "PostgreSQL",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
];

export const experiences = [
  {
    title: "Trainee ROR Developer",
    company_name: "VirtueInfo",
    icon: virtueinfo,
    iconBg: "#accbe1",
    date: "October 2021 - April 2022",
    points: [
      "Learn HTML,CSS,Javascipt and Ruby on Rails",
      "Work on creating some demo projects like blog management app, finanace tracker app from scratch for learning purpose.",
    ],
  },
  {
    title: "JR ROR Developer",
    company_name: "VirtueInfo",
    icon: virtueinfo,
    iconBg: "#accbe1",
    date: "April 2022 - April 2023",
    points: [
      "Assisted in the development of RESTful APIs for seamless integration with front-end components.",
      "Implemented automated testing using RSpec, increasing code coverage by 40% and reducing bugs in production by 20%",
      "Developed a comprehensive training module on rubocop best practices for the development team and fostering a culture of quality code and continuous improvement.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Atharva Systems",
    icon: atharva,
    iconBg: "#b7e4c7",
    date: "April 2023 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
    {
      title: "Full-Stack Software Developer",
      company_name: "Corelto Next Gen PVT-LTD",
      icon: corelto,
      iconBg: "#b7e4c7",
      date: "August 2024 - Present",
      points: [
        "Built and maintained scalable web applications using Ruby on Rails for backend and Vue.js for frontend.",
        "Designed RESTful APIs and integrated them seamlessly with dynamic frontend components.",
        "Worked closely with cross-functional teams to define, design, and ship new features that enhanced user experience and application performance.",
        "Ensured code quality through unit tests, integration tests, and participation in peer code reviews.",
        "Optimized database queries and improved backend performance for high-load scenarios.",
        "Implemented responsive UI designs and ensured consistent behavior across modern browsers and devices.",
      ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/HarshPatelhp23',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/harsh-patel-776198212/',
  }
];

export const projects = [
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Partner-Portal',
    description: 'Partner-Portal is a platform designed to streamline data transfer and integration, connecting Salesforce, Google Sheets, Zoho CRM, and third-party APIs, while improving efficiency with scheduled background jobs and automated processes',
    // link: '',
  },
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Patel-Predicts',
    description: 'Patel-Predicts is a fantasy cricket app that lets users create teams, predict match outcomes, and engage in exciting cricket leagues, offering a fun and competitive experience for cricket enthusiasts.',
    link: 'https://github.com/HarshPatelhp23/PatelPredicts',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'ProjectsLogBook',
    description: 'ProjectsLogbook is a SaaS application that helps organizations track employee activities, including working hours, tasks, and project progress, providing detailed insights into time spent on each task for better productivity management.',
    // link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'TAL-Chats',
    description: 'TAL-Chats is a chat application that allows logged-in users to send text and media messages, creating a seamless communication experience with friends in a secure and user-friendly environment.',
    link: 'https://github.com/Harshu2306/TAL-CHATS',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Webinari',
    description: 'Webinari is an intuitive platform where students can easily explore, register, and pay for diverse workshops, enhancing their skills through engaging learning experiences, all while enjoying a smooth user interface.',
    link: 'https://github.com/Harshu2306/Webinari',
  },
];
