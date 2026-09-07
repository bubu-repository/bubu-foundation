"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-28 text-center">
      <p className="font-display text-2xl tracking-wide text-ink">Something went wrong</p>
      <p className="mt-2 text-sm text-body">That&apos;s on us — try again in a moment.</p>
      <Button onClick={() => reset()} className="mt-6">
        Try again
      </Button>
    </div>
  );
}
