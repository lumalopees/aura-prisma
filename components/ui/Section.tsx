import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  background?: "white" | "gray" | "dark" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Section({
  children,
  className = "",
  containerSize = "lg",
  background = "white",
  padding = "lg",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-neutral-50",
    dark: "bg-neutral-900",
    gradient: "bg-gradient-to-b from-neutral-50 to-white",
  };

  const paddings = {
    none: "",
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <section
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

