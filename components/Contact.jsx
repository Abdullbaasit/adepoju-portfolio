import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-22">
      <div className="mx-auto max-w-[1160px] px-6">
        <Reveal className="rounded-3xl bg-ink px-6 py-14 text-center text-cream sm:px-10 sm:py-16 dark:border dark:border-darkLine dark:bg-darkSurface">
          <div className="mb-3.5 font-mono text-[12.5px] text-olive">
            Contact
          </div>
          <h2 className="mb-3.5 font-display text-[26px] font-bold sm:text-[31px]">
            Let's build something global.
          </h2>
          <p className="mx-auto mb-8 max-w-[460px] text-[15.5px] text-[#c9c4a0]">
            Open to freelance projects and full-time frontend roles — remote,
            anywhere. Reach out and let's talk about what you're building.
          </p>
          <a
            href="mailto:fimihanadepoju@gmail.com"
            className="inline-flex items-center gap-2 rounded-[10px] bg-olive px-6 py-3.5 text-[14.5px] font-semibold text-ink transition hover:opacity-90"
          >
            Email me →
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[13.5px]">
            <a
              href="https://github.com/Abdullbaasit"
              className="border-b border-transparent text-[#c9c4a0] transition-colors hover:border-olive hover:text-olive"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/taiwo-adepoju-/"
              className="border-b border-transparent text-[#c9c4a0] transition-colors hover:border-olive hover:text-olive"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Adefimihan24"
              className="border-b border-transparent text-[#c9c4a0] transition-colors hover:border-olive hover:text-olive"
            >
              Twitter / X
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
