import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.logo}>
          ALEX
        </a>

        <nav className={styles.links} aria-label="Footer navigation">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            id="footer-github"
          >
            GITHUB
          </a>
          <a href="#contact" className={styles.link} id="footer-contact">
            CONTACT
          </a>
        </nav>

        <p className={styles.copy}>© 2024 ALEX. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
