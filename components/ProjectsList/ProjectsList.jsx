import ProjectItem from "components/ProjectItem/ProjectItem";

const projects = [
  {
    id: 1,
    img: "/images/todolist.jpg",
    title: "Todo list",
    url: "https://todolist-app-typescript.vercel.app",
    github: "https://github.com/armin-bkh/todolist-app-typescript",
    tools: ["React", "TypeScript", "TailwindCss", "react-select"],
  },
  {
    id: 2,
    img: "/images/expense-tracker.jpg",
    title: "Expense tracker",
    url: "https://expense-tracker-app-react-js.vercel.app",
    github: "https://github.com/armin-bkh/expense-tracker-app-react-js",
    tools: ["React", "TailwindCss", "react-select"],
  },
  {
    id: 3,
    img: "/images/contacts.jpg",
    title: "Contacts App",
    url: "https://armin-bakhshi-contactsapp-react-js.vercel.app",
    github: "https://github.com/armin-bkh/contactsapp-react-js",
    tools: ["React", "react-loading-skeleton"],
  },
  {
    id: 4,
    img: "/images/task-manager.jpg",
    title: "Task manager",
    url: "https://taskmanager-app-beryl.vercel.app",
    github: "https://github.com/armin-bkh/taskmanager-app",
    tools: [
      "React",
      "TypeScript",
      "react-select",
      "styled-components",
      "useReducer + useContext",
    ],
  },
  {
    id: 5,
    img: "/images/foodland.jpg",
    title: "Foodland",
    url: "https://foodland-app-react-ts.vercel.app",
    github: "https://github.com/armin-bkh/foodland-app-react-ts",
    tools: ["React", "TypeScript", "react-loading-skeleton", "axios"],
  },
  {
    id: 6,
    img: "/images/inventory.jpg",
    title: "Inventory App",
    url: "https://inventory-app-react-ts.vercel.app",
    github: "https://github.com/armin-bkh/inventory-app-react-ts",
    tools: [
      "React",
      "TypeScript",
      "TailwindCss",
      "react-toast-notification",
      "formik",
      "yup",
    ],
  },
  {
    id: 7,
    img: "/images/form-validation.jpg",
    title: "Form Validation",
    url: "https://armin-bakhshi-signup-app.vercel.app",
    github: "https://github.com/armin-bkh/form-formik-yup-app",
    tools: ["React", "TailwindCss", "formik", "yup"],
  },
  {
    id: 8,
    img: "/images/simple-cart.jpg",
    title: "simple cart",
    url: "https://simple-cart-app.vercel.app",
    github: "https://github.com/armin-bkh/Advanced-react-js-practice",
    tools: ["useReducer + useContext"],
  },
  {
    id: 9,
    img: "/images/houstory.jpg",
    title: "houstory",
    url: "https://houstory.vercel.app",
    github: "https://github.com/armin-bkh/houstory-next-app",
    tools: [
      "React",
      "NextJs",
      "TailwindCss",
      "react-toast-notifications",
      "formik",
      "yup",
    ],
  },
  {
    id: 10,
    img: "/images/restoyar.jpg",
    title: "restoyar",
    url: "https://restoyar.vercel.app/reservation",
    github: "https://github.com/armin-bkh/restaurant-hamrah",
    tools: [
      "React",
      "TailwindCss",
      "react-toast-notifications",
      "formik",
      "yup",
      "axios",
      "redux",
      "react-redux",
      "redux-thunk",
      "sweatalert2",
      "react-loading-skeleton",
    ],
    description: "please turn on vpn for this project",
  },
];

const ProjectsList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ProjectItem key={project} project={project} />
      ))}
    </section>
  );
};

export default ProjectsList;
