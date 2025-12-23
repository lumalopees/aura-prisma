"use client";

import Image from "next/image";
import { useState } from "react";
import Loading from "./Loading";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  objectFit = "cover",
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-neutral-100 ${className}`}
      >
        <span className="text-sm text-neutral-500">Imagem não disponível</span>
      </div>
    );
  }

  const imageProps = fill
    ? {
        fill: true,
        className: `object-${objectFit} ${className}`,
      }
    : {
        width,
        height,
        className: `${className}`,
      };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loading size="md" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...imageProps}
      />
    </div>
  );
}

