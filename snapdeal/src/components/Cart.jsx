import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import styles from "../styles/Cart.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Cart() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <div className={styles.cartContainer}>
       <Link className={styles.linkKart} to="/addtocart">
          <p className={styles.cartText}> Cart</p>
          <IoCartOutline className={styles.cartIcon}></IoCartOutline>
        </Link>
      
    </div>
  );
}

export default Cart;
