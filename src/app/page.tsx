import Image from "next/image";

type WorkItem = {
  company: string;
  href?: string;
  role: string;
  summary?: string;
  start: string;
  end: string;
  icon: string;
};

const work: WorkItem[] = [
  {
    company: "Gapstack",
    role: "Frontend Engineer",
    summary:
      "Building finance workflows and data visualizations for a digital supply chain platforms; React + TypeScript; partnering across product and backend.",
    start: "Dec 2023",
    end: "Present",
    icon: "/gapstack-favicon.ico",
  },
  {
    company: "Kidato",
    role: "Software Engineer",
    summary:
      "Shipped live online academic apps and dashboards; led front‑end delivery across web experiences.",
    start: "Jul 2022",
    end: "Feb 2024",
    icon: "/kidato-favicon.ico",
  },
  {
    company: "Data Integrated Limited",
    role: "UI Designer",
    summary:
      "Designed internal apps, systems, and brand collateral; drove UX testing and data‑driven improvements.",
    start: "Mar 2022",
    end: "Dec 2023",
    icon: "/dil-favicon.ico",
  },
  {
    company: "Data Integration Technologies (Fintech-Group)",
    role: "Software Developer",
    summary:
      "Prototyped and delivered core system software and internal tools.",
    start: "May 2021",
    end: "Feb 2022",
    icon: "/dit-favicon.webp",
  },
];

const ArrowUp = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M9.91667 1.5835L0.75 10.7502"
      stroke="#165CFD"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4.91675 0.859595C4.91675 0.859595 9.61137 0.46385 10.3238 1.17628C11.0362 1.88871 10.6404 6.58333 10.6404 6.58333"
      stroke="#165CFD"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function WorkItem({ item }: { item: WorkItem }) {
  return (
    <li
      key={`${item.company}-${item.start}`}
      className="py-4 sm:py-5 first:pt-0"
    >
      <div className="flex flex-col sm:items-baseline sm:justify-between gap-2">
        <span className="shrink-0 tabular-nums text-xs font-mono text-foreground/30">
          {item.start}—{item.end}
        </span>
        <div className="min-w-0 text-sm">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-foreground/80 font-medium">{item.role}</span>
            <span className="text-foreground/50">·</span>
            <Image
              src={item.icon}
              alt={`${item.company} logo`}
              width={16}
              height={16}
              className="rounded-sm"
            />
            {item.href ? (
              <a href={item.href} className="hover:text-foreground">
                {item.company}
              </a>
            ) : (
              <span className="">{item.company}</span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

function WorkSection({
  heading,
  items,
}: {
  heading: string;
  items: WorkItem[];
}) {
  return (
    <section aria-labelledby={heading} className="">
      <h2
        id={heading}
        className="text-[11px] uppercase tracking-widest font-semibold text-foreground/50"
      >
        {heading}
      </h2>
      <ul role="list" className="mt-4 divide-y divide-foreground/2.5">
        {items.map((item) => (
          <WorkItem key={`${item.company}-${item.start}`} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-20">
      <header className="mb-8">
        <h1 className="text-base/7 sm:text-base/7 font-medium tracking-tight mb-10">
          Tony Ouma
        </h1>
      </header>

      <div className="mb-16 space-y-2.5">
        <WorkSection heading="Work" items={work.slice(0, 1)} />

        <section aria-labelledby="projects" className="mb-8">
          <h2
            id="projects"
            className="text-[11px] uppercase tracking-widest text-foreground/50 mb-3"
          >
            Projects
          </h2>

          <p className="text-xs text-foreground/50 py-2.5">
            Below are a few selected projects. Full walkthroughs available on
            request.
          </p>

          <div className="flex gap-2">
            <p className="text-xs text-foreground/80">Tukai</p>
            <a
              href="https://apps.apple.com/us/app/tukai/id6751051486"
              className="text-foreground/80 hover:text-foreground flex items-center gap-1 text-[9px]"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUp />
            </a>
          </div>

          <div className="bg-gray-50 h-56 w-56 mt-1 justify-center items-center flex rounded">
            <Image
              src="/tukai-demo.gif"
              alt="description"
              width={90}
              height={35}
              unoptimized
            />
          </div>
        </section>

        <WorkSection heading="Previously At" items={work.slice(1)} />
      </div>

      <nav className="flex flex-wrap gap-5 text-xs text-foreground/60">
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
      </nav>
    </main>
  );
}
