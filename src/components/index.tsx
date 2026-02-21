export { Footer } from "./Footer";
export { Header } from "./Header";
export { Button } from "./Button";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
  const cardClass =
    "bg-white border border-gray-200 p-6 shadow-hard hover:shadow-hard-hover transition-all duration-300 hover:-translate-y-1";
  return <div className={cardClass}>{children}</div>;
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: "white" | "surface" | "primary" | "dark";
  py?: string;
}

export const Section = ({
  children,
  className = "",
  bg = "white",
  py = "py-20",
}: SectionProps) => {
  let bgClass = "bg-white";
  if (bg === "surface") bgClass = "bg-surface";
  if (bg === "primary") bgClass = "bg-primary text-white";
  if (bg === "dark") bgClass = "bg-text-main text-white";

  const sectionClass = `w-full ${bgClass} ${py} px-6 md:px-10 lg:px-20 ${className}`;
  return (
    <section className={sectionClass}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  label?: string;
  children?: ReactNode;
}

export const SectionHero = ({
  title,
  subtitle,
  label,
  children,
}: HeroProps) => {
  return (
    <div className="flex flex-col gap-6 max-w-3xl pt-20">
      {label && (
        <div className="flex items-center gap-3">
          <div className="h-1 w-12 bg-accent"></div>
          <span className="text-primary font-display font-bold uppercase tracking-widest text-sm">
            {label}
          </span>
        </div>
      )}
      <h1 className="text-5xl md:text-7xl font-display font-bold text-text-main leading-[0.9] tracking-tighter">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl md:text-2xl text-text-muted font-body leading-relaxed max-w-2xl border-l-4 border-accent pl-6 py-2">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};
