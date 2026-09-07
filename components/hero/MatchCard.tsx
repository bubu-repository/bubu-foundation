import { Avatar } from "@/components/ui/Avatar";
import { SEED_CATEGORIES, SEED_PROFILES } from "@/lib/seed-source";

const strategyCategoryId = SEED_CATEGORIES[0].id;
const people = SEED_PROFILES.filter((p) => p.expertise_category_id === strategyCategoryId);

export function MatchCard() {
  return (
    <div className="flex w-60 flex-col gap-2.5 p-4">
      <div className="flex -space-x-2.5">
        {people.map((p) => (
          <Avatar
            key={p.id}
            name={p.full_name}
            src={p.avatar_url}
            size={30}
            className="ring-2 ring-white"
          />
        ))}
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-surface text-[10px] font-semibold text-grey-dark ring-2 ring-white">
          +10
        </div>
      </div>
      <p className="text-[13px] font-medium leading-snug text-ink">
        12 alumni in <span className="text-brand-deep">Strategy &amp; Planning</span>
      </p>
    </div>
  );
}
