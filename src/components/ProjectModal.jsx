import { useEffect } from "react";
import { useApp } from "../context/AppContext";

export default function ProjectModal({ project, onClose }) {
  const { t, lang } = useApp();
  const isOpen = Boolean(project);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && isOpen) onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      id="projectModal"
      className={`modal-overlay ${isOpen ? "" : "hidden"}`}
      onClick={(e) => {
        if (e.target.id === "projectModal") onClose();
      }}
    >
      <div className="modal-panel">
        <button id="modalClose" className="icon-btn modal-close" aria-label="Fechar" type="button" onClick={onClose}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {project && (
          <>
            <div className="modal-meta">
              <span className="project-designator">{project.designator}</span>
              <span className="project-category">· {project.category[lang]}</span>
            </div>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-desc">{project.longDesc[lang]}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
              {t.projects.viewCode}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
