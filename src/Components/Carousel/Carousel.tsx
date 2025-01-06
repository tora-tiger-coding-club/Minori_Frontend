import { TouchEventHandler, useEffect, useRef, useState } from 'react';

import { ChevronLeft, ChevronRight } from 'Path';
import styles from './carousel.module.css';

interface Props {
  carouselList: string[];
}

let touchStartX: number;
let touchEndX: number;

const Carousel = ({ carouselList }: Props) => {
  const [currIndex, setCurrIndex] = useState(1);
  const [currList, setCurrList] = useState<string[]>();

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselList.length != 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrList(newList);
    }
  }, [carouselList]);

  useEffect(() => {
    if (carouselRef.current != null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%`;
    }
  }, [currIndex]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (carouselRef.current != null) {
        carouselRef.current.style.transition = '';
      }
    }, 500);
  };

  const handleSwipt = (direction: number) => {
    const newIndex = currIndex + direction;

    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    setCurrIndex((prev) => prev + direction);
    if (carouselRef.current != null) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const currTouchX = e.nativeEvent.changedTouches[0].clientX;

    if (carouselRef.current != null) {
      carouselRef.current.style.transform = `translateX(calc(-${currIndex}00% - ${touchStartX - currTouchX * 2 || 0}px))`;
    }
  };
};

const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
  touchEndX = e.nativeEvent.changedTouches[0].clientX;
};
