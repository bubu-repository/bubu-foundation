"use client";

import { useEffect, useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { SEED_PROFILES } from "@/lib/seed-source";

const NAMES = [SEED_PROFILES[0], SEED_PROFILES[2], SEED_PROFILES[7], SEED_PROFILES[10]];

export function AlumniJoinedCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % NAMES.length), 2600);
    return () => clearInterval(id);
  }, []);

  const person = NAMES[index];

  return (
    <div className="flex w-56 items-center gap-3 p-3.5">
      <Avatar name={person.full_name} src={person.avatar_url} size={36} />
      <p
        key={person.id}
        className="rise text-[13px] font-medium leading-snug text-ink"
        style={{ "--rise-delay": "0ms" } as React.CSSProperties}
      >
        {person.full_name.split(" ")[0]} joined{" "}
        <span className="text-brand" aria-hidden>
          ✔
        </span>
      </p>
    </div>
  );
}
