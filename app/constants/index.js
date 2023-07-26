import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  bootstrap,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  next,
  npm,
  vite,
  BR_app
} from "../../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NPM",
    icon: npm,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Vite.js",
    icon: vite,
  },

  {
    name: "Git y Github",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];


const projects = [
  {
    name: "BR Burgers APP",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: BR_app,
    source_code_link: "https://github.com/jonaaguidi/BRBurgers",
    deploy: "https://br-burgers.vercel.app/"
  },
  {
    name: "BR Burgers APP",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: BR_app,
    source_code_link: "https://github.com/",
    deploy: "https://br-burgers.vercel.app/"
  },
  {
    name: "BR Burgers APP",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: BR_app,
    source_code_link: "https://github.com/",
    deploy: "https://br-burgers.vercel.app/"
  },
  {
    name: "BR Burgers APP",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: BR_app,
    source_code_link: "https://github.com/",
    deploy: "https://br-burgers.vercel.app/"
  },
];

export { technologies, projects };