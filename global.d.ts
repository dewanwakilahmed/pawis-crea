// next-intl v4 type augmentation
// Place this file in your project root

import en from "./messages/en.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof en;
    // If you have a Locale type, add it here:
    // Locale: 'en' | 'es';
  }
}
