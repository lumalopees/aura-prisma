"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  const baseStyles =
    "rounded-lg border border-neutral-200 bg-white p-6 transition-all duration-200";

  if (hover) {
    return (
      <motion.div
        className={`${baseStyles} ${className}`}
        whileHover={{
          y: -4,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          borderColor: "rgb(212 212 212)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}

