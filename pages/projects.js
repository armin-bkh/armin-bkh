import ProjectsList from "components/ProjectsList/ProjectsList";
import Head from "next/head";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>armin-bkh: Projects</title>
      </Head>
      <main className="min-h-smHeight md:min-h-mdHeight p-5 main">
        <h1 className="text-center text-3xl md:text-5xl mb-5">My projects</h1>
        <ProjectsList />
      </main>
    </>
  );
};

export default ProjectsPage;
