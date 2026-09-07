import { ErrorText } from "@/components/ui/ErrorText";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      {hint ? <p className="mt-1 text-xs text-grey">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      <ErrorText>{error}</ErrorText>
    </div>
  );
}

export const inputClasses =
  "ring-focus w-full rounded-input border border-line bg-card px-4 py-2.5 text-sm text-ink placeholder:text-grey-lt focus:border-ink transition-colors duration-150";
