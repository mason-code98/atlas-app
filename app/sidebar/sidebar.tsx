"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkspace } from "../WorkspaceContext";

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
  const { workspace, setWorkspace } = useWorkspace();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setWorkspaceOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Do not show navigation on the welcome screen.
  if (pathname === "/welcome") {
    return null;
  }

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between">
        <Image
          src="/atlas-logo-v3.png"
          alt="Atlas"
          width={240}
          height={120}
          priority
          unoptimized
          className="h-auto w-[210px] object-contain"
        />

        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition hover:bg-white/5 hover:text-white lg:hidden"
        >
          ×
        </button>
      </div>

      <div className="relative mt-6">
        <button
          type="button"
          onClick={() => setWorkspaceOpen((open) => !open)}
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:bg-white/[0.05]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
              Workspace
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              {workspace}
            </p>
          </div>

          <span className="text-xs text-zinc-500">
            {workspaceOpen ? "▲" : "▼"}
          </span>
        </button>

        {workspaceOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#111513] shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setWorkspace("Atlas Demo");
                setWorkspaceOpen(false);
              }}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05]"
            >
              <span>
                <span className="block text-white">Atlas Demo</span>
                <span className="mt-0.5 block text-xs text-zinc-600">
                  Sample demonstration data
                </span>
              </span>

              {workspace === "Atlas Demo" && (
                <span className="text-emerald-400">✓</span>
              )}
            </button>

            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-between border-t border-white/10 px-4 py-3 text-left text-sm text-zinc-600"
            >
              <span>
                <span className="block">Personal workspace</span>
                <span className="mt-0.5 block text-xs">
                  Coming soon
                </span>
              </span>
            </button>
          </div>
        )}
      </div>

      <nav className="mt-8 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`block rounded-xl px-4 py-3 text-sm transition ${
              isActive(item.href)
                ? "bg-emerald-400 font-semibold text-black"
                : "text-zinc-500 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

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
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
        className="fixed left-4 top-4 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#101412]/95 text-xl text-white shadow-xl backdrop-blur-md lg:hidden"
      >
        ☰
      </button>

      {/* Mobile dark overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Mobile slide-out menu */}
      <aside
        className={`fixed inset-y-0 left-0 z-[90] flex w-[86%] max-w-80 flex-col border-r border-white/10 bg-[#080b0a] px-6 py-7 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r border-white/10 bg-[#080b0a] px-6 py-8 lg:flex">
        {sidebarContent}
      </aside>
    </>
  );
}