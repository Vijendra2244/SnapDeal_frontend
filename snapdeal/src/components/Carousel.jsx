import React from "react";
import styles from "../styles/Carousel.module.css";
import { useRef, useEffect } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

function Carousel() {
  const mainDivRef = useRef();
  const slideLeft = () => {
    const current = mainDivRef.current;
    current.scrollBy({
      left: 1150,
      behavior: "smooth",
    });
  };
  const slideRight = () => {
    const current = mainDivRef.current;
    current.scrollBy({
      left: -1150,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    slideLeft();
    slideRight();
  });
  return (
    <div className={styles.mainContainerOfSlider}>
      <div className={styles.mainDiv} ref={mainDivRef}>
        <div className={styles.carouselContainer}> one </div>
        <div className={styles.carouselContainer}>two</div>
        <div className={styles.carouselContainer}>three</div>
        <div className={styles.carouselContainer}>four</div>
        <div className={styles.carouselContainer}>five</div>
        <div className={styles.carouselContainer}>six</div>
        <div className={styles.carouselContainer}>seven</div>
        <div className={styles.carouselContainer}>Eight</div>
        <div className={styles.carouselContainer}>nine</div>
        <div className={styles.carouselContainer}>ten</div>
        <div className={styles.carouselContainer}>one</div>
        <div className={styles.carouselContainer}>two</div>
        <div className={styles.carouselContainer}>three</div>
        <div className={styles.carouselContainer}>four</div>
        <div className={styles.carouselContainer}>five</div>
        <div className={styles.carouselContainer}>six</div>
        <div className={styles.carouselContainer}>seven</div>
        <div className={styles.carouselContainer}>Eight</div>
        <div className={styles.carouselContainer}>nine</div>
        <div className={styles.carouselContainer}>ten</div>
      </div>
      <button className={styles.leftButton} onClick={slideRight}>
        <RxChevronLeft />
      </button>
      <button className={styles.rightButton} onClick={slideLeft}>
        <RxChevronRight />
      </button>
    </div>
  );
}

export default Carousel;
