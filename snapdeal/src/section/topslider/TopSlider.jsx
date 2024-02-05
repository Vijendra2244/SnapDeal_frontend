import React from "react";
import Slider from "../../components/Slider";
import styles from "../../styles/TopSlider.module.css"
import Aside from "../../components/Aside";


function TopSlider() {
  return (
    <div className={styles.main} >
      <Aside/>
      <Slider />
    </div>
  );
}

export default TopSlider;
