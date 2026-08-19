import Reveal from "./Reveal";

const projects = [
  {
    title: "Ecowatch — Environmental Monitoring Platform",
    description:
      "A web platform that tracks and visualizes real-time environmental data, helping communities stay informed on air quality, weather shifts, and local environmental alerts.",
    features: [
      "Live data pulled and cached via Axios-powered API integrations",
      "Interactive charts and maps for air quality and weather trends",
      "Fully responsive layout tuned for low-bandwidth mobile access"
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Axios"],
    liveHref: "#",
    codeHref: "#",
    mockupBars: ["w-3/5", "w-4/5", "w-2/5"],
    mockupTiles: 2
  },
  {
    title: "Shop12 — E-commerce Website",
    description:
      "A complete online storefront built for smooth product discovery and checkout, from category browsing to cart and payment, designed to feel fast on any device.",
    features: [
      "Product filtering, search, and cart built with React and Next.js",
      "Type-safe data layer with JavaScript across the app",
      "Smooth checkout flow with Axios-driven order handling"
    ],
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Axios"],
    liveHref: "https://shop12q.netlify.app/",
    codeHref: "https://github.com/Abdullbaasit/Shop-12",
    mockupBars: ["w-2/5"],
    mockupTiles: 4
  }
];

export default function Projects() {
  return (
    <section id="projects" className="border-y border-oliveSoft bg-oliveSoft py-16 sm:py-22 dark:border-darkLine dark:bg-darkSurfaceSoft">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2.5 font-mono text-[12.5px] text-oliveDeep dark:text-darkOliveDeep">
              My Projects
            </div>
            <h2 className="font-display text-[26px] font-bold tracking-tight text-ink sm:text-[31px] dark:text-darkText">
              Selected work
            </h2>
          </div>
          <p className="max-w-[360px] text-[14.5px] text-inkSoft dark:text-darkInkSoft">
            Two recent builds that reflect how I approach real products, from data-heavy
            dashboards to shopping experiences.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => (
            <Reveal
              key={project.title}
              delay={idx * 100}
              className="grid grid-cols-1 overflow-hidden rounded-2xl border border-oliveSoft bg-white transition-shadow duration-300 hover:shadow-xl md:grid-cols-2 dark:border-darkLine dark:bg-darkSurface"
            >
              <div className={`flex flex-col justify-center p-8 sm:p-10 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <span className="mb-3.5 w-fit rounded-full bg-oliveSoft px-2.5 py-1 font-mono text-[11.5px] text-oliveDeep dark:bg-darkSurfaceSoft dark:text-darkOliveDeep">
                  case study
                </span>
                <h3 className="mb-3 text-[20px] font-semibold text-ink sm:text-[22px] dark:text-darkText">
                  {project.title}
                </h3>
                <p className="mb-4 text-[14.5px] text-inkSoft dark:text-darkInkSoft">
                  {project.description}
                </p>
                <ul className="mb-5 ml-4 list-disc space-y-1.5 text-sm text-inkSoft dark:text-darkInkSoft">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-oliveSoft bg-cream px-2.5 py-1 font-mono text-[11.5px] text-inkSoft dark:border-darkLine dark:bg-darkBg dark:text-darkInkSoft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-[13.5px] font-semibold">
                  <a
                    href={project.liveHref}
                    className="border-b-[1.5px] border-oliveDeep text-ink transition-colors hover:text-oliveDeep dark:border-darkOliveDeep dark:text-darkText"
                  >
                    Live site
                  </a>
                  <a
                    href={project.codeHref}
                    className="border-b-[1.5px] border-oliveDeep text-ink transition-colors hover:text-oliveDeep dark:border-darkOliveDeep dark:text-darkText"
                  >
                    Source code
                  </a>
                </div>
              </div>

              <div
                className={`flex min-h-[260px] items-center justify-center bg-gradient-to-br from-oliveSoft to-olive p-9 dark:from-darkSurfaceSoft dark:to-darkOliveDeep/40 ${
                  idx % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="w-full overflow-hidden rounded-[10px] bg-white shadow-2xl dark:bg-darkSurface">
                  <div className="flex items-center gap-1.5 border-b border-oliveSoft bg-creamDeep px-3 py-2.5 dark:border-darkLine dark:bg-darkBg">
                    <span className="h-2 w-2 rounded-full bg-olive" />
                    <span className="h-2 w-2 rounded-full bg-olive" />
                    <span className="h-2 w-2 rounded-full bg-olive" />
                    {project.liveHref && project.liveHref !== "#" && (
                      <span className="ml-2 truncate rounded-full bg-white px-2.5 py-0.5 font-mono text-[10px] text-inkSoft dark:bg-darkSurfaceSoft dark:text-darkInkSoft">
                        {project.liveHref.replace(/^https?:\/\//, "")}
                      </span>
                    )}
                  </div>

                  {project.liveHref && project.liveHref !== "#" ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                      <iframe
                        src={project.liveHref}
                        title={`${project.title} live preview`}
                        loading="lazy"
                        tabIndex={-1}
                        className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0"
                      />
                      {/* transparent overlay so the card's own hover/click behavior isn't hijacked by the iframe */}
                      <div className="absolute inset-0" />
                    </div>
                  ) : (
                    <div className="p-4">
                      {project.mockupBars.map((w, i) => (
                        <div key={i} className={`mb-2.5 h-[9px] rounded ${w} bg-oliveSoft dark:bg-darkSurfaceSoft`} />
                      ))}
                      <div className="mt-3.5 grid grid-cols-2 gap-2">
                        {Array.from({ length: project.mockupTiles }).map((_, i) => (
                          <div key={i} className="h-11 rounded-md bg-oliveSoft dark:bg-darkSurfaceSoft" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
