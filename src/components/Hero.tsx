"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.content}
        >
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            Available for employment
          </div>
          
          <h1 className={styles.title}>
            Call me  <br className={styles.break} />
            <span className={styles.highlight}>e</span>
          </h1>
          
          <p className={styles.subtitle}>
            A Student specializing in Machine Learning and Web Development<br className={styles.break} />
            that focuses on user experience , performance and scalability
          </p>

          <div className={styles.actions}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Work <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className={styles.secondaryBtn}>
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
