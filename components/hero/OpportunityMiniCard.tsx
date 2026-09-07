import { Pill } from "@/components/ui/Pill";

export function OpportunityMiniCard() {
  return (
    <div className="w-64 p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[13px] font-semibold leading-snug text-ink">
          Seeking co-founder — Culture Research Studio
        </p>
        <Pill tone="solid" className="shrink-0">
          Open
        </Pill>
      </div>
      <p className="mt-1.5 text-[12px] text-grey">Collaboration · Strategy &amp; Planning</p>
    </div>
  );
}
