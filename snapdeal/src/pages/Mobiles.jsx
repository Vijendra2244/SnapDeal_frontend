import React, { useEffect, useState } from "react";
import styles from "../styles/Mens.module.css";
import axios from "axios";
import {addToCartButton} from "../components/Carousel"

function Mobiles() {
  const [mobiles, setMobiles] = useState([]);
  const fetchMobilesData = async () => {
    try {
      const res = await axios.get(
        "https://snapdealbackend-production.up.railway.app/products/?category=Mobile Phones"
      );
  console.log(res)
      setMobiles(res.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMobilesData()
  }, []);
  return (
    <div className={styles.mens}>
      {mobiles.map((item, index) => (
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

export default Mobiles;
