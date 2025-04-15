import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/contact-us/contact-us-form.css";

const ContactUsForm: FC = () => {
  return <div className="contact-us-form"></div>;
};

ContactUsForm.displayName = "ContactUsForm";

export default ContactUsForm;
