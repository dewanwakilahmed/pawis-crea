'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';

// CSS
import '@/styles/portfolio/photo-gallery.css';

// Masonry
import Masonry from 'react-masonry-css';

// LightGallery
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import imageData from '@/public/images/imageData';

const PhotoGallery: FC = () => {
  const categories = Array.from(new Set(imageData.map((img) => img.category)));

  // Initial state: first 3 images from each category
  const initialImages = categories
    .map((category) =>
      imageData.filter((img) => img.category === category).slice(0, 3)
    )
    .flat();

  // State for filtered images and current filter
  const [filteredImages, setFilteredImages] = useState(initialImages);
  const [activeFilter, setActiveFilter] = useState('initial'); // 'initial', 'all', or category name

  // Filter handler
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredImages(imageData); // Show all images
    } else if (filter === 'initial') {
      setFilteredImages(initialImages); // Reset to initial state
    } else {
      setFilteredImages(imageData.filter((img) => img.category === filter)); // Filter by category
    }
  };

  return (
    <section className="photo-gallery">
      <div className="photo-gallery-container">
        <h3 className="photo-gallery-heading">Photo Gallery</h3>

        <div className="photo-gallery-filters">
          <button
            className={`filter-btn ${
              activeFilter === 'initial' ? 'active' : ''
            }`}
            onClick={() => handleFilter('initial')}
          >
            Initial
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeFilter === category ? 'active' : ''
              }`}
              onClick={() => handleFilter(category)}
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1).replace(/-/g, ' ')}
            </button>
          ))}
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilter('all')}
          >
            All
          </button>
        </div>

        <div className="photo-gallery-content">
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector=".photo-gallery-item"
          >
            <Masonry
              breakpointCols={{
                default: 4, // 4 columns by default
                1024: 3, // 3 columns below 1024px
                768: 2, // 2 columns below 768px
                480: 1, // 1 column below 480px
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredImages.map((image, index) => (
                <a
                  key={index}
                  href={`/images/portfolio-img/${image.src}`}
                  className="photo-gallery-item"
                >
                  <Image
                    alt={image.alt}
                    src={`/images/portfolio-img/${image.src}`}
                    width={parseInt(image.width) / 5}
                    height={parseInt(image.height) / 5}
                  />
                </a>
              ))}
            </Masonry>
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
