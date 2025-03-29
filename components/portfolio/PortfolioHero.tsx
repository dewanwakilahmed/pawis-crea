import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// CSS
import "@/styles/portfolio/portfolio-hero.css";

const PortfolioHero: FC = () => {
  const t_Portfolio_PortfolioHero = useTranslations("Portfolio.PortfolioHero");
  const t_Common = useTranslations("Common");

  const { headline, subheadline, exploreOurWorksBtn, videoSRTxt } = {
    headline: t_Portfolio_PortfolioHero("headline"),
    subheadline: t_Portfolio_PortfolioHero("subheadline"),
    exploreOurWorksBtn: t_Portfolio_PortfolioHero("exploreOurWorksBtn"),
    videoSRTxt: t_Portfolio_PortfolioHero("videoSRTxt"),
  };

  const { bookASessionBtn, videoFallbackTxt } = {
    bookASessionBtn: t_Common("bookASessionBtn"),
    videoFallbackTxt: t_Common("videoFallbackTxt"),
  };

  return (
    <section
      className="portfolio-hero"
      id="portfolio-hero"
      aria-labelledby="portfolio-hero-headline"
    >
      <video
        className="portfolio-hero-bg-video"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-bg/portfolio-hero-bg/portfolio-hero-bg.png"
      >
        <source
          src="/videos/hero-bg/portfolio-hero-bg/portfolio-hero-bg.webm"
          type="video/webm"
        />
        <source
          src="/videos/hero-bg/portfolio-hero-bg/portfolio-hero-bg.mp4"
          type="video/mp4"
        />
        <p className="sr-only">{videoSRTxt}</p>
        {videoFallbackTxt}
      </video>

      <div className="portfolio-hero-content">
        <div className="portfolio-hero-container">
          <h1 className="portfolio-hero-headline" id="portfolio-hero-headline">
            {headline}
          </h1>
          <h2 className="portfolio-hero-subheadline">{subheadline}</h2>
          <div className="portfolio-hero-cta">
            <Link
              href="/#portfolio-categories"
              className="explore-our-works-btn"
              aria-label={exploreOurWorksBtn}
            >
              {exploreOurWorksBtn}
            </Link>

            <Link
              href="/contact-us"
              className="book-a-session-btn"
              aria-label={bookASessionBtn}
              prefetch
            >
              {bookASessionBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
