import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Mens.module.css";
import { useToast } from "@chakra-ui/react";
import snapdeal from "../images/snapdeallogo.svg";

function AddToCart() {
  const [cartData, setCartData] = useState([]);
  const toast = useToast();

  //this is for razorpay 
  const checkoutHandler = async ({ name, amount }) => {
    const {
      data: { order },
    } = await axios.post(`https://snap-deal-backend.vercel.app/payment/checkout`, {
      name,
      amount,
    });
    var options = {
      key: "rzp_test_lDKz5Mp6nAXD0O",
      amount: order.amount,
      currency: order.currency,
      name: "snapdeal",
      description: "Test Transaction",
      image: snapdeal,
      order_id: order.id,
      callback_url: "https://snap-deal-backend.vercel.app/payment/verification",
      prefill: {
        name: "xyzxyz",
        email: "xyz.soni@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399CC",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log(order);
  };

  const fetchCartData = async () => {
    try {
      const res = await axios.get(
        `https://snap-deal-backend.vercel.app/carts/`,
        { withCredentials: true }
      );

      setCartData(res.data.userProduct);
    } catch (error) {
      console.log(error);
      if (error.response.data.status == "fail") {
        toast({
          position: "bottom",
          description:
            "You need to login first after that you will be able to access cart",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  const deleteCartInCartSection = async (productId) => {
    try {
      const res = await axios.post(
        "https://snap-deal-backend.vercel.app/carts/deleteCart",
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

 
  return (
    <>
      <h1 className={styles.heading}></h1>
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
                className={styles.btnProceed}
                onClick={() =>
                  checkoutHandler({
                    name: item.productInfo.subtitle,
                    amount: item.productInfo.price,
                  })
                }
              >
                Proceed To Buy
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default AddToCart;
