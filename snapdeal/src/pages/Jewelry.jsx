import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Mens.module.css";
import axios from "axios";
import { addToCartButton } from "../components/Carousel";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function Jewelry() {
  const { auth, setAuth } = useContext(AuthContext);
  const [jewelry, setJewelry] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const toast = useToast();
  const fetchJewelryData = async () => {
    try {
      const res = await axios.get(
        "https://snap-deal-backend.vercel.app/products/?category=Jewelry"
      );

      setJewelry(res.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJewelryData();
  }, []);
  const handleSort = (order) => {
    const sortedData = [...jewelry];
    if (order === "asc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setJewelry(sortedData);
    setSortOrder(order);
  };
  return (
    <>
      <h1 className={styles.heading}>Jewelry</h1>
      <div className={styles.sort}>
        <button className={styles.btn} onClick={() => handleSort("asc")}>
          Sort by Price Low to High
        </button>
        <button className={styles.btn} onClick={() => handleSort("desc")}>
          Sort by Price High to Low
        </button>
      </div>
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
                  ? addToCartButton(item._id, toast)
                  : toast({
                      position: "bottom",
                      description: "You need to login first",
                      status: "warning",
                      duration: 9000,
                      isClosable: true,
                    });
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
