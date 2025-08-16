"use client";

import React, { FC, CSSProperties } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
  slides: number[];
  images: {
    src: string;
    alt: string;
    objectPosition?: {
      default: string;
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      xxl?: string;
    };
  }[];
  options?: EmblaOptionsType;
  delay: number;
};

const EmblaCarousel: FC<PropType> = (props) => {
  const { slides, images, options, delay } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({ delay: delay, stopOnInteraction: true }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__track">
          {slides.map((index) => (
            <div className="carousel__slide" key={index}>
              <img
                className="carousel__slide-img"
                src={images[index].src}
                alt={images[index].alt}
                style={
                  images[index].objectPosition
                    ? ({
                        "--object-position-default":
                          images[index].objectPosition!.default,
                        "--object-position-xs":
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-sm":
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-md":
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-lg":
                          images[index].objectPosition!.lg ||
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-xl":
                          images[index].objectPosition!.xl ||
                          images[index].objectPosition!.lg ||
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                        "--object-position-xxl":
                          images[index].objectPosition!.xxl ||
                          images[index].objectPosition!.xl ||
                          images[index].objectPosition!.lg ||
                          images[index].objectPosition!.md ||
                          images[index].objectPosition!.sm ||
                          images[index].objectPosition!.xs ||
                          images[index].objectPosition!.default,
                      } as CSSProperties)
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__controls">
        <div className="carousel__arrow-btns">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="carousel__dot-btns">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"carousel__dot-btn".concat(
                index === selectedIndex ? " carousel__dot-btn--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
