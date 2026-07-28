import { useApp } from "../context/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="footer">
      <p>{t.footer.text}</p>
    </footer>
  );
}
