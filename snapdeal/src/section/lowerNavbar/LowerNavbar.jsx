import React from "react";
import styles from "../../styles/LowerNavbar.module.css";
import { RiHome4Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

function LowerNavbar() {
  return (
    <div className={styles.mainLower}>
      <Link className={styles.linkNav} to="/">
        <RiHome4Fill className={styles.icon}></RiHome4Fill>
        <p className={styles.text}>Home</p>
      </Link>

      <Link className={styles.linkNav} to="/">
        <IoCartOutline className={styles.icon}></IoCartOutline>
        <p className={styles.text}>Cart</p>
      </Link>

      <Link className={styles.linkNav} to="/">
        <FaRegUserCircle className={styles.icon}></FaRegUserCircle>
        <p className={styles.text}>Profile</p>
      </Link>

      <Link className={styles.linkNav} to="/">
        <IoLogOut className={styles.icon}></IoLogOut>
        <p className={styles.text}>Logout</p>
      </Link>
    </div>
  );
}

export default LowerNavbar;
