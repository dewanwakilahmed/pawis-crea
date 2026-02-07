"use client";
import React, { FC, useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";

// CSS
import "@/styles/header.css";

// Icons
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// Component
import CompanyLogo from "@/components/CompanyLogo";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const t = useTranslations("Header.nav");
  const tLang = useTranslations("Header.lang");
  const tCommon = useTranslations("Common");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { key: "home", href: "/" },
    { key: "about", href: "/about-us" },
    { key: "portfolio", href: "/portfolio" },
    { key: "contact", href: "/contact-us" },
  ];

  const otherLocale = currentLocale === "en" ? "es" : "en";

  const switchLang = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <nav className="nav nav--left">
          <ul className="nav-links">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="company-logo-container">
          <CompanyLogo position="header" />
          <span className="header-tagline" aria-hidden="true">
            {tCommon("companySlogan")}
          </span>
        </div>

        <nav className="nav nav--right">
          <ul className="nav-links">
            {navItems.slice(2).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-btns">
          <button
            onClick={() => switchLang(otherLocale)}
            className="switch-lang-btn"
            aria-label={`Switch to ${tLang(`${otherLocale}_long`)}`}
          >
            {tLang(`${otherLocale}_long`)}
          </button>
          <Link href="tel:+50768560871" className="book-a-session-header-btn">
            {t("book_a_session")}
          </Link>
          <button
            onClick={() => switchLang(otherLocale)}
            className="switch-lang-mobile-btn"
            aria-label={`Switch to ${tLang(`${otherLocale}_short`)}`}
          >
            {tLang(`${otherLocale}_short`)}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="mobile-nav-toggle-btn"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <RiCloseFill className="mobile-nav-icon" />
            ) : (
              <RiMenu3Fill className="mobile-nav-icon" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <>
            <div
              className="mobile-nav-overlay"
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />
            <nav className="mobile-nav">
              <div className="mobile-nav-divider" />
              <ul className="mobile-nav-links">
                {navItems.map((item, index) => (
                  <li
                    key={item.href}
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <Link
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={toggleMobileMenu}
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
                <li
                  onClick={toggleMobileMenu}
                  style={{ animationDelay: "0.3s" }}
                >
                  <Link
                    href="tel:+50768560871"
                    className="book-a-session-header-mobile-nav-btn"
                  >
                    {t("book_a_session")}
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
