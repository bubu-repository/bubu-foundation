import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-28 text-center">
      <p className="font-display text-6xl tracking-wide text-brand">404</p>
      <h1 className="mt-4 font-display text-2xl tracking-wide text-ink">Nothing here yet</h1>
      <p className="mt-2 text-sm text-body">This page doesn&apos;t exist, or it moved.</p>
      <Button href="/" className="mt-6">
        Back home
      </Button>
    </div>
  );
}
