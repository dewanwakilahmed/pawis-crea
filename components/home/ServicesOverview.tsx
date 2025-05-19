import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
// CSS
import "@/styles/home/services-overview.css";

const ServicesOverview: FC = () => {
  const t_Section = useTranslations("Home.ServicesOverview");
  const t_Common = useTranslations("Common");

  const sectionHeading = t_Section("sectionHeading");
  const sectionDescription = t_Section("sectionDescription");
  const services = {
    weddingsQuinceañeras: {
      heading: t_Section("services.weddingsQuinceañeras.heading"),
      subheading: t_Section("services.weddingsQuinceañeras.subheading"),
      description: t_Section("services.weddingsQuinceañeras.description"),
    },
    musicArtistsBTS: {
      heading: t_Section("services.musicArtistsBTS.heading"),
      subheading: t_Section("services.musicArtistsBTS.subheading"),
      description: t_Section("services.musicArtistsBTS.description"),
    },
    eventsCorporateCoverage: {
      heading: t_Section("services.eventsCorporateCoverage.heading"),
      subheading: t_Section("services.eventsCorporateCoverage.subheading"),
      description: t_Section("services.eventsCorporateCoverage.description"),
    },
    personalFashionPortraits: {
      heading: t_Section("services.personalFashionPortraits.heading"),
      subheading: t_Section("services.personalFashionPortraits.subheading"),
      description: t_Section("services.personalFashionPortraits.description"),
    },
    brandStoryTellingGastronomy: {
      heading: t_Section("services.brandStoryTellingGastronomy.heading"),
      subheading: t_Section("services.brandStoryTellingGastronomy.subheading"),
      description: t_Section(
        "services.brandStoryTellingGastronomy.description"
      ),
    },
    childrenStudioPortraits: {
      heading: t_Section("services.childrenStudioPortraits.heading"),
      subheading: t_Section("services.childrenStudioPortraits.subheading"),
      description: t_Section("services.childrenStudioPortraits.description"),
    },
  };
  const exploreOurPortfolioBtn = t_Section("exploreOurPortfolioBtn");
  const bookASessionBtn = t_Common("bookASessionBtn");

  return (
    <section
      className="services-overview"
      aria-labelledby="services-overview-heading"
    >
      <div className="services-overview-container">
        <h2
          id="services-overview-heading"
          className="services-overview-heading"
        >
          {sectionHeading}
        </h2>

        <p className="services-overview-description">{sectionDescription}</p>

        <div className="services-overview-services"></div>
      </div>
    </section>
  );
};

export default ServicesOverview;
