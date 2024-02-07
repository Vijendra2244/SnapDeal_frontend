import React, { useState } from "react";
import styles from "../styles/Carousel.module.css";
import { useRef, useEffect } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import axios from "axios";

function Carousel() {
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
        {product.slice(0, 20).map((item, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.img} src={item.productImage} alt="" />
            <p className={styles.title}>{item.subtitle}</p>
            <p className={styles.price}>${item.price}</p>
            <button className={styles.addToCart}>Add To Cart</button>
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

export default Carousel;
