import styles from "./Explore.module.css";

const cards = [
  {
    id: "work-card",
    title: "My Work",
    description:
      "Dive into a curated selection of recent projects, case studies, and digital experiments.",
    linkText: "View Portfolio",
    href: "#contact",
    linkId: "explore-projects-link",
    type: "work" as const,
  },
  {
    id: "about-card",
    title: "About Me",
    description: "The process, principles, and person behind the pixels.",
    linkText: "Read Bio",
    href: "#contact",
    linkId: "read-bio-link",
    type: "about" as const,
  },
];

function WorkDecor() {
  return (
    <div className={styles.decorGrid}>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className={styles.gridCell} />
      ))}
    </div>
  );
}

function AboutDecor() {
  return (
    <div className={styles.decorAbout}>
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="80"
          cy="52"
          r="28"
          stroke="rgba(28,18,9,0.18)"
          strokeWidth="1.5"
        />
        <circle
          cx="80"
          cy="52"
          r="16"
          fill="rgba(232,150,12,0.12)"
          stroke="rgba(232,150,12,0.35)"
          strokeWidth="1.5"
        />
        <path
          d="M24 140c0-30.9 25.1-56 56-56s56 25.1 56 56"
          stroke="rgba(28,18,9,0.18)"
          strokeWidth="1.5"
        />
        <circle cx="80" cy="52" r="6" fill="rgba(232,150,12,0.5)" />
      </svg>
    </div>
  );
}

function WorkIcon() {
  return (
    <svg
      className={styles.mobileIcon}
      width="28"
      height="28"
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
  );
}

function AboutIcon() {
  return (
    <svg
      className={styles.mobileIcon}
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
      <circle cx="11" cy="9" r="2.5" />
      <path d="M7 17c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
  );
}

export function Explore() {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <p className={styles.sectionLabel}>Explore</p>
        <div className={styles.grid}>
          {cards.map((card) => (
            <article key={card.id} className={styles.card} id={card.id}>
              {/* Desktop image area */}
              <div
                className={`${styles.imageArea} ${
                  card.type === "work" ? styles.workImg : styles.aboutImg
                }`}
              >
                {card.type === "work" ? <WorkDecor /> : <AboutDecor />}
              </div>

              {/* Mobile icon */}
              {card.type === "work" ? <WorkIcon /> : <AboutIcon />}

              {/* Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <h2 className={styles.cardTitle}>{card.title}</h2>
                  <p className={styles.cardDesc}>{card.description}</p>
                </div>
                <a href={card.href} className={styles.cardLink} id={card.linkId}>
                  {card.linkText} <span className={styles.arrow}>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
