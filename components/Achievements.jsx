import Reveal from "./Reveal";

const stats = [
  { num: "2+", label: "Projects delivered" },
  { num: "1+", label: "Countries served" },
  { num: "2+", label: "Years of experience" }
];

const timeline = [
  {
    year: "2026",
    title: "Building Kept&Clean website",
    body: "Designed and shipped a live data platform used to track waste collection and report illegal waste dumping for local communities within Oyo State."
  },
   {
    year: "2026",
    title: "Launched Adepoju Taiwo Basit Portfolio Porject",
    body: "Delivered a full-scale Portfolio Project with Next.js and JavaScript, cutting checkout drop-off throug UI."
  },
  {
    year: "2026",
    title: "Launched Shop12 e-commerce platform",
    body: "Delivered a full-scale storefront with Next.js and JavaScript, cutting checkout drop-off through a streamlined UI."
  },
  {
    year: "2025",
    title: "Deepened expertise in React & TypeScript",
    body: "Took on larger, type-safe codebases and began mentoring junior developers on component architecture."
  },
  {
    year: "2024",
    title: "Started frontend development journey",
    body: "Learned HTML, CSS, and JavaScript fundamentals, building the foundation for everything since."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-22">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2.5 font-mono text-[12.5px] text-oliveDeep dark:text-darkOliveDeep">
              Achievements
            </div>
            <h2 className="font-display text-[26px] font-bold tracking-tight text-ink sm:text-[31px] dark:text-darkText">
              Milestones so far
            </h2>
          </div>
          <p className="max-w-[360px] text-[14.5px] text-inkSoft dark:text-darkInkSoft">
            A snapshot of the work delivered and the standards its built to.
          </p>
        </div>

        <Reveal className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-oliveSoft bg-white p-6 transition-transform duration-200 hover:-translate-y-1 dark:border-darkLine dark:bg-darkSurface"
            >
              <div className="mb-1.5 font-display text-[28px] font-bold text-oliveDeep sm:text-[30px] dark:text-darkOliveDeep">
                {s.num}
              </div>
              <div className="text-[13.5px] text-inkSoft dark:text-darkInkSoft">{s.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal className="ml-2 flex flex-col gap-7 border-l-2 border-olive pl-7 dark:border-darkOliveDeep">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-[34.5px] top-1 h-2.5 w-2.5 rounded-full border-[3px] border-cream bg-oliveDeep dark:border-darkBg dark:bg-darkOliveDeep" />
              <div className="mb-1 font-mono text-[12.5px] text-oliveDeep dark:text-darkOliveDeep">
                {item.year}
              </div>
              <h4 className="mb-1 text-[15.5px] font-semibold text-ink sm:text-base dark:text-darkText">
                {item.title}
              </h4>
              <p className="text-sm text-inkSoft dark:text-darkInkSoft">{item.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
