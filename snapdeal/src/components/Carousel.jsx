import React, { useContext, useState } from "react";
import styles from "../styles/Carousel.module.css";
import { useRef, useEffect } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const addToCartButton = async (productId, toast) => {
  try {
    const res = await axios.post(
      "https://snap-deal-backend.vercel.app/carts/addToCart/",
      { productId },
      { withCredentials: true }
    );
    console.log(res);
    if (res.data.status === "success") {
      toast({
        position: "bottom",
        description: "Item added successfully in cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  } catch (error) {
    console.log(error);
    if (error.response.data.status === "fail") {
      toast({
        position: "bottom",
        description: "Item already available in cart",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  }
};

function Carousel() {
  const { auth, setAuth } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  const mainDivRef = useRef();
  const toast = useToast();

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
        "https://snap-deal-backend.vercel.app/products/",
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
                    ? addToCartButton(item._id, toast)
                    : toast({
                        position: "bottom",
                        description: "You need to login first",
                        status: "warning",
                        duration: 9000,
                        isClosable: true,
                      });
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
