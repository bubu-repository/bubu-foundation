export function ContactChannelsCard() {
  return (
    <div className="w-48 p-3.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-grey">Reach out via</p>
      <div className="mt-2.5 flex gap-2">
        <span className="flex items-center gap-1.5 rounded-pill bg-surface px-3 py-1.5 text-[12px] font-medium text-grey-dark">
          LinkedIn
        </span>
        <span className="flex items-center gap-1.5 rounded-pill bg-surface px-3 py-1.5 text-[12px] font-medium text-grey-dark">
          WhatsApp
        </span>
      </div>
    </div>
  );
}
