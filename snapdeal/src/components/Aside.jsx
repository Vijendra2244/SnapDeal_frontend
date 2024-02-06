import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Aside.module.css"

function Aside() {
  return (
    <div className={styles.main}>
      <Link className={styles.linkCategory}  to="/womens">Women's Fashion</Link>
      <Link className={styles.linkCategory} to="/mens">Men's Fashion</Link>
      <Link className={styles.linkCategory} to="/jewelry">Jewelry</Link>
      <Link className={styles.linkCategory} to="accessories">Accessories</Link>
      <Link className={styles.linkCategory} to="electronics">Electronics</Link>
      <Link className={styles.linkCategory} to="/mobiles" >Mobile Phones</Link>
    </div>
  );
}

export default Aside;
