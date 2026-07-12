import { forwardRef, type InputHTMLAttributes } from "react";
import { clsx } from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        "w-full px-4 py-3 rounded-lg text-sm font-sans",
        "bg-[#141418] text-[#EDEEF2] placeholder-[#32324A]",
        "border transition-colors outline-none",
        error
          ? "border-[#EF4444] focus:border-[#EF4444]"
          : "border-white/8 focus:border-[rgba(108,95,255,0.4)]",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
export default Input;
