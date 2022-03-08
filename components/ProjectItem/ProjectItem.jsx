import Image from "next/image";

const ProjectItem = ({ project }) => {
  return (
    <article className="p-1 shadow-md transition hover:shadow-2xl rounded-md">
      <div
        onClick={() => window.open(project.url, "_blank")}
        className="w-full h-[12rem] sm:h-[17rem] md:[15rem] relative overflow-hidden rounded-md mb-5 cursor-pointer"
      >
        <Image src={project.img} alt={project.title} layout="fill" />
      </div>
      <div className="p-2">
        <h3 className="text-emerald-500 text-2xl font-medium">
          {project.title}
        </h3>
        {project.description && (
          <p className="text-sm">{project.description}</p>
        )}
        <ul className="flex flex-wrap whitespace-nowrap text-xs text-gray-500 mt-2">
          tools:
          {project.tools.map((tool, index) => (
            <li className="px-2" key={index}>
              <p>{tool}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-black/80 shadow shadow-black/50 rounded-sm px-5 py-1"
          >
            Github
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 shadow shadow-emerald-500/50 rounded-sm px-5 py-1"
          >
            show project
          </a>
        </div>
        <footer className="border-t border-gray-600 pt-2 mt-5">
          <p className="text-xs text-gray-500">
            url:{" "}
            <a
              className="hover:underline"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.url}
            </a>
          </p>
          <p className="text-xs text-gray-500">
            github:{" "}
            <a
              className="hover:underline"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              {project.github}
            </a>
          </p>
        </footer>
      </div>
    </article>
  );
};

export default ProjectItem;
