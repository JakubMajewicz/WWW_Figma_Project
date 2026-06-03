import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils"; // Nasza funkcja do łączenia klas

// 1. Definiujemy warianty przycisku używając CVA (Standard branżowy)
const buttonVariants = cva(
  // BAZA: Te klasy (z Twojego starego .btn) będą zawsze obecne
  "w-fit inline-block rounded-sm font-bold py-4 px-8 transition",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:opacity-90",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost:
          "bg-transparent text-black hover:text-dark underline underline-offset-8",
      },

      size: {
        default: "py-4 px-16 text-base", // Twoje rozmiary z CSS
        sm: "py-2 px-4 text-sm",
        lg: "py-6 px-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// 2. Definiujemy kontrakt (TypeScript)
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3. Właściwy komponent
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        // Używamy funkcji cn(), żeby połączyć bazę, warianty i ewentualne dodatkowe klasy
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
