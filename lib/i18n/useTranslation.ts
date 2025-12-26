"use client";

import { useParams } from "next/navigation";
import { Locale, defaultLocale } from "./config";
import messages from "./messages";

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as Locale) || defaultLocale;
  const t = messages[locale] || messages[defaultLocale];

  return { t, locale };
}

