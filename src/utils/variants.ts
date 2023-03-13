import { tv } from "tailwind-variants";

export const BtnStyles = tv({
  base: "px-8 py-4 text-base rounded-[50px] font-semibold w-fit",
  variants: {
    color: {
      primary:
        "bg-[var(--clr-primary)] border-[var(--clr-primary)] hover:text-[var(--clr-bg)] hover:bg-[var(--clr-primary)] duration-300",
      secondary:
        "bg-[var(--clr-secondary)] border-[var(--clr-secondary)] hover:text-[var(--clr-bg)] hover:bg-[var(--clr-secondary)] duration-300",
      accent:
        "bg-[var(--clr-accent)] border-[var(--clr-accent)] hover:text-[var(--clr-bg)] hover:bg-[var(--clr-accent)] duration-300",
    },
    type: {
      fill: "text-[var(--clr-bg)]",
      outline: "bg-transparent border-2",
      underline: "bg-transparent border-b-2 rounded-none px-0 py-2",
      menu: "rounded-full px-4 text-xl hover:text-[var(--clr-base)]",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: "accent",
    type: "fill",
    size: "base",
  },
});
