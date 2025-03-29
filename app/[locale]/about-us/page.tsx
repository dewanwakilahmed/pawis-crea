import React, { FC, use } from "react";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// Sections
import AboutUsHero from "@/components/about-us/AboutUsHero";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface AboutUsPageProps {
  params: Promise<{ locale: string }>;
}

const AboutUsPage: FC<AboutUsPageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <main className="about-us-page">
      <AboutUsHero />
    </main>
  );
};

export default AboutUsPage;
