import React, { FC, memo } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "react-error-boundary";

// Component
import SectionErrorFallback from "@/components/SectionErrorFallback";

// CSS
import "@/styles/portfolio/about-pawis-crea.css";

interface UniqueSellingPoint {
  id: string;
  heading: string;
  description: string;
}

const UniqueSellingPointItem: FC<UniqueSellingPoint> = ({
  heading,
  description,
}) => (
  <li className="about-pawis-crea-usp">
    <h4 className="about-pawis-crea-usp-heading">{heading}</h4>
    <p className="about-pawis-crea-usp-description">{description}</p>
  </li>
);
UniqueSellingPointItem.displayName = "UniqueSellingPointItem";

const AboutPawisCrea: FC = memo(() => {
  const t = useTranslations("Home.aboutPawisCrea");

  const usps: UniqueSellingPoint[] = [
    {
      id: "expertise",
      heading: t("usps.expertise.heading"),
      description: t("usps.expertise.description"),
    },
    {
      id: "collaboration",
      heading: t("usps.collaboration.heading"),
      description: t("usps.collaboration.description"),
    },
    {
      id: "moments",
      heading: t("usps.moments.heading"),
      description: t("usps.moments.description"),
    },
    {
      id: "versatility",
      heading: t("usps.versatility.heading"),
      description: t("usps.versatility.description"),
    },
  ];

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
              <figure className="about-pawis-crea-figure">
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
                <figcaption className="about-pawis-crea-caption">
                  {t("imgCaption")}
                </figcaption>
              </figure>
            </div>

            <div className="about-pawis-crea-text-content">
              <h3 className="about-pawis-crea-slogan">{t("slogan")}</h3>

              <p className="about-pawis-crea-description">{t("description")}</p>

              {/* <ul
            className="about-pawis-crea-unique-selling-points"
            aria-label={t('uspAriaLabel')}
          >
            {usps.map((usp) => (
              <UniqueSellingPointItem
                key={usp.id}
                id={usp.id}
                heading={usp.heading}
                description={usp.description}
              />
            ))}
          </ul> */}

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
