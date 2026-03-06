import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        {
          primary: "bg-blue-600 text-white hover:bg-blue-700",
          outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
          ghost: "text-blue-600 hover:bg-blue-50",
        }[variant],
        {
          sm: "h-8 px-3 text-sm",
          md: "h-10 px-5 text-sm",
          lg: "h-12 px-7 text-base",
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
