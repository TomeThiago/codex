import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition disabled:opacity-50",
        "bg-[var(--brand-primary)] text-white hover:opacity-90",
        className,
      )}
    >
      {children}
    </button>
  );
}
