import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/CopyRight.module.css"

function CopyRight() {
  return (
    <div className={styles.mainCopyRight} >
      <p className={styles.copy}>Copyright &copy; 2021, Snapdeal Limited. All Rights Reserved</p>
      <p className={styles.made}>
        Made for Bharat <FaHeart className={styles.heart}></FaHeart>{" "}
      </p>
    </div>
  );
}

export default CopyRight;
