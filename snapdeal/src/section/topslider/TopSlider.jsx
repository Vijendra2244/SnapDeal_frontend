import React from "react";
import Slider from "../../components/Slider";
import styles from "../../styles/TopSlider.module.css";
import Aside from "../../components/Aside";
import Poster from "../../components/Poster";
import NewCarousel from "../../components/NewCarousel";

function TopSlider() {
  return (
    <>
      <div className={styles.main}>
        <Aside />
        <Slider />
      </div>
      <NewCarousel />
      <Poster />
    </>
  );
}

export default TopSlider;
