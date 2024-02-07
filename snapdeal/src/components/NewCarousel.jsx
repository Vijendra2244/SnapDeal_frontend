import React, { useContext, useState } from "react";
import styles from "../styles/Carousel.module.css";
import { useRef, useEffect } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import axios from "axios";
import {addToCartButton} from "./Carousel"
import { AuthContext } from "../context/AuthContext";

function NewCarousel() {
  const {auth,setAuth} =useContext(AuthContext)
  const [product, setProduct] = useState([]);
  const mainDivRef = useRef();
  const slideLeft = () => {
    const current = mainDivRef.current;
    current.scrollBy({
      left: 1150,
      behavior: "smooth",
    });
  };
  const slideRight = () => {
    const current = mainDivRef.current;
    current.scrollBy({
      left: -1150,
      behavior: "smooth",
    });
  };
  const fetchData = async () => {
    try {
      const productData = await axios.get(
        "https://snapdealbackend-production.up.railway.app/products/",
        { withCredentials: true }
      );

      setProduct(productData.data.data.products);
    } catch (error) {
      console.error("Error fetching product data", error);
    }
  };
  useEffect(() => {
    slideLeft();
    slideRight();

    fetchData();
  }, []);

  return (
    <div className={styles.mainContainerOfSlider}>
      <div className={styles.mainDiv} ref={mainDivRef}>
        {product.slice(21, 40).map((item, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.img} src={item.productImage} alt="" />
            <p className={styles.title}>{item.subtitle.slice(0,15)}</p>
            <p className={styles.price}>${item.price}</p>
            <button
              onClick={() => {
                auth
                  ? addToCartButton(item._id)
                  : alert("You need to login first");
              }}
              className={styles.addToCart}
            >
              AddToCart
            </button>
          </div>
        ))}
      </div>
      <button className={styles.leftButton} onClick={slideRight}>
        <RxChevronLeft />
      </button>
      <button className={styles.rightButton} onClick={slideLeft}>
        <RxChevronRight />
      </button>
    </div>
  );
}

export default NewCarousel;
