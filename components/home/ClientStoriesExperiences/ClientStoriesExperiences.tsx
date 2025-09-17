import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/client-stories-experiences.css";

// Components
import Carousel from "../../CommonComponents/Carousel";

const ClientStoriesExperiences: FC = () => {
  const t_Section = useTranslations("Home.ClientStoriesExperiences");
  const t_Common = useTranslations("Common");

  const sectionTitle = t_Section("sectionTitle");
  const sectionIntro = t_Section("sectionIntro");

  const clientStoriesData = [
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/marriage-testimonial.jpg",
      clientImgWidth: 1600,
      clientImgHeight: 2400,
      clientImgDesc: t_Section("clientStories.0.imgDesc"),
      clientTestimonial: t_Section("clientStories.0.testimonial"),
      clientInfo: t_Section("clientStories.0.clientInfo"),
    },
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/quinceanera-testimonial.jpg",
      clientImgWidth: 6000,
      clientImgHeight: 4000,
      clientImgDesc: t_Section("clientStories.1.imgDesc"),
      clientTestimonial: t_Section("clientStories.1.testimonial"),
      clientInfo: t_Section("clientStories.1.clientInfo"),
    },
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/event-coverage-testimonial.jpg",
      clientImgWidth: 4000,
      clientImgHeight: 6000,
      clientImgDesc: t_Section("clientStories.2.imgDesc"),
      clientTestimonial: t_Section("clientStories.2.testimonial"),
      clientInfo: t_Section("clientStories.2.clientInfo"),
    },
    {
      clientImgSrc:
        "/images/sections-img/client-stories-experiences/personal-testimonial.jpg",
      clientImgWidth: 4000,
      clientImgHeight: 6000,
      clientImgDesc: t_Section("clientStories.3.imgDesc"),
      clientTestimonial: t_Section("clientStories.3.testimonial"),
      clientInfo: t_Section("clientStories.3.clientInfo"),
    },
  ];

  return (
    <section
      id="client-stories-experiences"
      className="client-stories-experiences"
      aria-labelledby="client-stories-experiences__title"
    >
      <div className="client-stories-experiences__wrapper">
        <h2
          id="client-stories-experiences__title"
          className="client-stories-experiences__title"
        >
          {sectionTitle}
        </h2>
        <p className="client-stories-experiences__intro">{sectionIntro}</p>
        <Carousel
          slides={[0, 1, 2, 3]}
          options={{ loop: true, containScroll: false }}
          clientStoriesData={clientStoriesData}
          ariaLabel="Client Stories Slideshow"
          section="client-stories-experiences"
        />
      </div>
    </section>
  );
};

export default ClientStoriesExperiences;
