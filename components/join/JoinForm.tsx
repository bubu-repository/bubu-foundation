"use client";

import { useState } from "react";
import { isSupabaseConfigured, supabaseBrowser } from "@/lib/supabase/client";
import { isValidEmail } from "@/lib/validate";
import { Field, inputClasses } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { MissingSupabaseNotice } from "@/components/ui/MissingSupabaseNotice";

type Status = "idle" | "sending" | "sent" | "error";

export function JoinForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [status, setStatus] = useState<Status>("idle");

  if (!isSupabaseConfigured) {
    return (
      <MissingSupabaseNotice action="Registration needs a connected Supabase project — set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local to enable magic-link sign-in." />
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(undefined);
    setStatus("sending");

    const { error: authError } = await supabaseBrowser().auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=/profile/edit` },
    });

    setStatus(authError ? "error" : "sent");
  }

  if (status === "sent") {
    return (
      <div className="rise glass rounded-card p-8 text-center">
        <p className="font-display text-2xl tracking-wide text-ink">Check your inbox</p>
        <p className="mt-2 text-sm text-body">
          We sent a sign-in link to <span className="font-semibold text-ink">{email}</span>. Open it
          on this device to continue.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-card p-8">
      <Field label="Email address" htmlFor="join-email" error={error} hint="We'll send you a magic link — no password needed.">
        <input
          id="join-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClasses}
          autoComplete="email"
          required
        />
      </Field>

      {status === "error" ? (
        <p className="mt-3 text-xs text-brand-deep">Something went wrong sending the link. Try again.</p>
      ) : null}

      <Button type="submit" className="mt-6 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send magic link"}
      </Button>
    </form>
  );
}
