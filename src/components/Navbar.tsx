"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.nav} container`}>
          {/* Desktop navigation */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className={styles.contactBtn} id="nav-contact-btn">
            CONTACT
          </a>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
          aria-hidden={!menuOpen}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className={styles.bottomBar} aria-label="Mobile navigation">
        <a href="#work" className={styles.tabItem} id="tab-work">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
          <span>WORK</span>
        </a>
        <a href="#contact" className={styles.tabItem} id="tab-about">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span>ABOUT</span>
        </a>
        <a href="#contact" className={styles.tabItem} id="tab-contact">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <rect x="2" y="5" width="20" height="14" />
            <path d="M2 5l10 9 10-9" />
          </svg>
          <span>CONTACT</span>
        </a>
      </nav>
    </>
  );
}
