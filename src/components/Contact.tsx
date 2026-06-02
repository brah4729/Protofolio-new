"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:your@email.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={`${styles.inner} container`}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h2 className={styles.heading}>
            Let&apos;s Work <span className={styles.accent}>Together.</span>
          </h2>
          <p className={styles.sub}>
            Have a project in mind or just want to say hi? Drop a message below
            or check out my work on GitHub.
          </p>
        </div>

        <div className={styles.grid}>
          {/* GitHub card */}
          <div className={styles.ghCard} id="github-card">
            <div className={styles.ghIconWrap}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="36" height="36">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <h3 className={styles.ghTitle}>View My Code</h3>
            <p className={styles.ghDesc}>
              Check out my projects, experiments, and open-source contributions
              on GitHub.
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghBtn}
              id="github-link"
            >
              github.com/yourusername <span className={styles.arrow}>→</span>
            </a>
          </div>

          {/* Email form */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className={styles.input}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className={styles.input}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                MESSAGE
              </label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or idea..."
                className={`${styles.input} ${styles.textarea}`}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              id="submit-contact"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "idle" && <>SEND MESSAGE <span className={styles.arrow}>→</span></>}
              {status === "sending" && "SENDING..."}
              {status === "sent" && "MESSAGE SENT ✓"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
