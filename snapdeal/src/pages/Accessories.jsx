import React, { useEffect, useState } from "react";
import styles from "../styles/Mens.module.css";
import axios from "axios";
import {addToCartButton} from "../components/Carousel"

function Accessories() {
  const [acc, setAcc] = useState([]);
  const fetchAccData = async () => {
    try {
      const res = await axios.get(
        "https://snapdealbackend-production.up.railway.app/products/?category=Accessories"
      );

      setAcc(res.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAccData();
  }, []);
  return (
    <div className={styles.mens}>
      {acc.map((item, index) => (
        <div className={styles.mainCard} key={index}>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={item.productImage} alt="" />
          </div>
          <p>{item.subtitle}</p>
          <p>${item.price}</p>
          <button onClick={()=>addToCartButton(item._id)} className={styles.btn}>AddToCart</button>
        </div>
      ))}
    </div>
  );
}

export default Accessories;
