import React from "react";
import styles from "../styles/CompanyLogo.module.css";
import logo from "../images/Screenshot (438).png";
import { Link } from "react-router-dom";

function CompanyLogo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <img className={styles.snapDealLogo} src={logo} alt="snap_deal_logo" />
      </Link>
    </div>
  );
}

export default CompanyLogo;
