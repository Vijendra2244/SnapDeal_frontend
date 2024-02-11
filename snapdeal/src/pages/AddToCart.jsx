import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Mens.module.css";

function AddToCart() {
  const [cartData, setCartData] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const fetchCartData = async () => {
    try {
      const res = await axios.get(
        `https://snapdealbackend-production.up.railway.app/carts/`,
        { withCredentials: true }
      );

      setCartData(res.data.userProduct);
    } catch (error) {
      console.log(error);
      if (error.response.data.status == "fail") {
        alert(
          "You need to login first after that you will be able to access cart"
        );
      }
    }
  };

  const deleteCartInCartSection = async (productId) => {
    try {
      const res = await axios.post(
        "https://snapdealbackend-production.up.railway.app/carts/deleteCart",
        { productId },
        { withCredentials: true }
      );
      setCartData((prevCartData) =>
        prevCartData.filter((item) => item.productInfo._id !== productId)
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const handlePaymentConfirm = () => {
    setShowPaymentModal(false);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000); 
    }, Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000); 
  };

  return (
    <>
      <div className={styles.mens}>
        {cartData.length == 0 ? (
          <h1 className={styles.cartHeading}>Your cart is empty</h1>
        ) : (
          cartData.map((item, index) => (
            <div className={styles.mainCard} key={index}>
              <img
                className={styles.img}
                src={item.productInfo.productImage}
                alt="product-image"
              />
              <p className={styles.short}>
                {item.productInfo.shortDescription.slice(0, 70) + "..."}
              </p>
              <p>{item.productInfo.subtitle}</p>
              <p>${item.productInfo.price}</p>
              <button
                onClick={() => deleteCartInCartSection(item.productInfo._id)}
                className={styles.btn}
              >
                Delete
              </button>
              <button
                onClick={() => setShowPaymentModal(true)}
                className={styles.btnProceed}
              >
                Proceed To Buy
              </button>
            </div>
          ))
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className={styles.paymentModal}>
          <p className={styles.productsDetails}>Products Details</p>
          <ul>
            {cartData.map((item, index) => (
              <li className={styles.productsDetails} key={index}>
                {item.productInfo.shortDescription}
                <h3>Total Amount:${item.productInfo.price}</h3>
              </li>
            ))}
          </ul>
          <button className={styles.btnProceed} onClick={handlePaymentConfirm}>
            Confirm Payment
          </button>
          <button
            className={styles.btnProceed}
            onClick={() => setShowPaymentModal(false)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Loader */}
      {showLoader && (
        <div className={styles.loader}>
          <div className={styles.loaderContent}></div>
        </div>
      )}

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className={styles.successPopup}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="16 12 12 8 8 12"></polyline>
                <line x1="12" y1="16" x2="12" y2="8"></line>
              </svg>
            </div>
            <p>Payment Successful!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default AddToCart;
