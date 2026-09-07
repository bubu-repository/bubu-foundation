import Link from "next/link";
import { BubuFoundationLogo } from "@/components/BubuFoundationLogo";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/Button";
import { supabaseServer } from "@/lib/supabase/server";

export default async function Header() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = supabase ? await supabase.auth.getUser() : { data: { user: null } };

  return (
    <header className="sticky top-0 z-30 border-b border-line-lt/60 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <BubuFoundationLogo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/directory" className="ring-focus text-sm font-medium text-ink hover:text-brand-deep">
            Directory
          </Link>
          <Link href="/collaborate" className="ring-focus text-sm font-medium text-ink hover:text-brand-deep">
            Collaborate
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href={user ? "/profile/edit" : "/join"} size="sm">
            {user ? "My profile" : "Join the network"}
          </Button>
        </div>

        <MobileNav signedIn={Boolean(user)} />
      </div>
    </header>
  );
}
