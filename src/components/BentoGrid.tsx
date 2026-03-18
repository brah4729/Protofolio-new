"use client";

import { motion, Variants } from "framer-motion";
import styles from "./BentoGrid.module.css";
import { Code, Users, Zap, Award } from "lucide-react";

export function BentoGrid() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Engineering <span style={{ color: 'var(--text-secondary)' }}>Excellence</span></h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {/* Main About Card */}
          <motion.div variants={item} className={`${styles.card} ${styles.span2} ${styles.glass}`}>
            <div className={styles.iconWrapper}><Users size={24} /></div>
            <h3 className={styles.cardTitle}>Mindset & Approach</h3>
            <p className={styles.cardText}>
            I am a Developer who is obsessed with building cool applications , solving problems and exploring new things 
            </p>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div variants={item} className={`${styles.card} ${styles.glass}`}>
            <div className={styles.iconWrapper}><Code size={24} /></div>
            <h3 className={styles.cardTitle}>Core Stack</h3>
            <div className={styles.tags}>
              <span>Python</span>
              <span>TensorFlow</span>
              <span>PyTorch</span>
              <span>Nix</span>
              <span>Vanilla CSS</span>
              <span>Laravel</span>
              <span>PHP</span>
              
            </div>
          </motion.div>

          {/* Performance Card */}
          <motion.div variants={item} className={`${styles.card} ${styles.glass}`}>
            <div className={styles.iconWrapper}><Zap size={24} /></div>
            <h3 className={styles.cardTitle}>Performance First</h3>
            <p className={styles.cardText}>
              Focused on making applications that are fast, efficient, lightweight,easy to read and debug, and user-friendly
            </p>
          </motion.div>

          {/* Leadership Card */}
          <motion.div variants={item} className={`${styles.card} ${styles.span2} ${styles.glass}`}>
            <div className={styles.iconWrapper}><Award size={24} /></div>
            <h3 className={styles.cardTitle}>Mentorship & Leadership</h3>
            <p className={styles.cardText}>
              Proven track record of leading frontend teams, establishing engineering standards, and mentoring junior developers to elevate the entire organization.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
