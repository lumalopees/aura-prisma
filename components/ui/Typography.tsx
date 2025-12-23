import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  italic?: boolean;
  center?: boolean;
}

export function Heading({
  children,
  level = 2,
  className = "",
  italic = false,
  center = false,
}: HeadingProps) {
  const baseStyles = `font-display font-bold text-neutral-900 ${
    italic ? "italic" : ""
  } ${center ? "text-center" : ""}`;

  const sizes = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl lg:text-5xl",
    3: "text-2xl sm:text-3xl lg:text-4xl",
    4: "text-xl sm:text-2xl lg:text-3xl",
    5: "text-lg sm:text-xl lg:text-2xl",
    6: "text-base sm:text-lg lg:text-xl",
  };

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component className={`${baseStyles} ${sizes[level]} ${className}`}>
      {children}
    </Component>
  );
}

interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "default" | "muted" | "primary";
  className?: string;
  center?: boolean;
  as?: "p" | "span" | "div";
}

export function Text({
  children,
  size = "md",
  color = "default",
  className = "",
  center = false,
  as: Component = "p",
}: TextProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
  };

  const colors = {
    default: "text-neutral-900",
    muted: "text-neutral-600",
    primary: "text-primary-600",
  };

  return (
    <Component
      className={`${sizes[size]} ${colors[color]} ${center ? "text-center" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}

