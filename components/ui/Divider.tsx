interface DividerProps {
  variant?: "solid" | "dashed" | "dotted";
  color?: "light" | "medium" | "dark";
  className?: string;
}

export default function Divider({
  variant = "solid",
  color = "light",
  className = "",
}: DividerProps) {
  const variants = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  const colors = {
    light: "border-neutral-200",
    medium: "border-neutral-300",
    dark: "border-neutral-400",
  };

  return (
    <hr
      className={`border-t ${variants[variant]} ${colors[color]} ${className}`}
    />
  );
}

