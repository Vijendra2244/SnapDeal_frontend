import React from "react";
import styles from "../styles/PaymentOption.module.css";
import payment from "../images/paymentOptionImage.png";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

function PaymentOption() {
  return (
    <div className={styles.socialMain}>
      <div>
        <p className={styles.heading}>PAYMENT</p>
        <img className={styles.payment} src={payment} alt="Payment_option" />
      </div>
      <div >
      <p  className={styles.heading}>CONNECT</p>
      <div className={styles.socialIcon}>

        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
        <FaYoutube />
        <FaTelegram />
        <FaWhatsapp />
      </div>
      </div>
    </div>
  );
}

export default PaymentOption;
