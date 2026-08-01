"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Properties", href: "/properties" },
  { label: "Tenants", href: "/tenants" },
  { label: "Builder", href: "/builder" },
  { label: "Development", href: "/development" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function NavigationLinks() {
    return (
      <nav className="mt-8 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`block rounded-xl px-4 py-3 text-sm transition ${
              isActive(item.href)
                ? "bg-emerald-400 font-semibold text-black"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        className="fixed left-4 top-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#101412] shadow-2xl lg:hidden"
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span className="h-0.5 w-full rounded-full bg-white" />
          <span className="h-0.5 w-full rounded-full bg-white" />
          <span className="h-0.5 w-full rounded-full bg-white" />
        </span>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[9998] bg-black/75 lg:hidden"
        />
      )}

      {/* Mobile menu */}
      <aside
        className={`fixed inset-y-0 left-0 z-[9999] flex w-[86%] max-w-[320px] flex-col border-r border-white/10 bg-[#080b0a] px-6 py-7 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/atlas-logo-v3.png"
            alt="Atlas"
            width={220}
            height={110}
            priority
            className="h-auto w-[190px] object-contain"
          />

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-2xl text-white"
          >
            ×
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
            Workspace
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            Atlas Demo
          </p>
        </div>

        <NavigationLinks />

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Early access
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-zinc-300">
              Atlas v0.1 Beta
            </span>
          </div>
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-white/10 bg-[#080b0a] px-6 py-8 lg:flex">
        <Image
          src="/atlas-logo-v3.png"
          alt="Atlas"
          width={300}
          height={150}
          priority
          className="mx-auto h-auto w-[250px] object-contain"
        />

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
            Workspace
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            Atlas Demo
          </p>
        </div>

        <NavigationLinks />

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Early access
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-zinc-300">
              Atlas v0.1 Beta
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}