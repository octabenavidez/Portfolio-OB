import temsImage from "../assets/icono-tems.png";
import supremeImage from "../assets/icono-supreme.webp";
import automapImage from "../assets/icono-automap.png";
import blogCafeImage from "../assets/blogcafe.png";
import thanksTomasImage from "../assets/thanksthomas.png";
// import peluqueriaImage from "../assets/peluqueria.png";
import bienesRaicesImage from "../assets/bienesraices.png";
import loopStudiosImage from "../assets/loopstudios.png";
import shortlyImage from "../assets/shortly.png";

import linkedinLight from "../assets/linkedin-light.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import githubLight from "../assets/github-light.svg";
import githubDark from "../assets/github-dark.svg";

export const PROJECTS = [
  {
    name: "Tems",
    link: "https://temscba.com/",
    description: "tems",
    src: temsImage,
  },
  {
    name: "Supreme Vape",
    link: "https://supremevape.shop/",
    description: "supremeVape",
    src: supremeImage,
  },
  {
    name: "Automap",
    link: "https://automapcba.com/",
    description: "automap",
    src: automapImage,
  },
];

export const OTHER_PROJECTS = [
  {
    link: "https://blogdecafe-5.netlify.app/index.html",
    description: "blogCafe",
    src: blogCafeImage,
  },
  {
    link: "https://thankstomas.com/",
    description: "thanksTomas",
    src: thanksTomasImage,
  },
  {
    link: "http://zujyayo.sao.dom.my.id/",
    description: "bienesRaices",
    src: bienesRaicesImage,
  },
  // {
  //   link: "https://automapcba.com/",
  //   description: "peluqueria",
  //   src: peluqueriaImage,
  // },
  {
    link: "https://octabenavidez.github.io/Loop-Studios/",
    description: "loopStudios",
    src: loopStudiosImage,
  },
  {
    link: "https://octabenavidez.github.io/Shortly/",
    description: "shortly",
    src: shortlyImage,
  },
];

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScriPT",
  "React",
  "Bootstrap",
  "Tailwind",
  "SASS",
  "Git",
  "GitHub",
  "PHP",
  "Laravel",
  "MySQL",
];

export const INPUTS = [
  {
    name: "name",
    type: "text",
    placeholder: "placeholders.name",
  },
  {
    name: "email",
    type: "email",
    placeholder: "placeholders.email",
  },
  {
    name: "message",
    type: "textarea",
    placeholder: "placeholders.message",
  },
];

export const SOCIAL_MEDIA = [
  {
    name: "github",
    link: "https://github.com/octabenavidez",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/octabenavidez/",
  },
];

export const SOCIAL_ICONS = {
  light: {
    github: githubLight,
    linkedin: linkedinLight,
  },
  dark: {
    github: githubDark,
    linkedin: linkedinDark,
  },
};

export const LANGUAGES = [
  {
    lang: "Español",
    code: "es",
  },
  {
    lang: "English",
    code: "en",
  },
];
