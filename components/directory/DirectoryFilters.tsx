"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import { cn } from "@/lib/cn";
import type { ExpertiseCategory } from "@/lib/types";

export function DirectoryFilters({ categories }: { categories: ExpertiseCategory[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const activeCategory = searchParams.get("category") ?? "";
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  function pushParams(next: { category?: string; q?: string }) {
    const params = new URLSearchParams(searchParams.toString());
    const category = next.category ?? activeCategory;
    const q = next.q ?? query;

    if (category) params.set("category", category);
    else params.delete("category");

    if (q) params.set("q", q);
    else params.delete("q");

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <div className="mb-10 flex flex-col gap-5">
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          pushParams({ q: e.target.value });
        }}
        placeholder="Search by name or bio…"
        aria-label="Search alumni"
        className="ring-focus w-full max-w-sm rounded-input border border-line bg-card px-4 py-2.5 text-sm text-ink placeholder:text-grey-lt focus:border-ink"
      />

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => pushParams({ category: "" })}
          className={cn(
            "ring-focus press rounded-pill px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150",
            activeCategory === "" ? "bg-ink text-white" : "bg-surface text-grey-dark hover:bg-line-lt"
          )}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => pushParams({ category: c.slug })}
            className={cn(
              "ring-focus press rounded-pill px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150",
              activeCategory === c.slug ? "bg-ink text-white" : "bg-surface text-grey-dark hover:bg-line-lt"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
