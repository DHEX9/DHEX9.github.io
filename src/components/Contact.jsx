import { useState } from "react";
import { useApp } from "../context/AppContext";
import { DANIEL_EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/config";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { t, copyEmail } = useApp();
  const [textRef, textInView] = useReveal();
  const [formRef, formInView] = useReveal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusVisible, setStatusVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${DANIEL_EMAIL}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, "_blank", "noopener");
    setStatusVisible(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div id="contact" className="contact-block">
      <p className="section-kicker">0x03 · {t.contact.kicker}</p>
      <h2 className="section-title">{t.contact.title}</h2>

      <div className="contact-inner">
        <div ref={textRef} className={`contact-text reveal ${textInView ? "in-view" : ""}`}>
          <p>{t.contact.blurb}</p>
          <div className="contact-links">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DANIEL_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => copyEmail(DANIEL_EMAIL)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              Email ↗
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              GitHub ↗
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 11v5M8 8v.01M12 16v-5M12 11c0-1.5 3-1.5 3 0v5" />
              </svg>
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form ref={formRef} id="contactForm" className={`contact-form reveal ${formInView ? "in-view" : ""}`} onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="cfName">{t.contact.nameLabel}</label>
            <input type="text" id="cfName" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="cfEmail">{t.contact.emailLabel}</label>
            <input type="email" id="cfEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="cfMessage">{t.contact.messageLabel}</label>
            <textarea
              id="cfMessage"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {t.contact.send}
          </button>
          {statusVisible && <p id="cfStatus" className="form-status">{t.contact.statusMsg}</p>}
        </form>
      </div>
    </div>
  );
}
