"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon } from "./icons/TechIcons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-oliveSoft/60 bg-cream/85 backdrop-blur-md transition-colors dark:border-darkLine dark:bg-darkBg/85">
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="group flex flex-shrink-0 items-center gap-2.5 font-display text-lg font-bold text-ink dark:text-darkText">
          <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] bg-olive text-[15px] font-extrabold text-ink transition-transform duration-300 group-hover:-rotate-[8deg] group-hover:scale-110">
            ATB
          </span>
          Adepoju Taiwo Basit
        </a>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-inkSoft transition-colors hover:text-ink dark:text-darkInkSoft dark:hover:text-darkText after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-oliveDeep after:transition-all after:duration-300 hover:after:w-full dark:after:bg-darkOliveDeep"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-shrink-0 items-center gap-3.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden whitespace-nowrap rounded-[9px] bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:opacity-90 sm:inline-block dark:bg-oliveSoft dark:text-ink"
          >
            Let's talk
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-oliveSoft bg-white text-ink md:hidden dark:border-darkLine dark:bg-darkSurface dark:text-darkText"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-oliveSoft bg-cream px-6 py-4 md:hidden dark:border-darkLine dark:bg-darkBg">
          <div className="flex flex-col gap-4 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-inkSoft dark:text-darkInkSoft"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-[9px] bg-ink px-5 py-2.5 text-center font-semibold text-cream dark:bg-oliveSoft dark:text-ink"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
