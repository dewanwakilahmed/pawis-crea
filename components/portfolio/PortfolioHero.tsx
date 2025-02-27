import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import '@/styles/portfolio/portfolio-hero.css';

const PortfolioHero: FC = () => {
  return (
    <section className="portfolio-hero">
      <video
        className="portfolio-hero-video"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/portfolio-video-placeholder.jpg"
      >
        {/* <source src="/videos/portfolio-hero-bg.webm" type="video/webm" /> */}
        <source src="/videos/portfolio-hero-bg.mp4" type="video/mp4" />
        <span className="sr-only">
          A showcase of a few of our best photography and videography scenes
        </span>
        Oops! It looks like your browser doesn&apos;t support video playback.
        Don&apos;t worry - you can still explore our stunning visuals below!
      </video>

      <div className="portfolio-hero-container">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-headline">
            Elevate Your Brand with Stunning Visuals
          </h1>
          <h2 className="portfolio-hero-subheadline">
            Photography and videography that captivate and convert
          </h2>
          <div className="portfolio-hero-cta">
            <a
              href="/portfolio#portfolio-category"
              className="explore-our-work-btn"
              aria-label="Explore our portfolio"
            >
              Explore Our Work
            </a>
            <Link
              href="/contact-us"
              className="book-a-session-btn"
              aria-label="Book a Session"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
