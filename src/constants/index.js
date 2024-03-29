import { flywheel, nielit, iHub } from "../assets/images";
import {
  linkedin,
  car,
  estate,
  pricewise,
  snapgram,
  summiz,
  threads,
  contact,
  html,
  css,
  bootstarp,
  javascript,
  nodejs,
  express,
  react,
  sql,
  postgreSql,
  mongodb,
  git,
  github,
  c,
  cpp,
  python,
  pyqt,
  figma,
  numpy,
  pandas,
  arduino,
  linux,
  drum,
  lfr,
  build,
  micromouse,
  attandance,
  chat,
  game,
  to_do,
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
    imageUrl: bootstarp,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Language",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Backend",
  },
  {
    imageUrl: postgreSql,
    name: "PostgreSQL",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "Mongodb",
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
    imageUrl: pyqt,
    name: "Pyqt",
    type: "GUI",
  },

  {
    imageUrl: cpp,
    name: "Cpp",
    type: "Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Python",
  },

  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },
  {
    imageUrl: numpy,
    name: "Numpy",
    type: "AI",
  },
  {
    imageUrl: pandas,
    name: "Pandas",
    type: "AI",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "OS",
  },
  {
    imageUrl: arduino,
    name: "Arduino",
    type: "IOT",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Flywheel Aerospace",
    icon: flywheel,
    iconBg: "#accbe1",
    date: "Aug 2023 - Dec 2023",
    points: [
"Central role in developing and maintaining of a real-time data acquisition system for 9 satellite sensors.",
"Managed UART data reception, designed PyQt5 GUI, and enabled the capture of 16 distinct data types into Excel files.",
"Designed software to control the movement of a robotic arm in 6 degrees of freedom, utilizing I2C communication.",
    ],
  },
  {
    title: "Training in Artificial Intelligence and Machine Learning",
    company_name:
      "National Institute of Electronics & Information Technology, Delhi",
    icon: nielit,
    iconBg: "#b7e4c7",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Completed training in AI and ML in lieu of completion of 4th semester.",
      "Learnt multiple algorithms incuding  Linear Regression, Naive Bayes, PCA, KNN, CNN, ANN, Clustering, etc",
      "Implmented multiple projects such as emotion identifier using NLTK, Stamp Identification, Breast Cancer Detection and House Price Prediction.",
    ],
  },
  {
    title: "Research Fellow",
    company_name: "IIT Roorkee",
    icon: iHub,
    iconBg: "#a2d2ff",
    date: "May 2023 - Sept 2023",
    points: [
      "Significantly contributed to developing a specialized earthquake rescue robot for human detection, actively involved in sensor integration, robust communication system implementation, and complex data analysis",
      "Seamlessly integrated multiple sensors, wrote their operation codes and established real time video output on network.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: chat,
    theme: "btn-back-green",
    name: "Chat Application",
    description:
      "A full stack chat application with login and sign up functionality. Implemented realtime message delivery using socket.io, along with online status functionality.",
    link: "https://chat-app-tir5.onrender.com/",
  },
  {
    iconUrl: to_do,
    theme: "btn-back-blue",
    name: "To Do App",
    description:
      "Build good old to do app with React and Mongo DB integration. Implemented create update and delete functionality.",
    link: "https://gleeful-toffee-285dbb.netlify.app/",
  },

  {
    iconUrl: game,
    theme: "btn-back-yellow",
    name: "Tic-Tac-Toe",
    description:
      "Developed a fun game using react with TIME TRAVEL functionality to go back in time and change the move to win :)",
    link: "https://tic-tac-toe-164.vercel.app/",
  },

  {
    iconUrl: attandance,
    theme: "btn-back-red",
    name: "Smart Attendance System",
    description:
      "An IoT-based attendance system using RFID cards for marking, reducing time by 80% and eliminating paper, with RC522 RFID Card Reader and ESP8266 for wireless data transmission, featuring an LCD display for output.",
    link: "https://github.com/Codey001/Attandance-system-v1",
  },
  {
    iconUrl: micromouse,
    theme: "btn-back-green",
    name: "Micromouse - Maize Solver",
    description:
      "A miniature robot equipped with 5 IR sensors, programmed with the Flood fill algorithm, and controlled by an Arduino Nano, designed to efficiently navigate and solve 3D maize mazes in minimal time.",
    link: "https://github.com/Codey001/My-Projects/tree/main/Micromouse",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Epilepsy Detection Model",
    description:
      "Crafted a ML model to detect initial symptoms of epilespy. Build as team project for IIT Mandi hackathon.",
    link: "https://github.com/Codey001/My-Projects/tree/main/ML%20model",
  },

  {
    iconUrl: drum,
    theme: "btn-back-pink",
    name: "Drum-Kit",
    description:
      "A JavaScript based website created to emulate the the actual drumkit. Created as fun project to dive deeper into website building.",
    link: "https://codey001.github.io/Drum-Kit/",
  },
  {
    iconUrl: build,
    theme: "btn-back-blue",
    name: "Tech Build",
    description:
      "Website to build your own PC. Created using HTML, CSS and Bootstrap as a part of initial learning.",
    link: "https://codey001.github.io/techBuild/",
  },
  {
    iconUrl: lfr,
    theme: "btn-back-orange",
    name: "Line Follower Robot",
    description:
      "Built a line following robot for IIT Bombay techfest zonals, capable of following line and correction its path with PID.",
    link: "https://github.com/Codey001/My-Projects/tree/main/Line%20Following%20Robot%20(LFR)",
  },
];
