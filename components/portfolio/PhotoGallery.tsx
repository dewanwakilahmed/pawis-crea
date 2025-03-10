'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import Masonry from 'react-masonry-css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// CSS
import '@/styles/portfolio/photo-gallery.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Image Data
import imageData from '@/public/images/imageData';

const PhotoGallery: FC = () => {
  const categories = Array.from(new Set(imageData.map((img) => img.category)));

  const featuredImages = categories
    .map((category) =>
      imageData.filter((img) => img.category === category).slice(0, 3)
    )
    .flat();

  const [filteredImages, setFilteredImages] = useState(featuredImages);
  const [activeFilter, setActiveFilter] = useState('featured');

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredImages(imageData);
    } else if (filter === 'featured') {
      setFilteredImages(featuredImages);
    } else {
      setFilteredImages(imageData.filter((img) => img.category === filter));
    }
  };

  return (
    <section className="photo-gallery">
      <div className="photo-gallery-container">
        <h3 className="photo-gallery-heading">Photo Gallery</h3>

        <div className="photo-gallery-filters">
          <button
            className={`filter-btn ${
              activeFilter === 'featured' ? 'active' : ''
            }`}
            onClick={() => handleFilter('featured')}
          >
            Featured
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
                default: 4,
                1024: 3,
                768: 2,
                480: 1,
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
                    width={parseInt(image.width)}
                    height={parseInt(image.height)}
                    layout="responsive"
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
