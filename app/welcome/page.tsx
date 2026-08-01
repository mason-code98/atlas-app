"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  function enterDemo() {
    router.push("/");
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[120px]" />

      <div className="relative z-10 text-center">
        <Image
          src="/atlas-logo-v3.png"
          alt="Atlas"
          width={500} 
          height={250}
          priority
          className="mx-auto h-auto w-[420px] md:w-[620px]"
          style={{
            opacity: 0,
            animation: "fadeIn 1.2s ease-out 0.3s forwards",
          }}
        />

        <h1
          className="mt-2 text-5xl font-bold tracking-tight text-white md:text-7xl"
          style={{
            opacity: 0,
            animation: "fadeUp 1s ease-out 1.2s forwards",
          }}
        >
          Welcome to Atlas
        </h1>

        <p
          className="mt-8 text-2xl font-medium text-emerald-400 md:text-3xl"
          style={{
            opacity: 0,
            animation: "fadeUp 1s ease-out 2.1s forwards",
          }}
        >
          Build wealth. Leave a legacy.
        </p>

        <p
          className="mx-auto mt-8 max-w-xl text-base leading-7 text-zinc-400 md:text-lg"
          style={{
            opacity: 0,
            animation: "fadeUp 1s ease-out 2.9s forwards",
          }}
        >
          Track your home, grow your portfolio, manage builds, and develop
          with confidence.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{
            opacity: 0,
            animation: "fadeUp 1s ease-out 3.6s forwards",
          }}
        >
          <button
            type="button"
            onClick={enterDemo}
            className="rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
          >
            Explore Atlas Demo
          </button>

          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-zinc-500"
          >
            Create My Workspace — Coming Soon
          </button>
        </div>

        <p
          className="mt-8 text-xs uppercase tracking-[0.22em] text-zinc-600"
          style={{
            opacity: 0,
            animation: "fadeUp 1s ease-out 4.1s forwards",
          }}
        >
          Early Access • v0.1 Beta
        </p>
      </div>
    </main>
  );
}