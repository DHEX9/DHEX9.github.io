import { useApp } from "../context/AppContext";
import { skillsData } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { t, lang } = useApp();
  const [textRef, textInView] = useReveal();
  const [skillsRef, skillsInView] = useReveal();

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="section-kicker">0x01 · {t.about.kicker}</p>
        <h2 className="section-title">{t.about.title}</h2>

        <div className="about-grid">
          <div ref={textRef} className={`about-text reveal ${textInView ? "in-view" : ""}`}>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <div ref={skillsRef} className={`about-skills reveal ${skillsInView ? "in-view" : ""}`}>
            <h3>{t.about.skillsTitle}</h3>
            <div className="skills-groups" id="skillsGroups">
              {skillsData.map((group) => (
                <div className="skill-group" key={group.title.en}>
                  <h4>{group.title[lang]}</h4>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
