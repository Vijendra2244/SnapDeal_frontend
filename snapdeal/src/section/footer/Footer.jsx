import React from "react";
import styles from "../../styles/Footer.module.css";
import FooterCard from "../../components/FooterCard";
import FooterOption from "../../components/FooterOption";
import PaymentOption from "../../components/PaymentOption";
import FooterDesc from "../../components/FooterDesc";
import CopyRight from "../../components/CopyRight";

function Footer() {
  return (
    <div>
      <hr />
      <FooterCard />
      <hr />
      <FooterOption />
      <hr />
      <PaymentOption />
      <hr />
      <FooterDesc />
      <hr />
      <CopyRight/>
    </div>
  );
}

export default Footer;
