import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import styles from "../styles/Cart.module.css"
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className={styles.cartContainer}>
      <Link className={styles.linkKart} to="/addtocart">
        <p className={styles.cartText}> Cart</p>
       <IoCartOutline className={styles.cartIcon}></IoCartOutline>
      </Link>
    </div>
  )
}

export default Cart