import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../styles/SingleCard.module.css";
import { AuthContext } from "../context/AuthContext";
import { addToCartButton } from "../components/Carousel";
import { useToast } from "@chakra-ui/react";

function SingleCard() {
  const { auth, setAuth } = useContext(AuthContext);
  const toast = useToast();
  const { id } = useParams();

  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(
          `https://snapdealbackend-production.up.railway.app/products/getById/${id}`,
          { withCredentials: true }
        );
        setCardDetails(response.data.data.product);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails();
  }, [id]);

  return (
    <div style={{ marginTop: "-15px", position: "relative" }}>
      {cardDetails && Object.keys(cardDetails).length > 0 ? (
        <div className={styles.main}>
          <img
            className={styles.image}
            src={cardDetails.productImage}
            alt="singleImage"
          />
          <div>
            <p className={styles.subtitle}>{cardDetails.subtitle}</p>
            <p className={styles.price}>${cardDetails.price}</p>
            <p className={styles.short}>{cardDetails.shortDescription}</p>
            <button
              onClick={() => {
                auth
                  ? addToCartButton(cardDetails._id, toast)
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
              Add To Cart
            </button>
          </div>
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
}

export default SingleCard;
