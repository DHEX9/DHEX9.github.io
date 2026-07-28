import { createContext, useContext, useEffect, useRef, useState } from "react";
import { translations } from "../data/translations";

const AppContext = createContext(null);

function detectInitialLang() {
  const nav = (navigator.language || "en").toLowerCase();
  return nav.startsWith("pt") ? "pt" : "en";
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);
  const [theme, setTheme] = useState("dark");
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef(null);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const copyEmail = (email) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setToastVisible(true);
          clearTimeout(toastTimer.current);
          toastTimer.current = setTimeout(() => setToastVisible(false), 2500);
        })
        .catch(() => {});
    }
    // Sem preventDefault no link: ele ainda abre o Gmail normalmente em paralelo.
  };

  const t = translations[lang];

  const value = { lang, setLang, toggleLang, theme, toggleTheme, t, toastVisible, copyEmail };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp deve ser usado dentro de um AppProvider");
  return ctx;
}
