import Link from "next/link";

export function EmptyState({ basePath }: { basePath: string }) {
  return (
    <div className="rounded-card border border-dashed border-line px-6 py-16 text-center">
      <p className="font-display text-2xl tracking-wide text-ink">No open opportunities here yet</p>
      <p className="mx-auto mt-2 max-w-sm text-sm text-body">
        Try a different category, or be the first to post one.
      </p>
      <Link
        href={basePath}
        className="ring-focus mt-5 inline-block text-sm font-semibold text-brand-deep hover:underline"
      >
        Clear filters
      </Link>
    </div>
  );
}
