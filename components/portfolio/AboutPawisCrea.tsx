import React, { FC, memo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "react-error-boundary";

// Component
import SectionErrorFallback from "@/components/SectionErrorFallback";

// CSS
import "@/styles/portfolio/about-pawis-crea.css";

const AboutPawisCrea: FC = memo(() => {
  const t = useTranslations("Home.aboutPawisCrea");

  return (
    <ErrorBoundary FallbackComponent={SectionErrorFallback}>
      <section
        className="about-pawis-crea"
        aria-labelledby="about-pawis-crea-heading"
      >
        <div className="about-pawis-crea-container">
          <h2
            id="about-pawis-crea-heading"
            className="about-pawis-crea-heading"
          >
            {t("sectionHeading")}
          </h2>

          <div className="about-pawis-crea-content">
            <div className="about-pawis-crea-img-content">
              <Image
                src="/images/about-pawis-crea.jpg"
                width={1280}
                height={853}
                alt={t("imgAltText")}
                className="about-pawis-crea-img"
                sizes="(max-width: 768px) 100vw, 50vw"
                aria-describedby="about-pawis-crea-description"
                priority
                placeholder="blur"
                blurDataURL="/images/about-pawis-crea.jpg"
              />
            </div>

            <div className="about-pawis-crea-text-content">
              <h3 className="about-pawis-crea-slogan">{t("slogan")}</h3>

              <p className="about-pawis-crea-description">{t("description")}</p>

              <a
                href="tel:+15551234567"
                className="about-pawis-crea-book-session-btn"
              >
                {t("bookSessionBtn")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
});
AboutPawisCrea.displayName = "AboutPawisCrea";

export default AboutPawisCrea;
