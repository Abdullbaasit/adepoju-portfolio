import Reveal from "./Reveal";

const facts = [
  { k: "Role", v: "Frontend Web Developer" },
  { k: "Based in", v: "Lagos, Ibadan. Nigeria" },
  { k: "Experience", v: "2+ years" },
  { k: "Core stack", v: "React · Next.js · JavaScript " },
  { k: "Availability", v: "Open to remote work" },
  { k: "Timezone", v: "GMT+1 (WAT)" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-22">
      <Reveal className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:gap-14">
        <div>
          <div className="mb-2.5 font-mono text-[12.5px] text-oliveDeep dark:text-darkOliveDeep">
            About
          </div>
          <h2 className="mb-6 font-display text-[26px] font-bold tracking-tight text-ink sm:text-[31px] dark:text-darkText">
            Turning designs into real, working products
          </h2>
          <p className="mb-5 max-w-[560px] text-[16px] text-inkSoft sm:text-[16.5px] dark:text-darkInkSoft">
            I build interfaces that hold up under real-world conditions slow
            networks, small screens, and screen readers included. My work spans
            landing pages, dashboards, and full e-commerce platforms, always
            with a close eye on performance and usability.
          </p>
          <p className="max-w-[560px] text-[16px] text-inkSoft sm:text-[16.5px] dark:text-darkInkSoft">
            I lean on React and Next.js for scalable frontends, TypeScript for
            safer code, Tailwind for fast and consistent styling, and Axios to
            connect cleanly with backend APIs, a stack that lets me move
            quickly without cutting corners.
          </p>
        </div>

        <div className="h-fit rounded-2xl border border-oliveSoft bg-white p-6 dark:border-darkLine dark:bg-darkSurface">
          {facts.map((fact, i) => (
            <div
              key={fact.k}
              className={`flex items-start justify-between gap-2.5 py-3 text-sm ${
                i !== facts.length - 1
                  ? "border-b border-oliveSoft dark:border-darkLine"
                  : ""
              }`}
            >
              <span className="text-inkSoft dark:text-darkInkSoft">
                {fact.k}
              </span>
              <span className="text-right font-semibold text-ink dark:text-darkText">
                {fact.v}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
