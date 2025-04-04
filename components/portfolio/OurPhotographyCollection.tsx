"use client";

import React, { FC, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import { LightGallerySettings } from "lightgallery/lg-settings";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import Masonry from "react-masonry-css";

// CSS
import "@/styles/portfolio/photo-gallery.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// Icon
import { MdArrowRightAlt } from "react-icons/md";

// Image Data
import portfolioImgData from "@/public/images/portfolio-img/portfolioImgData";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

const getFilteredImages = (filter: string, categories: string[]): Image[] => {
  if (filter === "all") return portfolioImgData;
  if (filter === "featured") {
    return categories
      .map((category) =>
        portfolioImgData.filter((img) => img.category === category).slice(0, 3)
      )
      .flat();
  }
  return portfolioImgData.filter((img) => img.category === filter);
};

const gallerySettings: Partial<LightGallerySettings> = {
  speed: 500,
  plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgShare, lgRotate],
  autoplay: true,
  slideShowAutoplay: true,
  slideShowInterval: 5000,
  share: true,
  facebook: true,
  twitter: true,
  pinterest: true,
  selector: ".photo-gallery-img",
};

const Skeleton: FC<{ width: number; height: number }> = ({ width, height }) => (
  <div
    className="img-loading-skeleton"
    style={{
      width: "100%",
      paddingBottom: `${(height / width) * 100}%`,
    }}
  />
);

const OurPhotographyCollection: FC = () => {
  const t_OurPhotographyCollection_Portfolio = useTranslations(
    "Portfolio.OurPhotographyCollection"
  );
  const t_Common = useTranslations("Common");

  const { sectionHeading, imgNotLoaded } = {
    sectionHeading: t_OurPhotographyCollection_Portfolio("sectionHeading"),
    imgNotLoaded: t_OurPhotographyCollection_Portfolio("imgNotLoaded"),
  };

  const {
    children,
    djCoverage,
    eventCoverage,
    fashion,
    gastronomy,
    marriage,
    musicVideosBts,
    personal,
    photoStudio,
    quinceañera,
  } = {
    children: t_Common("portfolioCategories.children"),
    djCoverage: t_Common("portfolioCategories.djCoverage"),
    eventCoverage: t_Common("portfolioCategories.eventCoverage"),
    fashion: t_Common("portfolioCategories.fashion"),
    gastronomy: t_Common("portfolioCategories.gastronomy"),
    marriage: t_Common("portfolioCategories.marriage"),
    musicVideosBts: t_Common("portfolioCategories.musicVideosBts"),
    personal: t_Common("portfolioCategories.personal"),
    photoStudio: t_Common("portfolioCategories.photoStudio"),
    quinceañera: t_Common("portfolioCategories.quinceañera"),
  };

  const { featured, all } = {
    featured: t_Common("filterCategories.featured"),
    all: t_Common("filterCategories.all"),
  };

  const categoryKeys = [
    "children",
    "djCoverage",
    "eventCoverage",
    "fashion",
    "gastronomy",
    "marriage",
    "musicVideosBts",
    "personal",
    "photoStudio",
    "quinceañera",
  ];

  const [filteredImages, setFilteredImages] = useState(() =>
    getFilteredImages("featured", categoryKeys)
  );
  const [activeFilter, setActiveFilter] = useState("featured");
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleFilter = (filter: string) => {
    setFilteredImages(getFilteredImages(filter, categoryKeys));
    setActiveFilter(filter);
    setLoadedImages(new Set());
  };

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  if (!portfolioImgData.length) {
    return <p className="images-not-loaded">{imgNotLoaded}</p>;
  }

  return (
    <section className="photo-gallery">
      <div className="photo-gallery-container">
        <h3 className="photo-gallery-heading">{sectionHeading}</h3>

        <div className="photo-gallery-filter-bar">
          <div className="photo-gallery-filters">
            <button
              className={`filter-btn ${
                activeFilter === "featured" ? "active" : ""
              }`}
              onClick={() => handleFilter("featured")}
              aria-label={featured}
              role="button"
            >
              {featured}
            </button>
            {categoryKeys.map((categoryKey) => (
              <button
                key={categoryKey}
                className={`filter-btn ${
                  activeFilter === categoryKey ? "active" : ""
                }`}
                onClick={() => handleFilter(categoryKey)}
                aria-label={categoryKey}
                role="button"
              >
                {t_Common(`portfolioCategories.${categoryKey}`)}
              </button>
            ))}
            <button
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => handleFilter("all")}
              aria-label={all}
              role="button"
            >
              {all}
            </button>
          </div>
          <div className="scroll-right">
            <MdArrowRightAlt className="scroll-right-icon" />
          </div>
        </div>

        <div className="photo-gallery-content">
          <LightGallery {...gallerySettings}>
            <Masonry
              breakpointCols={{
                default: 4,
                1024: 3,
                768: 2,
                480: 1,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredImages.map((image) => {
                const isLoaded = loadedImages.has(image.src);
                return (
                  <a
                    key={image.src}
                    href={`/images/portfolio-img/${image.src}`}
                    className="photo-gallery-img"
                  >
                    {!isLoaded && (
                      <Skeleton width={image.width} height={image.height} />
                    )}
                    <Image
                      alt={image.alt}
                      src={`/images/portfolio-img/${image.src}`}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      layout="responsive"
                      onLoadingComplete={() => handleImageLoad(image.src)}
                      onError={() =>
                        console.error(`Failed to load ${image.src}`)
                      }
                      className={`photo-gallery-img-thumbnail ${
                        isLoaded ? "loaded" : "loading"
                      }`}
                    />
                  </a>
                );
              })}
            </Masonry>
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default OurPhotographyCollection;
