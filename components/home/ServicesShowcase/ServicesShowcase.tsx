import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/services-showcase.css";

// Components
import EmblaCarousel from "./EmblaCarousel";

const ServicesShowcase: FC = () => {
  const t_Section = useTranslations("Home.ServicesShowcase");
  const t_Common = useTranslations("Common");

  const sectionTitle = t_Section("sectionTitle");
  const sectionIntro = t_Section("sectionIntro");
  const services = [
    {
      key: "weddingsQuinceañeras",
      name: t_Section("services.weddingsQuinceañeras.name"),
      tagline: t_Section("services.weddingsQuinceañeras.tagline"),
      summary: t_Section("services.weddingsQuinceañeras.summary"),
      images: [
        {
          src: "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-1.webp",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img1Description"
          ),
          objectPosition: {
            default: "50% 27.5%",
            xs: "50% 32.5%",
            sm: "50% 38.5%",
            md: "50% 30%",
            lg: "50% 55%",
            xl: "50% 60%",
            xxl: "50% 75%",
          },
          width: 1600,
          height: 2400,
        },
        {
          src: "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-2.webp",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img2Description"
          ),
          objectPosition: {
            default: "50% 10%",
            xs: "50% 10%",
            sm: "50% 15%",
            md: "50% 12.5%",
            lg: "50% 25%",
            xl: "50% 30%",
            xxl: "50% 35%",
          },
          width: 1600,
          height: 2400,
        },
        {
          src: "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-3.webp",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img3Description"
          ),
          objectPosition: {
            default: "50% 15%",
            xs: "50% 15%",
            sm: "50% 22.5%",
            md: "50% 20%",
            lg: "50% 35%",
            xl: "50% 37.5%",
            xxl: "50% 40%",
          },
          width: 1600,
          height: 2400,
        },
        {
          src: "/images/sections-img/services-showcase/weddings-quinceaneras/weddings-quinceaneras-4.webp",
          alt: t_Section(
            "services.weddingsQuinceañeras.images.img4Description"
          ),
          objectPosition: {
            default: "50% 20%",
            xs: "50% 27.5%",
            sm: "50% 27.5%",
            md: "50% 25%",
            lg: "50% 40%",
            xl: "50% 45%",
            xxl: "50% 50%",
          },
          width: 1600,
          height: 2400,
        },
      ],
    },
    {
      key: "musicArtistsBTS",
      name: t_Section("services.musicArtistsBTS.name"),
      tagline: t_Section("services.musicArtistsBTS.tagline"),
      summary: t_Section("services.musicArtistsBTS.summary"),
      images: [
        {
          src: "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-1.webp",
          alt: t_Section("services.musicArtistsBTS.images.img1Description"),
          objectPosition: {
            default: "50% 47.5%",
            xs: "50% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          width: 1179,
          height: 2087,
        },

        {
          src: "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-2.webp",
          alt: t_Section("services.musicArtistsBTS.images.img2Description"),
          objectPosition: {
            default: "50% 20%",
            xs: "50% 25%",
            sm: "50% 30%",
            md: "50% 25%",
            lg: "50% 40%",
            xl: "50% 40%",
            xxl: "50% 45%",
          },
          width: 1600,
          height: 2400,
        },
        {
          src: "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-3.webp",
          alt: t_Section("services.musicArtistsBTS.images.img3Description"),
          objectPosition: {
            default: "50% 50%",
            xs: "50% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          width: 1179,
          height: 2097,
        },
        {
          src: "/images/sections-img/services-showcase/music-artists-bts/music-artists-bts-4.webp",
          alt: t_Section("services.musicArtistsBTS.images.img4Description"),
          objectPosition: {
            default: "65% 20%",
            xs: "60% 50%",
            sm: "50% 50%",
            md: "50% 50%",
            lg: "55% 50%",
            xl: "60% 50%",
            xxl: "60% 50%",
          },
          width: 1600,
          height: 2400,
        },
      ],
    },
    {
      key: "eventsCorporateCoverage",
      name: t_Section("services.eventsCorporateCoverage.name"),
      tagline: t_Section("services.eventsCorporateCoverage.tagline"),
      summary: t_Section("services.eventsCorporateCoverage.summary"),
      images: [
        {
          src: "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-1.webp",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img1Description"
          ),
          objectPosition: {
            default: "50% 7.5%",
            xs: "50% 10%",
            sm: "50% 12.5%",
            md: "50% 10%",
            lg: "50% 12.5%",
            xl: "50% 15%",
            xxl: "50% 20%",
          },
          width: 4000,
          height: 6000,
        },
        {
          src: "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-2.webp",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img2Description"
          ),
          objectPosition: {
            default: "50% 10%",
            xs: "50% 12.5%",
            sm: "50% 12.5%",
            md: "50% 12.5%",
            lg: "50% 20%",
            xl: "50% 22.5%",
            xxl: "50% 25%",
          },
          width: 4000,
          height: 6000,
        },
        {
          src: "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-3.webp",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img3Description"
          ),
          objectPosition: {
            default: "50% 70%",
            xs: "50% 70%",
            sm: "50% 72.5%",
            md: "50% 75%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          width: 3072,
          height: 4096,
        },
        {
          src: "/images/sections-img/services-showcase/events-corporate-coverage/events-corporate-coverage-4.webp",
          alt: t_Section(
            "services.eventsCorporateCoverage.images.img4Description"
          ),
          objectPosition: {
            default: "50% 50%",
            xs: "25% 50%",
            sm: "40% 50%",
            md: "50% 50%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "40% 50%",
          },
          width: 6000,
          height: 4000,
        },
      ],
    },
    {
      key: "personalFashionPortraits",
      name: t_Section("services.personalFashionPortraits.name"),
      tagline: t_Section("services.personalFashionPortraits.tagline"),
      summary: t_Section("services.personalFashionPortraits.summary"),
      images: [
        {
          src: "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-1.webp",
          alt: t_Section(
            "services.personalFashionPortraits.images.img1Description"
          ),
          objectPosition: {
            default: "50% 40%",
            xs: "50% 40%",
            sm: "50% 45%",
            md: "50% 37.5%",
            lg: "50% 65%",
            xl: "50% 62.5%",
            xxl: "50% 55%",
          },
          width: 1080,
          height: 1619,
        },
        {
          src: "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-2.webp",
          alt: t_Section(
            "services.personalFashionPortraits.images.img2Description"
          ),
          objectPosition: {
            default: "50% 8.75%",
            xs: "50% 10%",
            sm: "50% 12.5%",
            md: "50% 11.25%",
            lg: "50% 20%",
            xl: "50% 20%",
            xxl: "50% 22.5%",
          },
          width: 1365,
          height: 2048,
        },
        {
          src: "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-3.webp",
          alt: t_Section(
            "services.personalFashionPortraits.images.img3Description"
          ),
          objectPosition: {
            default: "50% 35%",
            xs: "50% 45%",
            sm: "50% 52.5%",
            md: "50% 45%",
            lg: "50% 80%",
            xl: "50% 85%",
            xxl: "50% 90%",
          },
          width: 683,
          height: 1024,
        },
        {
          src: "/images/sections-img/services-showcase/personal-fashion-portraits/personal-fashion-portraits-4.webp",
          alt: t_Section(
            "services.personalFashionPortraits.images.img4Description"
          ),
          objectPosition: {
            default: "50% 2.5%",
            xs: "50% 5%",
            sm: "50% 10%",
            md: "50% 5%",
            lg: "50% 50%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          width: 1600,
          height: 1685,
        },
      ],
    },
    {
      key: "brandStoryGastronomy",
      name: t_Section("services.brandStoryGastronomy.name"),
      tagline: t_Section("services.brandStoryGastronomy.tagline"),
      summary: t_Section("services.brandStoryGastronomy.summary"),
      images: [
        {
          src: "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-1.webp",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img1Description"
          ),
          objectPosition: {
            default: "50% 97.5%",
            xs: "50% 95%",
            sm: "50% 95%",
            md: "50% 95%",
            lg: "50% 100%",
            xl: "50% 100%",
            xxl: "50% 100%",
          },
          width: 3024,
          height: 4032,
        },
        {
          src: "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-2.webp",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img2Description"
          ),
          objectPosition: {
            default: "50% 27.5%",
            xs: "50% 27.5%",
            sm: "50% 30%",
            md: "50% 32.5%",
            lg: "50% 45%",
            xl: "50% 50%",
            xxl: "50% 50%",
          },
          width: 4000,
          height: 6000,
        },
        {
          src: "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-3.webp",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img3Description"
          ),
          objectPosition: {
            default: "50% 50%",
            xs: "30% 50%",
            sm: "40% 50%",
            md: "40% 50%",
            lg: "50% 50%",
            xl: "50% 30%",
            xxl: "50% 50%",
          },
          width: 2400,
          height: 1600,
        },
        {
          src: "/images/sections-img/services-showcase/brand-story-gastronomy/brand-story-gastronomy-4.webp",
          alt: t_Section(
            "services.brandStoryGastronomy.images.img4Description"
          ),
          objectPosition: {
            default: "50% 37.5%",
            xs: "50% 52.5%",
            sm: "50% 60%",
            md: "50% 50%",
            lg: "50% 75%",
            xl: "50% 80%",
            xxl: "50% 80%",
          },
          width: 1600,
          height: 2208,
        },
      ],
    },
    {
      key: "childrenStudioPortraits",
      name: t_Section("services.childrenStudioPortraits.name"),
      tagline: t_Section("services.childrenStudioPortraits.tagline"),
      summary: t_Section("services.childrenStudioPortraits.summary"),
      images: [
        {
          src: "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-1.webp",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img1Description"
          ),
          objectPosition: {
            default: "50% 50%",
            xs: "67.5% 50%",
            sm: "72.5% 50%",
            md: "72.5% 50%",
            lg: "80% 50%",
            xl: "80% 50%",
            xxl: "80% 50%",
          },
          width: 2400,
          height: 1600,
        },
        {
          src: "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-2.webp",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img2Description"
          ),
          objectPosition: {
            default: "50% 2.5%",
            xs: "50% 5%",
            sm: "50% 5%",
            md: "50% 5%",
            lg: "50% 5%",
            xl: "50% 5%",
            xxl: "50% 5%",
          },
          width: 1600,
          height: 2400,
        },
        {
          src: "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-3.webp",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img3Description"
          ),
          objectPosition: {
            default: "50% 35%",
            xs: "50% 35%",
            sm: "50% 40%",
            md: "50% 32.5%",
            lg: "50% 60%",
            xl: "50% 65%",
            xxl: "50% 67.5%",
          },
          width: 1600,
          height: 2400,
        },
        {
          src: "/images/sections-img/services-showcase/children-studio-portraits/children-studio-portraits-4.webp",
          alt: t_Section(
            "services.childrenStudioPortraits.images.img4Description"
          ),
          objectPosition: {
            default: "50% 5%",
            xs: "50% 5%",
            sm: "30% 5%",
            md: "50% 5%",
            lg: "50% 5%",
            xl: "50% 5%",
            xxl: "50% 5%",
          },
          width: 1984,
          height: 2976,
        },
      ],
    },
  ];
  const exploreOurPortfolioBtn = t_Section("exploreOurPortfolioBtn");
  const bookASessionBtn = t_Common("bookASessionBtn");

  return (
    <section
      id="services-showcase"
      className="services-showcase"
      aria-labelledby="services-showcase__title"
    >
      <div className="services-showcase__wrapper">
        <h2 id="services-showcase__title" className="services-showcase__title">
          {sectionTitle}
        </h2>
        <p className="services-showcase__intro">{sectionIntro}</p>
        <div className="services-showcase__services">
          {services.map((service) => (
            <div
              key={service.key}
              className="services-showcase__service"
              aria-labelledby={`${service.name} Service`}
            >
              <EmblaCarousel
                slides={[0, 1, 2, 3]}
                options={{ loop: true, containScroll: false }}
                images={service.images}
                ariaLabel={`Slide show for ${service.name}`}
              />
              <div className="services-showcase__service-details">
                <h3
                  id={`${service.key}-name`}
                  className="services-showcase__service-name"
                >
                  {service.name}
                </h3>
                <p className="services-showcase__service-tagline">
                  {service.tagline}
                </p>
                <p className="services-showcase__service-summary">
                  {service.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="services-showcase__actions">
          <Link
            href="/portfolio"
            className="services-showcase__actions--explore-portfolio-btn"
            aria-label={exploreOurPortfolioBtn}
            prefetch
          >
            {exploreOurPortfolioBtn}
          </Link>

          <Link
            href="/contact-us"
            className="services-showcase__actions--book-session-btn"
            aria-label={bookASessionBtn}
            prefetch
          >
            {bookASessionBtn}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
