import Expertises from "components/Expertises/Expertises";
import SkillsList from "components/SkillsList/SkillsList";

const SkillsPage = () => {
  return (
    <main className="min-h-smHeight md:min-h-mdHeight p-5 main">
      <h1 className="text-center text-4xl md:text-5xl mb-5">
        My expertise & skills
      </h1>
      <Expertises />
      <SkillsList />
    </main>
  );
};

export default SkillsPage;
