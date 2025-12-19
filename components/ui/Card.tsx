import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  const baseStyles =
    "rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-200";

  const hoverStyles = hover
    ? "hover:shadow-lg hover:border-neutral-300 hover:-translate-y-1"
    : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

