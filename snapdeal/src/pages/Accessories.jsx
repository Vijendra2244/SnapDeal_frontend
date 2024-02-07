import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Mens.module.css";
import axios from "axios";
import { addToCartButton } from "../components/Carousel";
import { AuthContext } from "../context/AuthContext";

function Accessories() {
  const { auth, setAuth } = useContext(AuthContext);
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
    <>
      <h1 className={styles.heading}>Accessories</h1>
      <div className={styles.mens}>
        {acc.map((item, index) => (
          <div className={styles.mainCard} key={index}>
            <div className={styles.imageContainer}>
              <img className={styles.img} src={item.productImage} alt="" />
            </div>
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

export default Accessories;
