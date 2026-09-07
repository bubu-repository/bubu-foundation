"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Field, inputClasses } from "@/components/ui/Field";
import { ErrorText } from "@/components/ui/ErrorText";
import { createOpportunity, type CreateOpportunityState } from "@/app/collaborate/new/actions";
import { OPPORTUNITY_CATEGORIES } from "@/lib/constants";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="press ring-focus w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-deep disabled:pointer-events-none disabled:opacity-50"
    >
      {pending ? "Posting…" : "Post opportunity"}
    </button>
  );
}

const initialState: CreateOpportunityState = {
  errors: {},
  values: { title: "", category: "", description: "", looking_for: "" },
};

export function OpportunityForm() {
  const [state, formAction] = useActionState(createOpportunity, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <Field label="Title" htmlFor="title" error={state.errors.title}>
        <input
          id="title"
          name="title"
          defaultValue={state.values.title}
          placeholder="e.g. Seeking co-founder for a research studio"
          className={inputClasses}
          required
        />
      </Field>

      <Field label="Category" htmlFor="category" error={state.errors.category}>
        <select id="category" name="category" defaultValue={state.values.category} className={inputClasses} required>
          <option value="" disabled>
            Choose a category
          </option>
          {OPPORTUNITY_CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Description" htmlFor="description" error={state.errors.description}>
        <textarea
          id="description"
          name="description"
          rows={4}
          defaultValue={state.values.description}
          className={inputClasses}
          required
        />
      </Field>

      <Field label="Looking for" htmlFor="looking_for" hint="Optional — who or what would help.">
        <input
          id="looking_for"
          name="looking_for"
          defaultValue={state.values.looking_for}
          className={inputClasses}
        />
      </Field>

      <ErrorText>{state.errors.form}</ErrorText>

      <SubmitButton />
    </form>
  );
}
