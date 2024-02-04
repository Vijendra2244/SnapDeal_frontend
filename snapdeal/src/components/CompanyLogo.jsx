import React from "react";
import styles from "../styles/CompanyLogo.module.css";
import logo from "../images/snapdeallogo.svg";

function CompanyLogo() {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.snapDealLogo} src={logo} alt="snap_deal_logo" />
    </div>
  );
}

export default CompanyLogo;
