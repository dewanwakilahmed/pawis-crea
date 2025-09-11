import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/home/client-stories-experiences.css";

const ClientStoriesExperiences: FC = () => {
  const t_Section = useTranslations("Home.ClientStoriesExperiences");
  const t_Common = useTranslations("Common");

  const sectionTitle = t_Section("sectionTitle");
  const sectionIntro = t_Section("sectionIntro");

  const clientStoriesData = [
    {
      imgSrc:
        "/images/sections-img/client-stories-experiences/marriage-testimonial.jpg",
      imgWidth: 1600,
      imgHeight: 2400,
      imgAlt: t_Section("clientStories.0.imgDescription"),
      testimonial: t_Section("clientStories.0.testimonial"),
      clientInfo: t_Section("clientStories.0.clientInfo"),
    },
    {
      imgSrc:
        "/images/sections-img/client-stories-experiences/quinceanera-testimonial.jpg",
      imgWidth: 6000,
      imgHeight: 4000,
      imgAlt: t_Section("clientStories.1.imgDescription"),
      testimonial: t_Section("clientStories.1.testimonial"),
      clientInfo: t_Section("clientStories.1.clientInfo"),
    },
    {
      imgSrc:
        "/images/sections-img/client-stories-experiences/event-coverage-testimonial.jpg",
      imgWidth: 4000,
      imgHeight: 6000,
      imgAlt: t_Section("clientStories.2.imgDescription"),
      testimonial: t_Section("clientStories.2.testimonial"),
      clientInfo: t_Section("clientStories.2.clientInfo"),
    },
    {
      imgSrc:
        "/images/sections-img/client-stories-experiences/personal-testimonial.jpg",
      imgWidth: 4000,
      imgHeight: 6000,
      imgAlt: t_Section("clientStories.3.imgDescription"),
      testimonial: t_Section("clientStories.3.testimonial"),
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
        <div className="client-stories-experience__clent-stories">
          {clientStoriesData.map((clientStory, index) => (
            <div
              key={index}
              className="client-storie-experience__client-story"
              aria-labelledby={`Story of ${clientStory.clientInfo}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesExperiences;
