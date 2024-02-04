import React from "react";
import styles from "../styles/FooterOption.module.css";

function FooterOption() {
  const policyInfo = [
    " Privacy Policy",
    " Terms of Sale",
    " Terms of Use",
    "Report Abuse & Takedown Policy",
    " Know Your BIS Standard",
    " Products Under Cumpulsory BIS Certification",
    " FAQ",
  ];
  const company = [
    "Impact@Snapdeal",
    "Careers",
    " Blog",
    "   Sitemap",
    " Contact Us",
  ];
  const snapdeal = ["Shopping App", "Sell on Snapdeal", "Media Enquiries"];
  const popular = ["Lehenga", " Kid's Clothing", "Sarees", " Winter Wear"];
  return (
    <div className={styles.mainFooterOption}>
      <div>
        <p className={styles.heading}>POLICY INFO</p>
        {policyInfo.map((item, index) => (
          <div key={index}>
            <li className={styles.list}>{item}</li>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.heading}>COMPANY</p>
        {company.map((item, index) => (
          <div key={index}>
            <li className={styles.list}>{item}</li>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.heading}>SNAPDEAL BUSINESS</p>
        {snapdeal.map((item, index) => (
          <div key={index}>
            <li className={styles.list}>{item}</li>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.heading}>POPULAR LINKS</p>
        {popular.map((item, index) => (
          <div key={index}>
            <li className={styles.list}>{item}</li>
          </div>
        ))}
      </div>
      <div>
        <p className={styles.heading}>SUBSCRIBE</p>
        <div className={styles.mainSubscribe}>
          <div className={styles.search}>
            <input
            className={styles.input}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <button className={styles.btnSubscribe}>SUBSCRIBE</button>
          </div>
          <p className={styles.register}>
            Register now to get updates on promotions andcoupons. Or Download
            App
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterOption;
