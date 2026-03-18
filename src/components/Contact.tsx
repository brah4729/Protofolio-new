"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={styles.ctaBox}
        >
          <h2 className={styles.heading}>Ready to build something <span style={{
            background: 'linear-gradient(120deg, #fff 0%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>interesting?</span></h2>
          <p className={styles.text}>
            I&apos;m currently open for talk . Whether you have a question or just want to discuss anything related to techs , I&apos;ll try my best to get back to you.
          </p>
          
          <a href="mailto:helloxdlolidc@gmail.com" className={styles.primaryBtn}>
            <Mail size={18} /> Say Hello
          </a>
          
          <div className={styles.socials}>
            <Link href="https://github.com/brah4729" aria-label="GitHub"><Github size={24} /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
