import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTION_IDS = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const { lang, toggleLang, theme, toggleTheme, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#home" className="logo">
          <span className="led"></span>DANIEL
        </a>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeId === link.id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-controls">
          <button
            id="langToggle"
            className="icon-btn"
            aria-label="Change language"
            type="button"
            onClick={toggleLang}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            id="themeToggle"
            className="icon-btn"
            aria-label="Alternar tema"
            type="button"
            onClick={toggleTheme}
          >
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              className="icon-moon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <button
            id="menuToggle"
            className={`icon-btn menu-btn ${menuOpen ? "open" : ""}`}
            aria-label="Menu"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
