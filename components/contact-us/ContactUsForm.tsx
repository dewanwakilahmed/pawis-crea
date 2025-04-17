"use client";

import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";

// CSS
import "@/styles/contact-us/contact-us-form.css";

const ContactUsForm: FC = () => {
  const t_ContactUsForm_ContactUs = useTranslations("ContactUs.ContactUsForm");
  const t_Fields_Form_ContactUsForm_ContactUs = useTranslations(
    "ContactUs.ContactUsForm.form.fields"
  );

  const { sectionHeading, formTitle, emailOrPhoneError, submitBtn } = {
    sectionHeading: t_ContactUsForm_ContactUs("sectionHeading"),
    formTitle: t_ContactUsForm_ContactUs("form.title"),
    emailOrPhoneError: t_ContactUsForm_ContactUs("form.emailOrPhoneError"),
    submitBtn: t_ContactUsForm_ContactUs("submitBtn"),
  };

  const {
    fullNameLabel,
    emailAdressLabel,
    phoneNumberLabel,
    messageLabel,
    messagePlaceholder,
  } = {
    fullNameLabel: t_Fields_Form_ContactUsForm_ContactUs("fullNameLabel"),
    emailAdressLabel: t_Fields_Form_ContactUsForm_ContactUs("emailAdressLabel"),
    phoneNumberLabel: t_Fields_Form_ContactUsForm_ContactUs("phoneNumberLabel"),
    messageLabel: t_Fields_Form_ContactUsForm_ContactUs("messageLabel"),
    messagePlaceholder:
      t_Fields_Form_ContactUsForm_ContactUs("messagePlaceholder"),
  };

  const [contactUsFormData, setContactUsFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const handleContactUsFormInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactUsFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const [error, setError] = useState<string | null>(null);

  const handleContactUsFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactUsFormData.emailAddress && !contactUsFormData.phoneNumber) {
      setError(`${emailOrPhoneError} 😄`);
      return;
    }

    console.log("Form submitted:", contactUsFormData);
  };

  return (
    <section
      className="contact-us-form"
      aria-labelledby="contact-us-form-heading"
    >
      <div className="contact-us-form-container">
        <h2 id="contact-us-form-heading" className="contact-us-form-heading">
          {sectionHeading}
        </h2>

        <form onSubmit={handleContactUsFormSubmit} className="contact-form">
          <p className="contact-form-title">{formTitle}</p>

          <div className="contact-form-group-full-name">
            <label htmlFor="fullName" className="contact-form-label-full-name">
              {fullNameLabel}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={contactUsFormData.fullName}
              onChange={handleContactUsFormInputChange}
              className="contact-form-input-full-name"
              autoComplete="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="contact-form-group-email-address">
            <label
              htmlFor="emailAddress"
              className="contact-form-label-email-address"
            >
              {emailAdressLabel}
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={contactUsFormData.emailAddress}
              onChange={handleContactUsFormInputChange}
              className="contact-form-input-email-address"
              autoComplete="email"
              placeholder="john.doe@gmail.com"
            />
          </div>

          <div className="contact-form-group-phone-number">
            <label
              htmlFor="phoneNumber"
              className="contact-form-label-phone-number"
            >
              {phoneNumberLabel}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={contactUsFormData.phoneNumber}
              onChange={handleContactUsFormInputChange}
              className="contact-form-input-phone-number"
              autoComplete="tel"
              placeholder="+507 6123-4567"
            />
          </div>

          <div className="contact-form-group-message">
            <label htmlFor="message" className="contact-form-label-message">
              {messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={contactUsFormData.message}
              onChange={handleContactUsFormInputChange}
              required
              className="contact-form-textarea-message"
              placeholder={messagePlaceholder}
              rows={5}
              autoComplete="off"
            ></textarea>
          </div>

          <button type="submit" className="contact-form-submit-btn">
            {submitBtn}
          </button>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

ContactUsForm.displayName = "ContactUsForm";

export default ContactUsForm;
