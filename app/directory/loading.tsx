export default function DirectoryLoading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="h-4 w-40 animate-pulse rounded-full bg-surface" />
      <div className="mt-4 h-10 w-96 max-w-full animate-pulse rounded-full bg-surface" />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-card border border-line-lt bg-surface" />
        ))}
      </div>
    </div>
  );
}
