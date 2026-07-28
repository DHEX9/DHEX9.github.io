import { useApp } from "../context/AppContext";
import { DANIEL_EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/config";
import ChipSvg from "./ChipSvg";

export default function Hero() {
  const { t, copyEmail } = useApp();

  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-main reveal in-view">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero-name">DANIEL</h1>

          <div className="spec-table">
            <div className="spec-row">
              <span className="spec-key">{t.hero.spec.role}</span>
              <span className="spec-val">{t.hero.spec.roleVal}</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">{t.hero.spec.focus}</span>
              <span className="spec-val">{t.hero.spec.focusVal}</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">{t.hero.spec.status}</span>
              <span className="spec-val">
                {t.hero.spec.statusVal} <span className="cursor-blink">▮</span>
              </span>
            </div>
            <div className="spec-row">
              <span className="spec-key">{t.hero.spec.current}</span>
              <span className="spec-val">
                CPU MC6809 <span className="text-iron">(Logisim Evolution)</span>
              </span>
            </div>
          </div>

          <p className="hero-desc">{t.hero.description}</p>

          <div className="hero-socials">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DANIEL_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => copyEmail(DANIEL_EMAIL)}
            >
              Email ↗
            </a>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              {t.hero.ctaProjects}
            </a>
          </div>
        </div>

        <ChipSvg />
      </div>
    </section>
  );
}
