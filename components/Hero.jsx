import Image from "next/image";
import Reveal from "./Reveal";
import {
  ReactIcon,
  TypeScriptIcon,
  NextIcon,
  TailwindIcon,
  AxiosIcon,
  CSSIcon,
} from "./icons/TechIcons";

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "CSS3",
];


export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-36 -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_#BDB76B_0%,_transparent_70%)] opacity-30 blur-[10px] [background-size:200%_200%] animate-gradientDrift dark:opacity-20"
      />

      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={0}>
          

          <h1 className="mb-5 max-w-xl font-display text-[32px] font-bold leading-[1.12] tracking-tight text-ink sm:text-[40px] lg:text-[46px] dark:text-darkText">
            Frontend engineering for global audience.
          </h1>

          <p className="mb-8 max-w-[480px] text-[16px] text-inkSoft sm:text-[17px] dark:text-darkInkSoft">
            I'm Adepoju Taiwo, a frontend web developer crafting fast,
            accessible, and beautifully engineered interfaces from concept to
            production, for teams and clients around the world.
          </p>

          <div className="mb-9 flex flex-wrap gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[10px] bg-ink px-6 py-3.5 text-[14.5px] font-semibold text-cream transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-oliveSoft dark:text-ink"
            >
              View my work →
            </a>
            <a
              href="/assets/Frontend CVV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-olive bg-white px-6 py-3.5 text-[14.5px] font-semibold text-ink transition hover:border-oliveDeep hover:bg-oliveSoft dark:border-darkLine dark:bg-darkSurface dark:text-darkText dark:hover:border-darkOliveDeep"
            >
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-oliveSoft bg-white px-3 py-1.5 font-mono text-xs text-inkSoft dark:border-darkLine dark:bg-darkSurface dark:text-darkInkSoft"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-[380px]">
          <div className="relative mx-auto aspect-square w-full max-w-[380px]">
            <div className="absolute inset-0 animate-spinSlow rounded-full border-[1.5px] border-dashed border-olive dark:border-darkOliveDeep/60" />
            <div className="absolute inset-[34px] animate-spinSlowReverse rounded-full border border-oliveSoft dark:border-darkLine" />

            <div className="absolute inset-[17%] overflow-hidden rounded-full border-[5px] border-white shadow-[0_14px_40px_var(--shadow)] dark:border-darkSurface">
              <Image
                src="/assets/Taiwo.jpg"
                alt="Adepoju Taiwo, Frontend Web Developer"
                fill
                sizes="380px"
                className="object-cover"
                priority
              />
            </div>

            <OrbitChip
              position="left-1/2 -top-2.5 -translate-x-1/2"
              animate="animate-floatChipReverse"
            >
              <ReactIcon />
            </OrbitChip>
            <OrbitChip
              position="right-[-20px] top-[20%]"
              animate="animate-floatChip [animation-delay:.2s]"
            >
              <TypeScriptIcon />
            </OrbitChip>
            <OrbitChip
              position="right-[-16px] bottom-[20%]"
              animate="animate-floatChip [animation-delay:.9s]"
            >
              <NextIcon />
            </OrbitChip>
            <OrbitChip
              position="left-1/2 -bottom-2.5 -translate-x-1/2"
              animate="animate-floatChipReverse [animation-delay:.4s]"
            >
              <TailwindIcon />
            </OrbitChip>
            <OrbitChip
              position="left-[-18px] bottom-[20%]"
              animate="animate-floatChip [animation-delay:1.3s]"
            >
              <AxiosIcon />
            </OrbitChip>
            <OrbitChip
              position="left-[-22px] top-[20%]"
              animate="animate-floatChip [animation-delay:1.7s]"
            >
              <CSSIcon />
            </OrbitChip>

          </div>
        </Reveal>
      </div>

      <Reveal
        className="mt-4 border-y border-oliveSoft py-6 dark:border-darkLine"
        delay={300}
      >
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-3.5 px-6">
          <span className="font-mono text-xs text-inkSoft dark:text-darkInkSoft"></span>
          {/* <div className="flex flex-wrap gap-6 text-[13.5px] font-semibold text-inkSoft dark:text-darkInkSoft">
            {places.map((place) => (
              <span key={place} className="text-ink dark:text-darkText">
                {place}
              </span>
            ))}
          </div> */}
        </div>
      </Reveal>
    </section>
  );
}

function OrbitChip({ position, animate, children }) {
  return (
    <div
      className={`absolute flex h-11 w-11 items-center justify-center rounded-xl border border-oliveSoft bg-white shadow-md dark:border-darkLine dark:bg-darkSurface ${position} ${animate}`}
    >
      {children}
    </div>
  );
}
