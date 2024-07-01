import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../utils/data";
import { useTranslation } from "react-i18next";
import Reveal from "../../utils/Reveal";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Reveal>
      <section
        id="projects"
        className="flex flex-col items-center justify-center text-center"
      >
        <h1 className="section-title">{t("projects.title")}</h1>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:justify-evenly md:px-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              link={project.link}
              src={project.src}
              name={project.name}
              description={t(
                `projects.projectDescriptions.${project.description}`,
              )}
            />
          ))}
        </div>
      </section>
    </Reveal>
  );
}
