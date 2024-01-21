import { twMerge } from "tailwind-merge";
import {} from "clsx";
import { clsx } from "clsx";
import cn from "../../utils/cn";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type Tref = HTMLButtonElement;

type TVariant = "solid" | "ghost" | "outline";

type TButtonOption = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOption;

const Button = forwardRef<Tref, TButton>(
  ({ className, variant = "solid", ...rest }, ref) => {
    const getVariant = (variant: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn-solid";
      }
    };
    return (
      <div>
        <button
          {...rest}
          ref={ref}
          className={cn(getVariant(variant), className)}
        >
          Click
        </button>
      </div>
    );
  }
);

export default Button;
