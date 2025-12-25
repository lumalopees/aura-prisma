"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  asLink = false,
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900",
    secondary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600",
    outline:
      "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-neutral-900",
    ghost:
      "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );

  if (asLink && href) {
    return (
      <Link href={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  // Se não for link mas tiver href, usar Link do Next.js
  if (href && !asLink) {
    return (
      <Link href={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

