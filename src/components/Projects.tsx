"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    title: "E-Commerce Architecture",
    description: "A high-performance headless commerce storefront built with Next.js App Router, React Server Components, and Shopify Storefront API. Achieved perfect Lighthouse scores.",
    tech: ["Next.js", "TypeScript", "Shopify API", "Vanilla CSS"],
    link: "#",
    github: "#",
    color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.4) 100%)"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Financial dashboard processing millions of rows using WebSockets, WebGL for rendering charts, and optimistic UI updates for zero-latency feel.",
    tech: ["React", "WebGL", "Socket.io", "Zustand"],
    link: "#",
    github: "#",
    color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.4) 100%)"
  },
  {
    title: "Design System Library",
    description: "An accessible, fully typed component library used across 10+ enterprise applications. 100% test coverage and strict WCAG compliance.",
    tech: ["React", "Storybook", "Radix UI", "Framer Motion"],
    link: "#",
    github: "#",
    color: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.4) 100%)"
  }
];

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Selected <span style={{ color: 'var(--text-secondary)' }}>Works</span></h2>
        
        <div className={styles.grid}>
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageContainer} style={{ background: project.color }}>
                 <div className={styles.overlay}>
                    <Link href={project.link} className={styles.previewBtn}>
                      View Live <ArrowUpRight size={16} />
                    </Link>
                 </div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <Link href={project.github} className={styles.githubIcon} aria-label="GitHub Repository">
                    <Github size={20} />
                  </Link>
                </div>
                
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.techList}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
