import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line-lt/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/bubu-mark.png" alt="" width={22} height={22} className="h-[22px] w-[22px] opacity-80" />
          <span className="font-body text-sm text-grey">
            {SITE.name} · a movement by <span className="font-semibold text-grey-dark">BUBU.COM</span>
          </span>
        </div>
        <p className="max-w-sm font-body text-sm text-grey md:text-right">{SITE.tagline}</p>
      </div>
    </footer>
  );
}
