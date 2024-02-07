import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Mens.module.css";

function AddToCart() {
  const [cartData, setCartData] = useState([]);
  const fetchCartData = async () => {
    try {
      const res = await axios.get(
        `https://snapdealbackend-production.up.railway.app/carts/`,
        { withCredentials: true }
      );
      console.log(res);
      setCartData(res.data.userProduct);
    } catch (error) {
      console.log(error);
      if (error.response.data.status == "fail") {
        alert(
          "You need to login first after that you will be able to access cart"
        );
      }
    }
  };

  const deleteCartInCartSection = async (productId) => {
    try {
      const res = await axios.post(
        "https://snapdealbackend-production.up.railway.app/carts/deleteCart",
        { productId },
        { withCredentials: true }
      );
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item.productInfo._id !== productId)
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <div className={styles.mens}>
      {cartData.map((item, index) => (
        <div className={styles.mainCard} key={index}>
          <img
            className={styles.img}
            src={item.productInfo.productImage}
            alt="product-image"
          />
          <p className={styles.short}>
            {item.productInfo.shortDescription.slice(0, 70) + "..."}
          </p>
          <p>{item.productInfo.subtitle}</p>
          <p>${item.productInfo.price}</p>
          <button
            onClick={() => deleteCartInCartSection(item.productInfo._id)}
            className={styles.btn}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AddToCart;
