import React, { useEffect, useState } from "react";
import styles from "../styles/Mens.module.css";
import axios from "axios";

function Jewelry() {
  const [jewelry, setJewelry] = useState([]);
  const fetchJewelryData = async () => {
    try {
      const res = await axios.get(
        "https://snapdealbackend-production.up.railway.app/products/?category=Jewelry"
      );

      setJewelry(res.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   fetchJewelryData()
  }, []);
  return (
    <div className={styles.mens}>
      {jewelry.map((item, index) => (
        <div className={styles.mainCard} key={index}>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={item.productImage} alt="" />
          </div>
          <p>{item.subtitle}</p>
          <p>${item.price}</p>
          <button className={styles.btn}>AddToCart</button>
        </div>
      ))}
    </div>
  );
}

export default Jewelry;
