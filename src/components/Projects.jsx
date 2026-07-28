import { useState } from "react";
import { useApp } from "../context/AppContext";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Contact from "./Contact";

export default function Projects() {
  const { t } = useApp();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section alt">
      <div className="section-inner">
        <p className="section-kicker">0x02 · {t.projects.kicker}</p>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-sub">{t.projects.subtitle}</p>

        <div className="projects-grid" id="projectsGrid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.designator} project={project} index={index} onOpen={setActiveProject} />
          ))}
        </div>

        <Contact />
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
