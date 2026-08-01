const propertyRows = [
  {
    name: "Oak Ridge Residence",
    location: "Nashville, TN",
    type: "Primary residence",
    value: "$485,000",
    equity: "$172,500",
    cashFlow: "Primary",
    ltv: "64.4%",
  },
  {
    name: "Riverstone Duplex",
    location: "Austin, TX",
    type: "Two-unit rental",
    value: "$735,000",
    equity: "$267,000",
    cashFlow: "+$1,260",
    ltv: "63.7%",
  },
  {
    name: "Cedar Grove Flats",
    location: "Charlotte, NC",
    type: "Eight-unit multifamily",
    value: "$1,280,000",
    equity: "$410,000",
    cashFlow: "+$3,140",
    ltv: "68.0%",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#080b0a] px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">
                Atlas Portfolio
              </p>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                Demo data
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Portfolio overview
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              A consolidated view of property values, equity, debt, and monthly
              performance across the Atlas demonstration portfolio.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-600"
          >
            Export report — Coming soon
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
                  $2,500,000
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <span>+$128,000</span>
                  <span>·</span>
                  <span>+5.4%</span>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-sm font-medium text-zinc-300">
                  August 2026
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Based on demonstration estimates
                </p>
              </div>
            </div>

            <div className="mt-10 h-72">
              <svg
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
                className="h-full w-full"
                role="img"
                aria-label="Atlas Demo portfolio value growth chart"
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
                  d="M 20 270 L 150 255 L 300 230 L 440 202 L 590 168 L 730 130 L 860 92 L 980 48 L 980 300 L 20 300 Z"
                  fill="url(#portfolioFill)"
                />

                <path
                  d="M 20 270 L 150 255 L 300 230 L 440 202 L 590 168 L 730 130 L 860 92 L 980 48"
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
              <span>Aug 2025</span>
              <span>Nov</span>
              <span>Feb</span>
              <span>May</span>
              <span>Aug 2026</span>
            </div>
          </article>

          <aside className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
            <MetricCard
              label="Total equity"
              value="$849,500"
              detail="+$8,740 this month"
              positive
            />

            <MetricCard
              label="Total debt"
              value="$1,650,500"
              detail="66.0% portfolio LTV"
            />

            <MetricCard
              label="Monthly cash flow"
              value="+$4,400"
              detail="$52,800 annually"
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
              disabled
              className="cursor-not-allowed text-sm font-medium text-zinc-600"
            >
              Add property — Coming soon
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs uppercase tracking-[0.16em] text-zinc-600">
                  <th className="px-6 py-4 font-medium">Property</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Value</th>
                  <th className="px-6 py-4 font-medium">Equity</th>
                  <th className="px-6 py-4 font-medium">Cash flow</th>
                  <th className="px-6 py-4 font-medium">LTV</th>
                </tr>
              </thead>

              <tbody>
                {propertyRows.map((property) => {
                  const positiveCashFlow =
                    property.cashFlow.startsWith("+");

                  return (
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

                      <td className="px-6 py-5 text-sm text-zinc-400">
                        {property.type}
                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-200">
                        {property.value}
                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-200">
                        {property.equity}
                      </td>

                      <td
                        className={`px-6 py-5 text-sm font-medium ${
                          positiveCashFlow
                            ? "text-emerald-400"
                            : "text-zinc-400"
                        }`}
                      >
                        {property.cashFlow}
                      </td>

                      <td className="px-6 py-5 text-sm text-zinc-400">
                        {property.ltv}
                      </td>
                    </tr>
                  );
                })}
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
                label="Rental occupancy"
                value="98%"
                status="Healthy"
              />

              <HealthRow
                label="Loan-to-value"
                value="66.0%"
                status="Healthy"
              />

              <HealthRow
                label="Monthly cash flow"
                value="+$4,400"
                status="Healthy"
              />

              <HealthRow
                label="Cash reserves"
                value="7.4 months"
                status="Healthy"
              />
            </div>
          </article>

          <article className="rounded-[28px] border border-emerald-400/20 bg-emerald-400/[0.05] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              Atlas insight
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Strong equity. Healthy income.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              The demonstration portfolio combines a primary residence with
              two income-producing assets. Positive monthly cash flow, strong
              occupancy, and a 66% portfolio loan-to-value ratio create a
              balanced position for continued growth.
            </p>

            <button
              type="button"
              disabled
              className="mt-6 cursor-not-allowed text-sm font-medium text-zinc-600"
            >
              Review financing strategy — Coming soon
            </button>
          </article>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-zinc-700">
          All properties, locations, and financial figures shown are fictional
          and provided only to demonstrate Atlas.
        </p>
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