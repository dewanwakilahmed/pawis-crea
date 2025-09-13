"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type ClientStoryType = {
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  testimonial: string;
  clientInfo: string;
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  clientStoriesData: ClientStoryType[];
  ariaLabel: string;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, clientStoriesData, ariaLabel } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla" aria-label={ariaLabel}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const story = clientStoriesData[index];
            return (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__content">
                  <div className="embla__slide__image">
                    <Image
                      src={story.imgSrc}
                      width={story.imgWidth}
                      height={story.imgHeight}
                      alt={story.imgAlt}
                      className="embla__slide__img"
                    />
                  </div>
                  <div className="embla__slide__details">
                    <blockquote className="embla__slide__testimonial">
                      {story.testimonial}
                    </blockquote>
                    <cite className="embla__slide__client-info">
                      {story.clientInfo}
                    </cite>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>

        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
