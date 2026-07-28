import { useApp } from "../context/AppContext";
import { useReveal } from "../hooks/useReveal";

export default function ProjectCard({ project, index, onOpen }) {
  const { t, lang } = useApp();
  const [ref, inView] = useReveal();

  return (
    <article
      ref={ref}
      className={`project-card reveal ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="project-meta">
        <span className="project-designator">{project.designator}</span>
        <span className="project-category">· {project.category[lang]}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc[lang]}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-actions">
        <button type="button" className="project-link project-more-btn" onClick={() => onOpen(project)}>
          {t.projects.readMore}
        </button>
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </article>
  );
}
