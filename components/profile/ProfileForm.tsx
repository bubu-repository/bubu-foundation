"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Field, inputClasses } from "@/components/ui/Field";
import { ErrorText } from "@/components/ui/ErrorText";
import { upsertProfile, type UpsertProfileState } from "@/app/profile/edit/actions";
import type { ExpertiseCategory } from "@/lib/types";

const MAX_PORTFOLIO_LINKS = 4;

function SubmitButton({ isNew }: { isNew: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="press ring-focus w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-deep disabled:pointer-events-none disabled:opacity-50"
    >
      {pending ? "Saving…" : isNew ? "Create profile" : "Save changes"}
    </button>
  );
}

export function ProfileForm({
  categories,
  initialValues,
  isNew,
}: {
  categories: ExpertiseCategory[];
  initialValues: {
    full_name: string;
    expertise_category_id: string;
    years_experience: string;
    bio: string;
    avatar_url: string;
    linkedin_url: string;
    whatsapp_number: string;
    portfolio_links: string[];
  };
  isNew: boolean;
}) {
  const initialState: UpsertProfileState = { errors: {}, values: initialValues };
  const [state, formAction] = useActionState(upsertProfile, initialState);
  const [links, setLinks] = useState<string[]>(
    state.values.portfolio_links.length > 0 ? state.values.portfolio_links : [""]
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <Field label="Full name" htmlFor="full_name" error={state.errors.full_name}>
        <input
          id="full_name"
          name="full_name"
          defaultValue={state.values.full_name}
          className={inputClasses}
          required
        />
      </Field>

      <Field label="Expertise" htmlFor="expertise_category_id" error={state.errors.expertise_category_id}>
        <select
          id="expertise_category_id"
          name="expertise_category_id"
          defaultValue={state.values.expertise_category_id}
          className={inputClasses}
          required
        >
          <option value="" disabled>
            Choose a category
          </option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Years of experience" htmlFor="years_experience" error={state.errors.years_experience}>
        <input
          id="years_experience"
          name="years_experience"
          type="number"
          min={0}
          max={60}
          defaultValue={state.values.years_experience}
          className={inputClasses}
          required
        />
      </Field>

      <Field
        label="Bio"
        htmlFor="bio"
        hint="A few sentences on what you did at BUBU and what you do now."
        error={state.errors.bio}
      >
        <textarea
          id="bio"
          name="bio"
          rows={4}
          defaultValue={state.values.bio}
          className={inputClasses}
        />
      </Field>

      <Field label="Photo URL" htmlFor="avatar_url" hint="Optional — link to a photo of you." error={state.errors.avatar_url}>
        <input
          id="avatar_url"
          name="avatar_url"
          type="url"
          defaultValue={state.values.avatar_url}
          placeholder="https://…"
          className={inputClasses}
        />
      </Field>

      <Field label="LinkedIn URL" htmlFor="linkedin_url" error={state.errors.linkedin_url}>
        <input
          id="linkedin_url"
          name="linkedin_url"
          type="url"
          defaultValue={state.values.linkedin_url}
          placeholder="https://linkedin.com/in/…"
          className={inputClasses}
        />
      </Field>

      <Field label="WhatsApp number" htmlFor="whatsapp_number" hint="Include country code, e.g. +62…">
        <input
          id="whatsapp_number"
          name="whatsapp_number"
          defaultValue={state.values.whatsapp_number}
          placeholder="+62…"
          className={inputClasses}
        />
      </Field>

      <div>
        <label className="block text-sm font-semibold text-ink">Portfolio links</label>
        <p className="mt-1 text-xs text-grey">Up to {MAX_PORTFOLIO_LINKS} links to your work.</p>
        <div className="mt-2 flex flex-col gap-2">
          {links.map((link, i) => (
            <input
              key={i}
              name="portfolio_links"
              type="url"
              defaultValue={link}
              placeholder="https://…"
              className={inputClasses}
            />
          ))}
        </div>
        <ErrorText>{state.errors.portfolio_links}</ErrorText>
        {links.length < MAX_PORTFOLIO_LINKS ? (
          <button
            type="button"
            onClick={() => setLinks((l) => [...l, ""])}
            className="ring-focus mt-2 text-xs font-semibold text-brand-deep hover:underline"
          >
            + Add another link
          </button>
        ) : null}
      </div>

      <ErrorText>{state.errors.form}</ErrorText>

      <SubmitButton isNew={isNew} />
    </form>
  );
}
