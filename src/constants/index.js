import { orbyta, weplus } from "../assets/images";
import {
  angular,
  adminDashboard,
  contact,
  css,
  docker,
  express,
  git,
  github,
  html,
  javascript,
  k8s,
  linkedin,
  nest,
  nodejs,
  xora,
  react,
  redux,
  sass,
  sql,
  tailwindcss,
  gymExercise,
  typescript, zentryAwwwards,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
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
    imageUrl: sass,
    name: "Sass",
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
    imageUrl: nest,
    name: "NestJs",
    type: "Backend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Backend",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Architecture",
  },
  {
    imageUrl: k8s,
    name: "Kubernetes",
    type: "Architecture",
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
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Orbyta",
    icon: orbyta,
    iconBg: "#A0EADE",
    date: "experiences.orbyta.date",
    points: [
      "experiences.orbyta.point1",
      "experiences.orbyta.point2",
      "experiences.orbyta.point3",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "We Plus",
    icon: weplus,
    iconBg: "#fadfd1",
    date: "experiences.weplus.date",
    points: [
      "experiences.weplus.point1",
      "experiences.weplus.point2",
      "experiences.weplus.point3",
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
    iconUrl: xora,
    theme: "btn-back-red",
    name: "Xora - Saas Landing Page",
    description: "ProjectsComponent.projectsDescription.Xora",
    link: "https://sass-landing-page-sage.vercel.app/",
  },
  {
    iconUrl: gymExercise,
    theme: "btn-back-green",
    name: "Gym Exercise App",
    description: "ProjectsComponent.projectsDescription.GymExercises",
    link: "https://gymexercises-lake.vercel.app/",
  },
  {
    iconUrl: adminDashboard,
    theme: "btn-back-blue",
    name: "Admin Dashboard",
    description: "ProjectsComponent.projectsDescription.AdminDashboard",
    link: "https://admindashboard-tarkus5s-projects.vercel.app",
  },
  {
    iconUrl: zentryAwwwards,
    theme: "btn-back-yellow",
    name: "Zentry - Awwwards",
    description: "ProjectsComponent.projectsDescription.ZentryAwwwards",
    link: "https://awwwards-tau.vercel.app/",
  },
];
