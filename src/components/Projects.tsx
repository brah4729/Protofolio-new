"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { image } from "framer-motion/client";

const PROJECTS = [
  {
    title: "Toko Keren",
    description: "A high-performance headless commerce storefront built with Laravel, PHP, MySQL, and Tailwind CSS.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://github.com/brah4729/tokokeren",
    github: "https://github.com/brah4729/tokokeren",
    color: "linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.4) 100%)",
    image: "/tokokeren.png"
  },
  {
    title: "mono OS",
    description: "A operating system built from scratch using C, C++, and Assembly.",
    tech: ["C", "C++", "Assembly", "Makefile"],
    link: "https://github.com/brah4729/mono-OS",
    github: "https://github.com/brah4729/mono-OS",
    color: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.4) 100%)",
    image: "/monoos.png"
  },
  {
    title: "cli assistant",
    description: "A command line assistant that can help you with your daily tasks.",
    tech: ["Python", "pytorch", "Nix"],
    link: "https://github.com/brah4729/cli-assistant",
    github: "https://github.com/brah4729/cli-assistant",
    color: "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.4) 100%)"
  }
];

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Recent <span style={{ color: 'var(--text-secondary)' }}>Projects</span></h2>
        
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
                 {project.image && (
                   <Image
                     src={project.image}
                     alt={project.title}
                     fill
                     className={styles.projectImage}
                   />
                 )}
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
