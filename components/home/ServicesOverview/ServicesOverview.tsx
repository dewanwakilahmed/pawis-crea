import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/services-overview.css";

// Components
import EmblaCarousel from "./EmblaCarousel";

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
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-1.png",
          alt: t_Section("services.musicArtistsBTS.images.img1Description"),
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-2.jpg",
          alt: t_Section("services.musicArtistsBTS.images.img2Description"),
        },
        {
          src: "/images/sections-img/services-overview/music-artists-bts/music-artists-bts-3.png",
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
      key: "brandStoryGastronomy",
      heading: t_Section("services.brandStoryGastronomy.heading"),
      subheading: t_Section("services.brandStoryGastronomy.subheading"),
      description: t_Section("services.brandStoryGastronomy.description"),
      images: [
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-1.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img1Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-2.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img2Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-3.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img3Description"
          ),
        },
        {
          src: "/images/sections-img/services-overview/brand-story-gastronomy/brand-story-gastronomy-4.jpg",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img4Description"
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
        <div className="services-overview-services">
          {services.map((service) => (
            <div
              key={service.key}
              className="service-item"
              aria-labelledby={`${service.key}-heading`}
            >
              <EmblaCarousel
                slides={[0, 1, 2, 3]}
                options={{ loop: true, containScroll: false }}
                images={service.images}
              />
              <div className="service-text">
                <h3 id={`${service.key}-heading`} className="service-heading">
                  {service.heading}
                </h3>
                <p className="service-subheading">{service.subheading}</p>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
