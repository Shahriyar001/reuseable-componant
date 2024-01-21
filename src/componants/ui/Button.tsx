import { twMerge } from "tailwind-merge";
import {} from "clsx";
import { clsx } from "clsx";

// `bg-red-500 px-3 py-2 rounded-md ${className} ${
//     variant === "outline"
//       ? "border border-purple-500 bg-opacity-10"
//       : ""
//   }`

const Button = ({ className, outline }) => {
  return (
    <div>
      <button
        className={twMerge(
          clsx(
            "bg-red-500 px-3 py-2 rounded-md",
            {
              "border border-purple-500 bg-opacity-10": outline,
            },
            className
          )
        )}
      >
        Click
      </button>
    </div>
  );
};

export default Button;
