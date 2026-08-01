"use client";

import { useMemo, useRef, useState } from "react";

type Range = "1M" | "3M" | "1Y" | "5Y" | "ALL";

type ChartPoint = {
  label: string;
  value: number;
};

const chartData: Record<Range, ChartPoint[]> = {
  "1M": [
    { label: "Jul 1", value: 2440000 },
    { label: "Jul 5", value: 2455000 },
    { label: "Jul 10", value: 2462000 },
    { label: "Jul 15", value: 2470000 },
    { label: "Jul 20", value: 2481000 },
    { label: "Jul 25", value: 2490000 },
    { label: "Jul 30", value: 2500000 },
  ],

  "3M": [
    { label: "May 1", value: 2320000 },
    { label: "May 15", value: 2350000 },
    { label: "Jun 1", value: 2385000 },
    { label: "Jun 15", value: 2410000 },
    { label: "Jul 1", value: 2440000 },
    { label: "Jul 15", value: 2470000 },
    { label: "Jul 30", value: 2500000 },
  ],

  "1Y": [
    { label: "Aug 2025", value: 2120000 },
    { label: "Oct 2025", value: 2185000 },
    { label: "Dec 2025", value: 2240000 },
    { label: "Feb 2026", value: 2310000 },
    { label: "Apr 2026", value: 2385000 },
    { label: "Jun 2026", value: 2460000 },
    { label: "Jul 2026", value: 2500000 },
  ],

  "5Y": [
    { label: "2022", value: 980000 },
    { label: "2023", value: 1320000 },
    { label: "2024", value: 1710000 },
    { label: "2025", value: 2120000 },
    { label: "2026", value: 2500000 },
  ],

  ALL: [
    { label: "2021", value: 720000 },
    { label: "2022", value: 980000 },
    { label: "2023", value: 1320000 },
    { label: "2024", value: 1710000 },
    { label: "2025", value: 2120000 },
    { label: "2026", value: 2500000 },
  ],
};
const properties = [
 {
  address: "Oak Ridge Residence",
  location: "Nashville, TN",
  value: 485000,
  debt: 312500,
  rent: 0,
  equity: 172500,
},
 {
  address: "Riverstone Duplex",
  location: "Austin, TX",
  value: 735000,
  debt: 468000,
  rent: 5200,
  equity: 267000,
},
 {
  address: "Cedar Grove Flats",
  location: "Charlotte, NC",
  value: 1280000,
  debt: 870000,
  rent: 11800,
  equity: 410000,
},
];

function money(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Home() {
  const [range, setRange] = useState<Range>("1Y");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const chartRef = useRef<SVGSVGElement | null>(null);

  const data = chartData[range];
  const currentIndex = activeIndex ?? data.length - 1;
  const currentPoint = data[currentIndex];
  const startingValue = data[0].value;
  const change = currentPoint.value - startingValue;

  const changePercent =
    startingValue > 0 ? (change / startingValue) * 100 : 0;

  const isPositive = change >= 0;

  const chart = useMemo(() => {
    const width = 1000;
    const height = 300;
    const paddingX = 12;
    const paddingY = 28;

    const values = data.map((point) => point.value);
    const minimum = Math.min(...values);
    const maximum = Math.max(...values);
    const rangeValue = Math.max(maximum - minimum, 1);

    const points = data.map((point, index) => {
      const x =
        paddingX +
        (index / Math.max(data.length - 1, 1)) *
          (width - paddingX * 2);

      const normalized = (point.value - minimum) / rangeValue;

      const y =
        height -
        paddingY -
        normalized * (height - paddingY * 2);

      return { x, y };
    });

    const linePath = points
      .map((point, index) => {
        return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ");

    const areaPath = `${linePath} L ${
      points[points.length - 1].x
    } ${height} L ${points[0].x} ${height} Z`;

    return {
      width,
      height,
      points,
      linePath,
      areaPath,
    };
  }, [data]);

  function selectNearestPoint(clientX: number): void {
    const svg = chartRef.current;

    if (!svg) {
      return;
    }

    const bounds = svg.getBoundingClientRect();

    const relativeX = Math.max(
      0,
      Math.min(clientX - bounds.left, bounds.width),
    );

    const percentage = relativeX / bounds.width;
    const index = Math.round(percentage * (data.length - 1));

    setActiveIndex(index);
  }

  return (
    <main className="min-h-screen bg-[#080b0a] text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8 lg:px-10">
        <div>
          <p className="text-sm text-zinc-500">
            Thursday, July 30
          </p>

          <h1 className="mt-1 text-xl font-medium">
            Welcome to Atlas Demo
          </h1>
        </div>

        <button
          type="button"
          className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
        >
          + Add property
        </button>
      </header>

      <div className="space-y-8 px-5 py-8 sm:px-8 lg:px-10">
        <section className="overflow-hidden rounded-[30px] border border-white/10 bg-[#101412]">
          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Real estate net worth
                </p>

                <p className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
                  {money(currentPoint.value)}
                </p>

                <div
                  className={`mt-3 flex items-center gap-2 text-sm font-medium ${
                    isPositive
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  <span>
                    {isPositive ? "+" : ""}
                    {money(change)}
                  </span>

                  <span>·</span>

                  <span>
                    {isPositive ? "+" : ""}
                    {changePercent.toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-sm font-medium text-zinc-300">
                  {currentPoint.label}
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Drag across chart
                </p>
              </div>
            </div>

            <div className="relative h-72 w-full select-none">
              <svg
                ref={chartRef}
                viewBox={`0 0 ${chart.width} ${chart.height}`}
                preserveAspectRatio="none"
                className="h-full w-full touch-none cursor-crosshair"
                onPointerDown={(event) => {
                  event.currentTarget.setPointerCapture(
                    event.pointerId,
                  );

                  selectNearestPoint(event.clientX);
                }}
                onPointerMove={(event) => {
                  if (event.buttons === 1) {
                    selectNearestPoint(event.clientX);
                  }
                }}
                onPointerUp={() => setActiveIndex(null)}
                onPointerCancel={() => setActiveIndex(null)}
                onPointerLeave={() => setActiveIndex(null)}
              >
                <defs>
                  <linearGradient
                    id="atlasArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#34d399"
                      stopOpacity="0.26"
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
                  d={chart.areaPath}
                  fill="url(#atlasArea)"
                />

                <path
                  d={chart.linePath}
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />

                {activeIndex !== null && (
                  <>
                    <line
                      x1={chart.points[currentIndex].x}
                      x2={chart.points[currentIndex].x}
                      y1="0"
                      y2={chart.height}
                      stroke="rgba(255,255,255,0.30)"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />

                    <circle
                      cx={chart.points[currentIndex].x}
                      cy={chart.points[currentIndex].y}
                      r="8"
                      fill="#34d399"
                      stroke="#101412"
                      strokeWidth="5"
                      vectorEffect="non-scaling-stroke"
                    />
                  </>
                )}
              </svg>
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-5">
              {(["1M", "3M", "1Y", "5Y", "ALL"] as Range[]).map(
                (option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setRange(option);
                      setActiveIndex(null);
                    }}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition sm:px-4 ${
                      range === option
                        ? "bg-emerald-400 text-black"
                        : "text-zinc-500 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Portfolio value"
            value="$2,500,000"
            detail="3 properties"
          />

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
            label="Rental income"
            value="$17,000"
            detail="Per month"
            positive
          />
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Portfolio
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Your properties
              </h2>
            </div>

            <button
              type="button"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              View all
            </button>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {properties.map((property) => (
              <article
                key={property.address}
                className="group rounded-[26px] border border-white/10 bg-[#101412] p-5 transition hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-white">
                      {property.address}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      {property.location}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                    {property.rent > 0 ? "Rental" : "Primary"}
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                    Estimated value
                  </p>

                  <p className="mt-2 text-3xl font-semibold">
                    {money(property.value)}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  <PropertyStat
                    label="Equity"
                    value={money(property.equity)}
                  />

                  <PropertyStat
                    label={
                      property.rent > 0
                        ? "Monthly rent"
                        : "Loan balance"
                    }
                    value={
                      property.rent > 0
                        ? money(property.rent)
                        : money(property.debt)
                    }
                  />
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
  positive = false,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
}) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-[#101412] p-5">
      <p className="text-xs uppercase tracking-[0.17em] text-zinc-600">
        {label}
      </p>

      <p className="mt-4 text-2xl font-semibold">
        {value}
      </p>

      <p
        className={`mt-2 text-sm ${
          positive
            ? "text-emerald-400"
            : "text-zinc-500"
        }`}
      >
        {detail}
      </p>
    </article>
  );
}

function PropertyStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-zinc-600">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-zinc-200">
        {value}
      </p>
    </div>
  );
}