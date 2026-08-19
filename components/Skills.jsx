"use client";

import { useEffect, useRef, useState } from "react";
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextIcon,
  CSSIcon,
  TailwindIcon,
  GitIcon
} from "./icons/TechIcons";

const skills = [
  { name: "JavaScript", level: 69, label: "advance", Icon: JavaScriptIcon },
  { name: "TypeScript", level: 63, label: "advanced", Icon: TypeScriptIcon },
  { name: "React", level: 65, label: "advanced", Icon: ReactIcon },
  { name: "Next.js", level: 70, label: "advanced", Icon: NextIcon },
  { name: "CSS3", level: 80, label: "expert", Icon: CSSIcon },
  { name: "Tailwind CSS", level: 82, label: "expert", Icon: TailwindIcon },
  { name: "Git & GitHub", level: 90, label: "advanced", Icon: GitIcon }
];

export default function Skills() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-22">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2.5 font-mono text-[12.5px] text-oliveDeep dark:text-darkOliveDeep">
              Skills
            </div>
            <h2 className="font-display text-[26px] font-bold tracking-tight text-ink sm:text-[31px] dark:text-darkText">
              Tools I build with
            </h2>
          </div>
          <p className="max-w-[360px] text-[14.5px] text-inkSoft dark:text-darkInkSoft">
            A stack chosen for speed, type-safety, and clean collaboration with design and backend
            teams.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {skills.map(({ name, level, label, Icon }, i) => (
            <div
              key={name}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`rounded-2xl border border-oliveSoft bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-oliveDeep hover:shadow-lg dark:border-darkLine dark:bg-darkSurface dark:hover:border-darkOliveDeep ${
                visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[10px] bg-oliveSoft dark:bg-darkSurfaceSoft">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mb-2.5 text-[14.5px] text-ink dark:text-darkText">{name}</h4>
              <div className="h-[5px] overflow-hidden rounded-full bg-oliveSoft dark:bg-darkSurfaceSoft">
                <div
                  className="h-full rounded-full bg-oliveDeep transition-[width] duration-[1200ms] ease-out dark:bg-darkOliveDeep"
                  style={{ width: visible ? `${level}%` : "0%" }}
                />
              </div>
              <div className="mt-2 font-mono text-[11.5px] text-inkSoft dark:text-darkInkSoft">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
