import React from "react";
import styles from "../../styles/Header.module.css";
import { RxMobile } from "react-icons/rx";

function Header() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <p className={styles.snapdealTagLine}>Brand Waali Quality, Bazaar Waali Deal!</p>
      </div>
      <div className={styles.rightContainer}>
        <a className={styles.someFeatures} href="#">Impact@Snapdeal</a>
        <a className={styles.someFeatures} href="#"> Gift Cards </a>
        <a href="" className={styles.someFeatures}>Help Center</a>
        <a className={styles.someFeatures} href="#"> Sell On Snapdeal </a>
        <a className={styles.someFeatures} href="#"><RxMobile/>Download App</a>
      </div>
    </div>
  );
}

export default Header;
