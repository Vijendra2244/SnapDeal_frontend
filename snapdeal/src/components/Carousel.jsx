import React, { useContext, useState } from "react";
import styles from "../styles/Carousel.module.css";
import { useRef, useEffect } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const addToCartButton = async (productId) => {
  
  try {
    const res = await axios.post(
      "https://snapdealbackend-production.up.railway.app/carts/addToCart/",
      { productId },
      { withCredentials: true }
    );
    console.log(res);
    if (res.data.status == "success") {
      alert("Item added successfully in your cart");
    }
    
  } catch (error) {
    console.log(error);
    if (error.response.data.status == "fail") {
      alert("Getting error while adding item in cart");
    }
  }
};

function Carousel() {
  const { auth, setAuth } = useContext(AuthContext);
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
    <>
      <div className={styles.mainContainerOfSlider}>
        <div className={styles.mainDiv} ref={mainDivRef}>
          {product.slice(0, 20).map((item, index) => (
            <div className={styles.card} key={index}>
              <Link to={`/card/${item._id}`}>

              <img className={styles.img} src={item.productImage} alt="" />
              </Link>
              <p className={styles.title}>{item.subtitle}</p>
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
    </>
  );
}

export default Carousel;
