import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-dark hover:bg-gold-dark shadow-sm shadow-gold/20",
  secondary:
    "bg-navy text-white hover:bg-navy-dark",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap";

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
