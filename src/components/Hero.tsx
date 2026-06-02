import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`${styles.inner} container`}>
        {/* Available badge — mobile only */}
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for new projects
        </div>

        <h1 className={styles.heading}>
          HI, I AM <span className={styles.accent}>ALEX.</span>
        </h1>

        <p className={styles.bio}>
          A Student specializing in Machine Learning and Web Development
          that focuses on user experience, comfort, performance and scalability.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary} id="hire-me-btn">
            Hire Me <span className={styles.arrow}>→</span>
          </a>
          <a href="/cv.pdf" download className={styles.btnOutline} id="download-cv-btn">
            <span className={styles.downloadIcon}>↓</span> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
