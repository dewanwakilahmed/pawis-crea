import React, { FC } from 'react';
import Image from 'next/image';
import { ErrorBoundary } from 'react-error-boundary';

// Component
import SectionErrorFallback from '@/components/SectionErrorFallback';

// CSS
import '@/styles/portfolio/about-pawis-crea.css';

interface UniqueSellingPoint {
  id: string;
  heading: string;
  description: string;
}

interface Content {
  sectionHeading: string;
  imgAltText: string;
  imgCaption: string;
  slogan: string;
  description: string;
  usps: UniqueSellingPoint[];
  aboutPawisCreaBookSessionBtn: string;
}

// Content
const CONTENT: Content = {
  sectionHeading: 'Our Story - Through Our Lens',
  imgAltText: 'The founder of Pawis Crea capturing a moment with their camera',
  imgCaption: 'Capturing moments, creating stories - one frame at a time',
  slogan: 'Dare to Dream',
  description:
    '"At Pawis Crea, we don’t just take pictures—we craft stories. With a deep passion for photography and videography, our team transforms fleeting moments into timeless treasures. From intimate portraits to dynamic event coverage, we work closely with our clients to bring their visions to life. Whether it’s an artist seeking expressive visuals, a couple cherishing their wedding day, or a business looking to elevate its brand, we ensure every frame speaks volumes. Our journey is fueled by a love for visual artistry, capturing the beauty and emotion of each moment in images that resonate with your heart. Join us as we see the world through our lens and create memories that echo long after the shutter clicks"',
  usps: [
    {
      id: 'expertise',
      heading: 'Over 4 Years of Expertise',
      description:
        'With more than four years of professional photography and videography, we bring a proven track record of excellence to every project',
    },
    {
      id: 'collaboration',
      heading: 'Your Story, Our Craft',
      description:
        'We listen closely and collaborate with you, turning your vision into authentic visuals that resonate with emotion',
    },
    {
      id: 'moments',
      heading: 'Masters of the Moment',
      description:
        'From candid shots to cinematic videos, we specialize in capturing the details that tell your unique story',
    },
    {
      id: 'versatility',
      heading: 'Creative Versatility',
      description:
        'Whether it’s an artist’s portfolio, a wedding day, or a corporate brand, our artistic vision and technical excellence deliver timeless results',
    },
  ],
  aboutPawisCreaBookSessionBtn: 'Book a Session',
};

const UniqueSellingPointItem: FC<UniqueSellingPoint> = ({
  heading,
  description,
}) => (
  <li className="about-pawis-crea-usp">
    <h4 className="about-pawis-crea-usp-heading">{heading}</h4>
    <p className="about-pawis-crea-usp-description">{description}</p>
  </li>
);
UniqueSellingPointItem.displayName = 'UniqueSellingPointItem';

const AboutPawisCrea: FC = () => {
  const {
    sectionHeading,
    imgAltText,
    imgCaption,
    slogan,
    description,
    usps,
    aboutPawisCreaBookSessionBtn,
  } = CONTENT;

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
            {sectionHeading}
          </h2>

          <figure className="about-pawis-crea-figure">
            <Image
              src="/images/about-pawis-crea.jpg"
              width={1280}
              height={853}
              alt={imgAltText}
              className="about-pawis-crea-founder-img"
              sizes="(max-width: 768px) 100vw, 50vw"
              aria-describedby="about-pawis-crea-description"
              priority
              placeholder="blur"
              blurDataURL="/images/about-pawis-crea.jpg"
            />
            <figcaption className="about-pawis-crea-caption">
              {imgCaption}
            </figcaption>
          </figure>

          <h3 className="about-pawis-crea-slogan">{slogan}</h3>

          <p className="about-pawis-crea-description">{description}</p>

          <ul
            className="about-pawis-crea-unique-selling-points"
            aria-label="Our Unique Selling Points"
          >
            {usps.map((usp) => (
              <UniqueSellingPointItem
                key={usp.id}
                id={usp.id}
                heading={usp.heading}
                description={usp.description}
              />
            ))}
          </ul>

          <a
            href="tel:+15551234567"
            className="about-pawis-crea-book-session-btn"
          >
            {aboutPawisCreaBookSessionBtn}
          </a>
        </div>
      </section>
    </ErrorBoundary>
  );
};
AboutPawisCrea.displayName = 'AboutPawisCrea';

export default AboutPawisCrea;
