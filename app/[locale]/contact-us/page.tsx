import React, { FC } from "react";
import { setRequestLocale } from "next-intl/server";

// Sections
import ContactUsHero from "@/components/contact-us/ContactUsHero";
import ContactUsForm from "@/components/contact-us/ContactUsForm";

interface ContactUsPageProps {
  params: Promise<{ locale: string }>;
}

const ContactUsPage: FC<ContactUsPageProps> = async ({ params }) => {
  // Next.js 16: params is now async, must await
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="contact-us-page">
      <ContactUsHero />
      {/* <ContactUsForm /> */}
    </main>
  );
};

export default ContactUsPage;
