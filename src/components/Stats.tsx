"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const stats = [
  { value: 5, suffix: "+", label: "YEARS EXP" },
  { value: 42, suffix: "", label: "PROJECTS" },
  { value: 12, suffix: "", label: "AWARDS" },
];

function CountUp({
  value,
  suffix,
  started,
}: {
  value: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1300;
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setCount(Math.floor(eased * value));
      if (p < 1) requestAnimationFrame(step);
      else setCount(value);
    };

    requestAnimationFrame(step);
  }, [value, started]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={`${styles.row} container`}>
        {stats.map((s) => (
          <div key={s.label} className={styles.item}>
            <span className={styles.value}>
              <CountUp value={s.value} suffix={s.suffix} started={started} />
            </span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
