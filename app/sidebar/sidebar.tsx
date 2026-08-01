"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWorkspace } from "../WorkspaceContext";
const navigation = [
  { label: "Dashboard", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Properties", href: "/properties" },
  { label: "Tenants", href: "/tenants" },
  { label: "Builder", href: "/builder" },
  { label: "Development", href: "/development" },
];

export default function Sidebar() {
 const pathname = usePathname();
const [workspaceOpen, setWorkspaceOpen] = useState(false);
const { workspace, setWorkspace } = useWorkspace();
  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/10 bg-[#080b0a] px-6 py-8 lg:block">
      <div className="flex justify-center">
        <Image
          src="/atlas-logo-v3.png"
          alt="Atlas"
          width={240}
          height={120}
          priority
          unoptimized
          className="h-auto w-[220px] object-contain"
        />
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

    <span className="text-zinc-500">
      {workspaceOpen ? "▲" : "▼"}
    </span>
  </button>

  {workspaceOpen && (
    <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#111513] shadow-2xl">
      <button
        type="button"
        onClick={() => {
          setWorkspace("Mason");
          setWorkspaceOpen(false);
        }}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05]"
      >
        <span>Mason</span>
        {workspace === "Mason" && (
          <span className="text-emerald-400">✓</span>
        )}
      </button>

      <button
        type="button"
        onClick={() => {
          setWorkspace("Atlas Demo");
          setWorkspaceOpen(false);
        }}
        className="flex w-full items-center justify-between border-t border-white/10 px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05]"
      >
        <span>Atlas Demo</span>
        {workspace === "Atlas Demo" && (
          <span className="text-emerald-400">✓</span>
        )}
      </button>
    </div>
  )}
</div>
      <nav className="mt-8 space-y-2">
        {navigation.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-emerald-400 font-semibold text-black"
                  : "text-zinc-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          Atlas status
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-sm text-zinc-300">
            Portfolio healthy
          </span>
        </div>
      </div>
    </aside>
  );
}