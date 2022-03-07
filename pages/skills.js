import { BsDot } from "react-icons/bs";

const skills = [
  {
    id: 1,
    title: "HTML and CSS",
    description:
      "implement html and css to creating initial layout, considering responsive web design scenarios",
  },
  {
    id: 3,
    title: "SASS preprocessor",
    description:
      "For ease in styling and reading higher code and using the features provided by sass, for example (mixin, variables, function and more ...)",
  },
  {
    id: 4,
    title: "BootStrap4",
    description:
      "Utilizing each one of these framework to improve the efficiency of user interface styles.",
  },
  {
    id: 5,
    title: "JavaScript",
    description:
      "Of course, to create a dynamic application, we need JavaScript to be able to create a complete application that can be used.",
  },
  {
    id: 6,
    title: "JQuery",
    description:
      "It is one of the oldest and most widely used JavaScript libraries",
  },
  {
    id: 7,
    title: "Git",
    description:
      "Utilizing the git flow procedure including (branching, pull, push, standard commit) to better manage the project and code review. ",
  },
  {
    id: 8,
    title: "React library",
    description:
      "Creating super-fast single page application using react.js library, with reusable, maintainable and manageable Functional components.",
  },
  {
    id: 9,
    title: "React hooks and component lifecycle",
    description: [
      "Utilizing React Hooks with Functional component to get rid of redundancy and increasing the efficiency and clean code standards.",
      "Mostly used ones are useState, useEffect, and useContext.",
    ],
  },
  {
    id: 10,
    title: "Redux",
    description:
      "Sometimes in large applications that have a lot of global data, we can use Redعx and its related tools to better manage them.",
  },
  {
    id: 11,
    title: "Redux-toolkit",
    description:
      "Redux toolkit is one of the Redux related tools that we use to make Redax easier to use.",
  },
  {
    id: 12,
    title: "TailwindCss",
    description: [
      "Utilizing each one of these framework to improve the efficiency of user interface styles.",
    ],
  },
  {
    id: 13,
    title: "NextJs FrameWork",
    description:
      "I use next.js in the case of projects when the SEO purposes, server-side render gets more important. ",
  },
  {
    id: 14,
    title: "Formik library",
    description:
      "As all the applications required authentication and authorization, getting data from user, validate, handle and send data to the server; the formic library is the most powerfull library to handle all these requirements. ",
  },
  {
    id: 15,
    title: "TypeScript",
    description:
      "some times in the large applications we need manage variable types for better and cleaner coding and for the easily debugging",
  },
  {
    id: 16,
    title: "npm",
    description:
      "Taking advantage of node package manager in react.js / next.js projects to implement famous react libraries. Some of them includes react-select, react",
  },
  {
    id: 17,
    title: "Call the server and working with API",
    description:
      "Call the server with all the type of APIs to send request, analyze response and handle all errors in the efficient way to display on the client-side. ",
  },
];

const SkillsPage = () => {
  return (
    <main className="min-h-smHeight md:min-h-mdHeight p-5 main">
      <h1 className="text-center text-4xl md:text-5xl mb-5">
        Skills and details
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skills.map((skill) => (
          <li
            className="flex flex-col justify-start p-2 shadow-md"
            key={skill.id}
          >
            <h4 className="text-emerald-500 font-medium text-2xl md:text-3xl mb-2 first-letter:text-gray-100">
              {skill.title}
            </h4>
            {skill.description.length > 2 ? (
              <p className="text-justify text-xs md:text-sm text-gray-400">
                {skill.description}
              </p>
            ) : (
              <ul>
                {skill.description.map((des, index) => (
                  <li
                    className="text-justify text-sm text-gray-400 flex items-start"
                    key={index}
                  >
                    <BsDot className="text-2xl" />
                    {des}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SkillsPage;
