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
      >
        <source src="/videos/portfolio-hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="portfolio-hero-container">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-headline">
            Bringing Brands to Life Through Stunning Visuals
          </h1>
          <h2 className="portfolio-hero-subheadline">
            From captivating photography to cinematic videography, we create
            visuals that engage, inspire, and convert
          </h2>
          <div className="portfolio-hero-cta">
            <Link
              href="/portfolio#portfolio-category"
              className="explore-our-work-btn"
            >
              Explore Our Work
            </Link>
            <Link href="/contact-us" className="book-a-session-btn">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
