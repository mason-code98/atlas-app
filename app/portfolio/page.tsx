const propertyRows = [
  {
    name: "1305 Napier Street",
    location: "Flatwoods, KY",
    value: "$190,000",
    equity: "$63,000",
    cashFlow: "+$420",
    ltv: "66.8%",
  },
  {
    name: "1598 Smith Branch Road",
    location: "Greenup County, KY",
    value: "$110,000",
    equity: "$32,000",
    cashFlow: "+$290",
    ltv: "70.9%",
  },
  {
    name: "1595 Lawson Street",
    location: "Wheelersburg, OH",
    value: "$220,000",
    equity: "$33,000",
    cashFlow: "Primary",
    ltv: "85.0%",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#080b0a] px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">
              Atlas Portfolio
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Portfolio overview
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              A consolidated view of your property values, equity, debt,
              and monthly performance.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:bg-emerald-400/10"
          >
            Export report
          </button>
        </header>

        <section className="mt-8 grid gap-5 xl:grid-cols-[1.55fr_1fr]">
          <article className="rounded-[30px] border border-white/10 bg-[#101412] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Total portfolio value
                </p>

                <p className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
                  $520,000
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <span>+$18,600</span>
                  <span>·</span>
                  <span>+3.71%</span>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-sm font-medium text-zinc-300">
                  July 2026
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Based on current estimates
                </p>
              </div>
            </div>

            <div className="mt-10 h-72">
              <svg
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient
                    id="portfolioFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#34d399"
                      stopOpacity="0.22"
                    />
                    <stop
                      offset="100%"
                      stopColor="#34d399"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <line
                  x1="0"
                  x2="1000"
                  y1="75"
                  y2="75"
                  stroke="rgba(255,255,255,0.05)"
                />
                <line
                  x1="0"
                  x2="1000"
                  y1="150"
                  y2="150"
                  stroke="rgba(255,255,255,0.05)"
                />
                <line
                  x1="0"
                  x2="1000"
                  y1="225"
                  y2="225"
                  stroke="rgba(255,255,255,0.05)"
                />

                <path
                  d="M 20 250 L 150 232 L 300 220 L 440 190 L 590 176 L 730 135 L 860 112 L 980 62 L 980 300 L 20 300 Z"
                  fill="url(#portfolioFill)"
                />

                <path
                  d="M 20 250 L 150 232 L 300 220 L 440 190 L 590 176 L 730 135 L 860 112 L 980 62"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-zinc-600">
              <span>Aug</span>
              <span>Nov</span>
              <span>Feb</span>
              <span>May</span>
              <span>Jul</span>
            </div>
          </article>

          <aside className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            <MetricCard
              label="Total equity"
              value="$128,000"
              detail="+$2,410 this month"
              positive
            />

            <MetricCard
              label="Total debt"
              value="$392,000"
              detail="75.4% portfolio LTV"
            />

            <MetricCard
              label="Monthly cash flow"
              value="+$2,200"
              detail="$26,400 annually"
              positive
            />
          </aside>
        </section>

        <section className="mt-8 rounded-[30px] border border-white/10 bg-[#101412]">
          <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Property performance
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Assets in this portfolio
              </h2>
            </div>

            <button
              type="button"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              Add property
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.16em] text-zinc-600">
                  <th className="px-6 py-4 font-medium">Property</th>
                  <th className="px-6 py-4 font-medium">Value</th>
                  <th className="px-6 py-4 font-medium">Equity</th>
                  <th className="px-6 py-4 font-medium">Cash flow</th>
                  <th className="px-6 py-4 font-medium">LTV</th>
                </tr>
              </thead>

              <tbody>
                {propertyRows.map((property) => (
                  <tr
                    key={property.name}
                    className="border-b border-white/5 transition last:border-0 hover:bg-white/[0.025]"
                  >
                    <td className="px-6 py-5">
                      <p className="font-medium text-white">
                        {property.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500">
                        {property.location}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-sm text-zinc-200">
                      {property.value}
                    </td>

                    <td className="px-6 py-5 text-sm text-zinc-200">
                      {property.equity}
                    </td>

                    <td className="px-6 py-5 text-sm font-medium text-emerald-400">
                      {property.cashFlow}
                    </td>

                    <td className="px-6 py-5 text-sm text-zinc-400">
                      {property.ltv}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-[#101412] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
              Portfolio health
            </p>

            <div className="mt-6 space-y-5">
              <HealthRow
                label="Occupancy"
                value="100%"
                status="Healthy"
              />

              <HealthRow
                label="Loan-to-value"
                value="75.4%"
                status="Watch"
              />

              <HealthRow
                label="Cash reserves"
                value="6.2 months"
                status="Healthy"
              />
            </div>
          </article>

          <article className="rounded-[28px] border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              Atlas insight
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Strong cash flow. Elevated leverage.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Your portfolio is producing positive monthly income, but the
              current loan-to-value ratio leaves less room for a market
              downturn or cash-out refinance.
            </p>

            <button
              type="button"
              className="mt-6 text-sm font-medium text-emerald-300 hover:text-emerald-200"
            >
              Review financing strategy →
            </button>
          </article>
        </section>
      </div>
    </main>
  );
}

function MetricCard({
  label,
  value,
  detail,
  positive = false,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
}) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-[#101412] p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
        {label}
      </p>

      <p className="mt-4 text-3xl font-semibold tracking-tight">
        {value}
      </p>

      <p
        className={`mt-2 text-sm ${
          positive ? "text-emerald-400" : "text-zinc-500"
        }`}
      >
        {detail}
      </p>
    </article>
  );
}

function HealthRow({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: "Healthy" | "Watch";
}) {
  const healthy = status === "Healthy";

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0">
      <div>
        <p className="text-sm text-zinc-500">{label}</p>
        <p className="mt-1 font-medium text-white">{value}</p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs ${
          healthy
            ? "bg-emerald-400/10 text-emerald-300"
            : "bg-amber-400/10 text-amber-300"
        }`}
      >
        {status}
      </span>
    </div>
  );
}