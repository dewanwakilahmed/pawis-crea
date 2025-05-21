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
  const services = [
    {
      key: "weddingsQuinceañeras",
      heading: t_Section("services.weddingsQuinceañeras.heading"),
      subheading: t_Section("services.weddingsQuinceañeras.subheading"),
      description: t_Section("services.weddingsQuinceañeras.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-1.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-2.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-3.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/weddings-quinceañeras/weddings-quinceañeras-4.jpg",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img4Description"
          ),
        },
      ],
    },
    {
      key: "musicArtistsBTS",
      heading: t_Section("services.musicArtistsBTS.heading"),
      subheading: t_Section("services.musicArtistsBTS.subheading"),
      description: t_Section("services.musicArtistsBTS.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-1.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img1Description"),
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-2.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img2Description"),
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-3.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img3Description"),
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-4.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img4Description"),
        },
      ],
    },
    {
      key: "eventsCorporateCoverage",
      heading: t_Section("services.eventsCorporateCoverage.heading"),
      subheading: t_Section("services.eventsCorporateCoverage.subheading"),
      description: t_Section("services.eventsCorporateCoverage.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-1.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-2.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-3.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/events-corporate-coverage/events-corporate-coverage-4.jpg",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img4Description"
          ),
        },
      ],
    },
    {
      key: "personalFashionPortraits",
      heading: t_Section("services.personalFashionPortraits.heading"),
      subheading: t_Section("services.personalFashionPortraits.subheading"),
      description: t_Section("services.personalFashionPortraits.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-1.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-2.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-3.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/personal-fashion-portraits/personal-fashion-portraits-4.jpg",
          alt: t_Section(
            "services.personalFashionPortraits.images.img4Description"
          ),
        },
      ],
    },
    {
      key: "brandStoryTellingGastronomy",
      heading: t_Section("services.brandStoryTellingGastronomy.heading"),
      subheading: t_Section("services.brandStoryTellingGastronomy.subheading"),
      description: t_Section(
        "services.brandStoryTellingGastronomy.description"
      ),
      images: [
        {
          src: "/images/sections-img/services-overview/brand-storytelling-gastronomy/brand-storytelling-gastronomy-1.jpg",
          alt: t_Section(
            "services.brandStoryTellingGastronomy.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/brand-storytelling-gastronomy/brand-storytelling-gastronomy-2.jpg",
          alt: t_Section(
            "services.brandStoryTellingGastronomy.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/brand-storytelling-gastronomy/brand-storytelling-gastronomy-3.jpg",
          alt: t_Section(
            "services.brandStoryTellingGastronomy.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/brand-storytelling-gastronomy/brand-storytelling-gastronomy-4.jpg",
          alt: t_Section(
            "services.brandStoryTellingGastronomy.images.img4Description"
          ),
        },
      ],
    },
    {
      key: "childrenStudioPortraits",
      heading: t_Section("services.childrenStudioPortraits.heading"),
      subheading: t_Section("services.childrenStudioPortraits.subheading"),
      description: t_Section("services.childrenStudioPortraits.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-1.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-2.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-3.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/children-studio-portraits/children-studio-portraits-4.jpg",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img4Description"
          ),
        },
      ],
    },
  ];
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
