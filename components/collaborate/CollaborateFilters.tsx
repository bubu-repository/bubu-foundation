"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { OPPORTUNITY_CATEGORIES } from "@/lib/constants";

export function CollaborateFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";

  function setCategory(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("category", value);
    else params.delete("category");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="mb-10 flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => setCategory("")}
        className={cn(
          "ring-focus press rounded-pill px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150",
          activeCategory === "" ? "bg-ink text-white" : "bg-surface text-grey-dark hover:bg-line-lt"
        )}
      >
        All
      </button>
      {OPPORTUNITY_CATEGORIES.map((c) => (
        <button
          key={c.value}
          type="button"
          onClick={() => setCategory(c.value)}
          className={cn(
            "ring-focus press rounded-pill px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150",
            activeCategory === c.value ? "bg-ink text-white" : "bg-surface text-grey-dark hover:bg-line-lt"
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
