import SkillsCard from "../components/SkillsCard";
import useFetch from "../hooks/useFetch";

const Skills = () => {
  const {
    data: languagesData,
    loading: languagesLoading,
    error: languagesError,
  } = useFetch("/data/skills/languages.json");
  const {
    data: frontendData,
    loading: frontendLoading,
    error: frontendError,
  } = useFetch("/data/skills/front-end.json");
  const {
    data: backendData,
    loading: backendLoading,
    error: backendError,
  } = useFetch("/data/skills/back-end.json");
  const {
    data: databasesData,
    loading: databasesLoading,
    error: databasesError,
  } = useFetch("/data/skills/databases.json");
  const {
    data: cloudData,
    loading: cloudLoading,
    error: cloudError,
  } = useFetch("/data/skills/cloud.json");

  if (
    !languagesData ||
    !frontendData ||
    !backendData ||
    !databasesData ||
    !cloudData
  ) {
    console.log(
      languagesError,
      frontendError,
      backendError,
      databasesError,
      cloudError,
    );
    return;
  }

  return (
    <section className="section pb-8! max-sm:pb-4!" id="skills">
      <h2 className="title" data-aos="zoom-in-right">
        Skills
      </h2>
      <div className="flex items-stretch gap-4 flex-wrap mt-10 max-sm:flex-col">
        <SkillsCard
          title="Languages"
          data={languagesData}
          dataAos="fade-right"
        />
        <SkillsCard title="Front-end" data={frontendData} dataAos="fade-up" />
        <SkillsCard title="Back-end" data={backendData} dataAos="fade-left" />
        <SkillsCard
          title="Databases"
          data={databasesData}
          dataAos="fade-up-right"
        />
        <SkillsCard title="Cloud" data={cloudData} dataAos="fade-up-left" />
      </div>
    </section>
  );
};

export default Skills;
