import { useApp } from "../context/AppContext";

export default function EmailToast() {
  const { t, toastVisible } = useApp();
  return (
    <div id="emailToast" className={`email-toast ${toastVisible ? "show" : ""}`} role="status" aria-live="polite">
      {t.contact.emailCopied}
    </div>
  );
}
