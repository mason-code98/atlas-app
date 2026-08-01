import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-10">
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[120px]" />

      <div className="relative z-10 text-center">
        <Image
          src="/atlas-logo-v3.png"
          alt="Atlas"
          width={500}
          height={250}
          priority
          className="mx-auto h-auto w-[320px] sm:w-[420px] md:w-[620px]"
        />

        <h1 className="mt-2 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Welcome to Atlas
        </h1>

        <p className="mt-6 text-2xl font-medium text-emerald-400 md:text-3xl">
          Build wealth. Leave a legacy.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
          Track your home, grow your portfolio, manage builds, and develop
          with confidence.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/dashboard"
            className="rounded-full bg-emerald-400 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-emerald-500/20 transition active:scale-95"
          >
            Explore Atlas Demo
          </Link>

          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-medium text-zinc-500"
          >
            Create My Workspace — Coming Soon
          </button>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-zinc-600">
          Early Access • v0.1 Beta
        </p>
      </div>
    </main>
  );
}