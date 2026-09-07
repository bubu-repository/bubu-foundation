import Link from "next/link";
import { cn } from "@/lib/cn";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className"
  >;

const base =
  "press ring-focus inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-deep",
  secondary: "bg-ink text-white hover:bg-grey-dark",
  ghost: "bg-transparent text-ink border border-line hover:border-ink",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<ButtonAsLink, keyof BaseProps>;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
