type WorkItem = {
  company: string;
  href?: string;
  role: string;
  summary?: string;
  start: string; // e.g. "2023"
  end: string; // e.g. "Present"
};

const work: WorkItem[] = [
  {
    company: "Gapstack",
    role: "Software Engineer",
    summary:
      "Building finance workflows and data visualizations for a digital supply chain platforms; React + TypeScript; partnering across product and backend.",
    start: "Dec 2023",
    end: "Present",
  },
  {
    company: "Kidato",
    role: "Software Engineer",
    summary:
      "Shipped live online academic apps and dashboards; led front‑end delivery across web experiences.",
    start: "Jul 2022",
    end: "Feb 2024",
  },
  {
    company: "Data Integrated Limited",
    role: "UI Designer",
    summary:
      "Designed internal apps, systems, and brand collateral; drove UX testing and data‑driven improvements.",
    start: "Mar 2022",
    end: "Dec 2023",
  },
  {
    company: "Data Integration Technologies (Fintech-Group)",
    role: "Software Developer",
    summary:
      "Prototyped and delivered core system software and internal tools.",
    start: "May 2021",
    end: "Feb 2022",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl py-28 sm:py-32">
      <header className="mb-8">
        <h1 className="text-base/7 sm:text-base/7 font-medium tracking-tight">
          Tony Ouma
        </h1>
      </header>

      <section className="space-y-5 text-balance">
        <p className="text-base/7 text-foreground/90">Herding digital cats.</p>
      </section>

      {/* Work */}
      <section aria-labelledby="work" className="mt-16 sm:mt-20">
        <h2
          id="work"
          className="text-[11px] uppercase tracking-widest text-foreground/50"
        >
          Work
        </h2>
        <ul role="list" className="mt-4 divide-y divide-foreground/10">
          {work.map((item) => (
            <li
              key={`${item.company}-${item.start}`}
              className="py-4 sm:py-5 first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-foreground"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <span className="font-medium">{item.company}</span>
                    )}
                    <span className="text-foreground/50">·</span>
                    <span className="text-foreground/80">{item.role}</span>
                  </div>
                  {item.summary ? (
                    <p className="mt-1 text-[13px]/6 text-foreground/70">
                      {item.summary}
                    </p>
                  ) : null}
                </div>
                <span className="shrink-0 tabular-nums text-xs font-mono text-foreground/50">
                  {item.start}—{item.end}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-10 flex flex-wrap gap-5 text-sm text-foreground/80">
        <a href="mailto:oumat621@gmail.com" className="hover:text-foreground">
          Email
        </a>
        <a
          href="https://github.com/tonyouma"
          className="hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://x.com/tonyoouma"
          className="hover:text-foreground"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
        <a href="/resume.pdf" className="hover:text-foreground">
          Resume
        </a>
      </nav>
    </main>
  );
}
