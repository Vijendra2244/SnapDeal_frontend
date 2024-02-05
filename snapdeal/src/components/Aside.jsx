import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Aside.module.css"

function Aside() {
  return (
    <div className={styles.main}>
      <Link className={styles.linkCategory}  to="/womens">Women's Fashion</Link>
      <Link className={styles.linkCategory} to="/womens">Men's Fashion</Link>
      <Link className={styles.linkCategory} to="/homeliving">Home & Living</Link>
      <Link className={styles.linkCategory} to="accessories">Accessories</Link>
      <Link className={styles.linkCategory} to="electronics">Electronics</Link>
    </div>
  );
}

export default Aside;
