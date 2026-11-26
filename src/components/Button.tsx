import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark";

const styles: Record<Variant, string> = {
  primary: "bg-flame text-ink-strong hover:bg-[#ff7a33]",
  secondary: "border-2 border-deep text-deep hover:bg-deep hover:text-ivory",
  onDark: "border-2 border-ivory text-ivory hover:bg-ivory hover:text-deep",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
}) {
  const cls = `inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-base font-bold transition-colors ${styles[variant]}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
