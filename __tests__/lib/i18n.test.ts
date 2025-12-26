import messages from "@/lib/i18n/messages";
import { locales } from "@/lib/i18n/config";

describe("i18n", () => {
  it("has messages for all locales", () => {
    locales.forEach((locale) => {
      expect(messages[locale]).toBeDefined();
      expect(messages[locale]?.nav).toBeDefined();
      expect(messages[locale]?.hero).toBeDefined();
      expect(messages[locale]?.common).toBeDefined();
    });
  });

  it("has all required translation keys", () => {
    const requiredKeys: Array<keyof typeof messages["pt-BR"]> = ["nav", "hero", "common"];
    locales.forEach((locale) => {
      requiredKeys.forEach((key) => {
        expect(messages[locale]?.[key]).toBeDefined();
      });
    });
  });
});

