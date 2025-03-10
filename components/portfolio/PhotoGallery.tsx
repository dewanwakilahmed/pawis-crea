'use client';
import React, { FC } from 'react';
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
  return (
    <section className="photo-gallery">
      <div className="photo-gallery-container">
        <h3 className="photo-gallery-heading">Photo Gallery</h3>

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
              {imageData.map((image, index) => (
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
