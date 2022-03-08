import ProjectsList from "components/ProjectsList/ProjectsList";

const ProjectsPage = () => {
  return (
    <main className="min-h-smHeight md:min-h-mdHeight p-5">
      <h1 className="text-center text-3xl md:text-5xl mb-5">My projects</h1>
      <ProjectsList />
    </main>
  );
};

export default ProjectsPage;
