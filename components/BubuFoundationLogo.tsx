import Image from "next/image";
import Link from "next/link";

export function BubuFoundationLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="ring-focus flex items-center gap-2.5" aria-label="Bubu Foundation home">
      <Image src="/bubu-mark.png" alt="" width={28} height={28} className="h-7 w-7" priority />
      <span className="flex items-baseline gap-1.5 font-display leading-none tracking-wide">
        <span className={dark ? "text-white" : "text-ink"}>BUBU</span>
        <span className="text-brand">FOUNDATION</span>
      </span>
    </Link>
  );
}
