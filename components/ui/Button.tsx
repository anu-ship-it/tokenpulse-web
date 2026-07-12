import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "warn";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  loading?: boolean;
}

const variants = {
  primary:
    "bg-[#6C5FFF] text-white hover:bg-[#7D71FF] hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(108,95,255,0.3)]",
  secondary:
    "bg-[#141418] text-[#EDEEF2] border border-white/8 hover:border-[rgba(108,95,255,0.22)] hover:text-white",
  ghost: "text-[#72728A] hover:text-[#EDEEF2]",
  warn: "bg-[rgba(245,158,11,0.12)] text-[#F59E0B] border border-[rgba(245,158,11,0.3)] hover:bg-[rgba(245,158,11,0.2)]",
};

const sizes = {
  sm: "text-xs px-3 py-1.5 rounded-md",
  md: "text-sm px-5 py-2.5 rounded-lg",
  lg: "text-[15px] px-6 py-3.5 rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      loading,
      children,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const cls = clsx(
      "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-150 cursor-pointer",
      variants[variant],
      sizes[size],
      (disabled || loading) &&
        "opacity-50 cursor-not-allowed pointer-events-none",
      className,
    );

    if (href) {
      if (external)
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cls}
          >
            {loading ? <Spinner /> : children}
          </a>
        );
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cls}
        {...props}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  },
);

Button.displayName = "Button";

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default Button;
