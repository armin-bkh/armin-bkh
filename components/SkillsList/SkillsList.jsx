import SkillItem from "components/SkillItem/SkillItem";
import { BsCodeSlash } from "react-icons/bs";
import {
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiJquery,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNpm,
  SiStyledcomponents,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { AiOutlineApi } from "react-icons/ai";

const skills = [
  {
    id: 1,
    icon: BsCodeSlash,
    title: "HTML and CSS",
    description:
      "implement html and css to creating initial layout, considering responsive web design scenarios",
  },
  {
    id: 2,
    icon: SiSass,
    title: "SASS preprocessor",
    description:
      "For ease in styling and reading higher code and using the features provided by sass, for example (mixin, variables, function and more ...)",
  },
  {
    id: 3,
    icon: SiBootstrap,
    title: "BootStrap4",
    description:
      "Utilizing each one of these framework to improve the efficiency of user interface styles.",
  },
  {
    id: 4,
    icon: SiJavascript,
    title: "JavaScript",
    description:
      "Of course, to create a dynamic application, we need JavaScript to be able to create a complete application that can be used.",
  },
  {
    id: 5,
    icon: SiJquery,
    title: "JQuery",
    description:
      "It is one of the oldest and most widely used JavaScript libraries",
  },
  {
    id: 6,
    icon: ImGit,
    title: "Git",
    description:
      "Utilizing the git flow procedure including (branching, pull, push, standard commit) to better manage the project and code review. ",
  },
  {
    id: 7,
    icon: SiReact,
    title: "React library",
    description:
      "Creating super-fast single page application using react.js library, with reusable, maintainable and manageable Functional components.",
  },
  {
    id: 8,
    icon: SiReactrouter,
    title: "React hooks and component lifecycle",
    description: [
      "Utilizing React Hooks with Functional component to get rid of redundancy and increasing the efficiency and clean code standards.",
      "Mostly used ones are useState, useEffect, and useContext.",
    ],
  },
  {
    id: 9,
    icon: SiRedux,
    title: "Redux",
    description:
      "Sometimes in large applications that have a lot of global data, we can use Redعx and its related tools to better manage them.",
  },
  {
    id: 10,
    title: "Redux-toolkit",
    description:
      "Redux toolkit is one of the Redux related tools that we use to make Redax easier to use.",
  },
  {
    id: 11,
    icon: SiTailwindcss,
    title: "TailwindCss",
    description: [
      "Utilizing each one of these framework to improve the efficiency of user interface styles.",
    ],
  },
  {
    id: 12,
    icon: SiNextdotjs,
    title: "NextJs FrameWork",
    description:
      "I use next.js in the case of projects when the SEO purposes, server-side render gets more important. ",
  },
  {
    id: 13,
    title: "Formik library",
    description:
      "As all the applications required authentication and authorization, getting data from user, validate, handle and send data to the server; the formic library is the most powerfull library to handle all these requirements. ",
  },
  {
    id: 14,
    icon: SiTypescript,
    title: "TypeScript",
    description:
      "some times in the large applications we need manage variable types for better and cleaner coding and for the easily debugging",
  },
  {
    id: 15,
    icon: SiNpm,
    title: "npm",
    description:
      "Taking advantage of node package manager in react.js / next.js projects to implement famous react libraries. Some of them includes react-select, react",
  },
  {
    id: 16,
    icon: AiOutlineApi,
    title: "Call the server and working with API",
    description:
      "Call the server with all the type of APIs to send request, analyze response and handle all errors in the efficient way to display on the client-side.",
  },
  {
    id: 17,
    icon: SiStyledcomponents,
    title: "Styled-components",
    description:
      "styled-components allow us to write css in js and pass prop to elements and deal with them as components",
  },
];

const SkillsList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} Icon={skill.icon} />
      ))}
    </ul>
  );
};

export default SkillsList;
