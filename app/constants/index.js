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
  next,
  npm,
  vite,
  BR_app,
  Educator,
  TusPeliculas
} from "../../public/assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
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
    "La Landing Page nos redirecciona a la aplicación web donde tenemos un menú desplegable con los productos. Cuando elegimos un producto, aparece un modal con las distintas opciones del mismo. Una vez seleccionada la opción del producto, este se añade a un carrito y aparece un botón que nos permite enviar nuestro pedido por WhatsApp con todos los datos del envío.",
    image: BR_app,
    source_code_link: "https://github.com/jonaaguidi/BRBurgers",
    deploy: "https://br-burgers.vercel.app/"
  },
  {
    name: "TusPeliculas APP",
    description:
      "Web App hecha con HTML, CSS y JavaScript, la App fue hecha siguiendo la metodología Mobile-First, sigue una arquitectura de clases tipo BEM, Manipula el DOM, trae información desde una API utilizando Fetch API / Async Await, además permite guardar tus peliculas favoritas en LocalStorage y tiene un sistema de navegación utilizando Hash Navigation API. Todo desarrollado en JavaSript Vanilla.",
    image: TusPeliculas,
    source_code_link: "https://github.com/jonaaguidi/JSVanilla-Projects/tree/main/JavaScript-API-REST",
    deploy: "https://tuspeliculas.vercel.app/"
  },
  {
    name: "Educator Landing Page",
    description:
      "Landing Page hecha en HTML, CSS y JavaScript, la web contiene animaciones y transiciones hechas en CSS, funciona para todos los dispositivos es totalmente Responsive, además de Manipular el DOM con JavaScript para mostrar el menú desplegable en dispositivos Tablet y Mobile.",
    image: Educator,
    source_code_link: "https://github.com/jonaaguidi/JSVanilla-Projects/tree/main/JavaScript-EducationWebsite",
    deploy: "https://educatorjs.vercel.app/"
  },
];

export { technologies, projects };