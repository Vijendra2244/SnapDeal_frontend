import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import styles from "../styles/Cart.module.css"

function Cart() {
  return (
    <div className={styles.cartContainer}>
        <p className={styles.cartText}> Cart</p>
       <IoCartOutline className={styles.cartIcon}></IoCartOutline>
    </div>
  )
}

export default Cart