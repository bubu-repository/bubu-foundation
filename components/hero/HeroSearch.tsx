"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    router.push(`/directory${params}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass ring-focus mx-auto flex max-w-xl items-center gap-2 rounded-pill p-2 pl-6 shadow-sm"
    >
      <div className="min-w-0 flex-1 text-left">
        <label htmlFor="hero-search" className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
          Expertise
        </label>
        <input
          id="hero-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Who or what are you looking for?"
          className="w-full bg-transparent text-sm text-ink placeholder:text-grey-lt focus:outline-none"
        />
      </div>
      <button
        type="submit"
        aria-label="Search the directory"
        className="press ring-focus flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-colors duration-150 hover:bg-brand-deep"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}
