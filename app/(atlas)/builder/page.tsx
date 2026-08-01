const buildTemplates = [
  {
    name: "Single-Family Home",
    description: "Plan a ground-up residential build from lot to completion.",
    timeline: "18-24 months",
  },
  {
    name: "Duplex",
    description: "Create a two-unit rental or build-to-sell project.",
    timeline: "18-24 months",
  },
  {
    name: "Manufactured Home",
    description: "Track land preparation, delivery, setup, utilities, and finish work.",
    timeline: "24-36 months",
  },
];

const buildSteps = [
  { label: "Project concept", status: "Complete" },
  { label: "Lot and feasibility", status: "In progress" },
  { label: "Plans and engineering", status: "Not started" },
  { label: "Budget and financing", status: "Not started" },
  { label: "Permits and approvals", status: "Not started" },
  { label: "Construction", status: "Not started" },
];

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-[#080b0a] px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">
              Atlas Builder
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Build from the ground up
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Plan a new home from concept through completion. Track the lot,
              design, permits, budget, contractors, timeline, and projected
              finished value in one place.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            + Start new build
          </button>
        </header>

        <section className="mt-8 grid gap-5 xl:grid-cols-[1.45fr_1fr]">
          <article className="rounded-[32px] border border-white/10 bg-[#101412] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Build workspace
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  New construction starts here
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                  Atlas will guide the project through preconstruction, design,
                  budgeting, permitting, construction, inspections, and final
                  completion.
                </p>
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
                Ground-up build
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <MetricCard
                label="Projected budget"
                value="$0"
                detail="Set during project setup"
              />

              <MetricCard
                label="Target completion"
                value="—"
                detail="Choose a target date"
              />

              <MetricCard
                label="Projected value"
                value="$0"
                detail="Calculated from build inputs"
              />
            </div>

            <div className="mt-8 rounded-[26px] border border-white/10 bg-black/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Build progress
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Project lifecycle
                  </h3>
                </div>

                <span className="text-sm text-zinc-500">1 of 6 phases</span>
              </div>

              <div className="mt-6 space-y-3">
                {buildSteps.map((step, index) => (
                  <BuildStep
                    key={step.label}
                    number={index + 1}
                    label={step.label}
                    status={step.status}
                  />
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5">
            <article className="rounded-[30px] border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                Atlas Builder AI
              </p>

              <h2 className="mt-4 text-2xl font-semibold">
                Start with feasibility, not finishes.
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Before choosing cabinets or flooring, confirm zoning, utilities,
                soil conditions, setbacks, access, and the total project budget.
                Those decisions control whether the build works financially.
              </p>

              <button
                type="button"
                className="mt-6 text-sm font-medium text-emerald-300 hover:text-emerald-200"
              >
                Begin feasibility check →
              </button>
            </article>

            <article className="rounded-[30px] border border-white/10 bg-[#101412] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Builder tools
              </p>

              <div className="mt-6 space-y-4">
                <ToolRow label="Site feasibility" />
                <ToolRow label="Build cost estimator" />
                <ToolRow label="Floor plan workspace" />
                <ToolRow label="Construction timeline" />
                <ToolRow label="Permit checklist" />
                <ToolRow label="Contractor bidding" />
              </div>
            </article>
          </aside>
        </section>

        <section className="mt-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Build templates
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Choose a starting point
            </h2>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {buildTemplates.map((template) => (
              <article
                key={template.name}
                className="group rounded-[28px] border border-white/10 bg-[#101412] p-6 transition hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{template.name}</h3>

                  <span className="text-emerald-400 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {template.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs text-zinc-600">
                    Typical timeline
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {template.timeline}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-[22px] border border-white/10 bg-white/[0.02] p-5">
      <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
        {label}
      </p>

      <p className="mt-3 text-2xl font-semibold">{value}</p>

      <p className="mt-2 text-xs leading-5 text-zinc-500">
        {detail}
      </p>
    </article>
  );
}

function BuildStep({
  number,
  label,
  status,
}: {
  number: number;
  label: string;
  status: string;
}) {
  const complete = status === "Complete";
  const active = status === "In progress";

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
            complete
              ? "bg-emerald-400 text-black"
              : active
                ? "border border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                : "border border-white/10 text-zinc-600"
          }`}
        >
          {number}
        </span>

        <p className="text-sm font-medium text-zinc-200">{label}</p>
      </div>

      <span
        className={`text-xs ${
          complete
            ? "text-emerald-400"
            : active
              ? "text-emerald-300"
              : "text-zinc-600"
        }`}
      >
        {status}
      </span>
    </div>
  );
}

function ToolRow({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between border-b border-white/10 pb-4 text-left text-sm text-zinc-300 transition last:border-0 last:pb-0 hover:text-white"
    >
      <span>{label}</span>
      <span className="text-zinc-600">→</span>
    </button>
  );
}