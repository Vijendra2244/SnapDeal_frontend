import React from "react";
import poster from "../images/poster.png";
import styles from "../styles/Poster.module.css"

function Poster() {
  return (
    <div className={styles.mainPoster}>
      <img className={styles.poster} src={poster} alt="" />
    </div>
  );
}

export default Poster;
