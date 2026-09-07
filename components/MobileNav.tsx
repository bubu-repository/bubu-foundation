"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/directory", label: "Directory" },
  { href: "/collaborate", label: "Collaborate" },
];

export function MobileNav({ signedIn }: { signedIn: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle menu"
        className="ring-focus press flex h-10 w-10 items-center justify-center rounded-full border border-line"
      >
        <span className="relative block h-3 w-4">
          <span
            className={cn(
              "absolute left-0 top-0 h-[1.5px] w-4 bg-ink transition-transform duration-200",
              open && "translate-y-[5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "absolute left-0 bottom-0 h-[1.5px] w-4 bg-ink transition-transform duration-200",
              open && "-translate-y-[5px] -rotate-45"
            )}
          />
        </span>
      </button>

      {open ? (
        <div className="glass rise absolute inset-x-4 top-16 z-40 rounded-card p-4">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="ring-focus rounded-input px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={signedIn ? "/profile/edit" : "/join"}
              onClick={() => setOpen(false)}
              className="ring-focus mt-1 rounded-input bg-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              {signedIn ? "My profile" : "Join"}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
