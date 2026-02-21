import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  [key: string]: any;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-display font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-(--artigo227-blue) text-white hover:bg-(--artigo227-blue-hover) shadow-hard hover:shadow-hard-hover clip-triangle-btn",
    secondary:
      "bg-(--artigo227-yellow) text-white hover:bg-(--artigo227-yellow-hover) shadow-hard hover:shadow-hard-hover clip-triangle-btn",
    outline:
      "border-2 border-(--artigo227-blue) text-(--artigo227-blue) hover:bg-(--artigo227-blue) hover:text-white transition-colors",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  if (props.href) {
    return (
      <a
        href={props.href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
