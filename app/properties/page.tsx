const properties = [
  {
    address: "Oak Ridge Residence",
    location: "Nashville, TN",
    type: "Primary residence",
    value: "$485,000",
    equity: "$172,500",
    loan: "$312,500",
    rent: "—",
    cashFlow: "Primary",
    occupancy: "Owner occupied",
  },
  {
    address: "Riverstone Duplex",
    location: "Austin, TX",
    type: "Two-unit rental",
    value: "$735,000",
    equity: "$267,000",
    loan: "$468,000",
    rent: "$5,200",
    cashFlow: "+$1,260/mo",
    occupancy: "100% occupied",
  },
  {
    address: "Cedar Grove Flats",
    location: "Charlotte, NC",
    type: "Eight-unit multifamily",
    value: "$1,280,000",
    equity: "$410,000",
    loan: "$870,000",
    rent: "$11,800",
    cashFlow: "+$3,140/mo",
    occupancy: "96% occupied",
  },
];

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#080b0a] px-6 py-8 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-400">
                Atlas Properties
              </p>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-300">
                Demo data
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Properties
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Manage every property, loan, rent stream, value estimate, and
              equity position in one place.
            </p>
          </div>

          <button
            type="button"
            className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/10 transition-all duration-200 hover:bg-emerald-300 active:scale-95"
          >
            + Add property
          </button>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Total properties"
            value="3"
            detail="2 income-producing"
          />

          <MetricCard
            label="Total value"
            value="$2,500,000"
            detail="+5.4% this year"
            positive
          />

          <MetricCard
            label="Total equity"
            value="$849,500"
            detail="+$8,740 this month"
            positive
          />

          <MetricCard
            label="Monthly rent"
            value="$17,000"
            detail="98% average occupancy"
            positive
          />
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <article className="rounded-[30px] border border-white/10 bg-[#101412]">
            <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Property inventory
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  All properties
                </h2>
              </div>

              <button
                type="button"
                className="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
              >
                Filter properties
              </button>
            </div>

            <div className="divide-y divide-white/5">
              {properties.map((property) => (
                <article
                  key={property.address}
                  className="p-6 transition hover:bg-white/[0.02]"
                >
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-medium text-white">
                          {property.address}
                        </h3>

                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                          {property.occupancy}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-zinc-500">
                        {property.location}
                      </p>

                      <p className="mt-3 text-sm text-zinc-400">
                        {property.type}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-left text-sm font-medium text-emerald-400 transition hover:text-emerald-300 xl:text-right"
                    >
                      View property →
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                    <PropertyMetric
                      label="Value"
                      value={property.value}
                    />

                    <PropertyMetric
                      label="Equity"
                      value={property.equity}
                    />

                    <PropertyMetric
                      label="Loan"
                      value={property.loan}
                    />

                    <PropertyMetric
                      label="Rent"
                      value={property.rent}
                    />

                    <PropertyMetric
                      label="Cash flow"
                      value={property.cashFlow}
                      positive={property.cashFlow.startsWith("+")}
                    />
                  </div>
                </article>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <article className="rounded-[28px] border border-white/10 bg-[#101412] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Property health
              </p>

              <div className="mt-6 space-y-5">
                <HealthRow
                  label="Occupied rentals"
                  value="2 of 2"
                  status="Healthy"
                />

                <HealthRow
                  label="Average LTV"
                  value="66.0%"
                  status="Healthy"
                />

                <HealthRow
                  label="Monthly cash flow"
                  value="+$4,400"
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

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This demonstration portfolio combines a primary residence with
                two income-producing assets. Rental occupancy and positive cash
                flow support a healthy overall position.
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[#101412] p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Demo workspace
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                All names, locations, and financial figures shown here are
                fictional and are provided only to demonstrate Atlas.
              </p>
            </article>
          </aside>
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
    <article className="rounded-[26px] border border-white/10 bg-[#101412] p-5">
      <p className="text-xs uppercase tracking-[0.17em] text-zinc-600">
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

function PropertyMetric({
  label,
  value,
  positive = false,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
      <p className="text-xs text-zinc-600">{label}</p>

      <p
        className={`mt-2 text-sm font-medium ${
          positive ? "text-emerald-400" : "text-zinc-200"
        }`}
      >
        {value}
      </p>
    </div>
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