import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Mens.module.css";
import axios from "axios";
import { addToCartButton } from "../components/Carousel";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Jewelry() {
  const { auth, setAuth } = useContext(AuthContext);
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
    fetchJewelryData();
  }, []);
  return (
    <>
      <h1 className={styles.heading}>Jewelry</h1>
      <div className={styles.mens}>
        {jewelry.map((item, index) => (
          <div className={styles.mainCard} key={index}>
            <Link to={`/card/${item._id}`}>
              <div className={styles.imageContainer}>
                <img className={styles.img} src={item.productImage} alt="" />
              </div>
            </Link>
            <p>{item.subtitle}</p>
            <p>${item.price}</p>
            <button
              onClick={() => {
                auth
                  ? addToCartButton(item._id)
                  : alert("You need to login first");
              }}
              className={styles.btn}
            >
              AddToCart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Jewelry;
