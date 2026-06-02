import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.logo}>
          Dhiren
        </a>

        <nav className={styles.links} aria-label="Footer navigation">
          <a
            href="https://github.com/brah4729"
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

        <p className={styles.copy}>© 2024 Dhiren. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
