import React from 'react'
import styles from "../styles/FooterCard.module.css"
import helpCenter from "../images/helpCenter.png"
import lock from "../images/lock_image.jpg"
import phone from "../images/phoneOne.png"
import secure from "../images/secure.jpg"

function FooterCard() {
    const cardData = [
        {
            image: lock,
            heading: "100% SECURE PAYMENT",
            para: "Moving your card details to a much more secured place"
        },
        // Add more objects to the array as needed
        {
            image: secure,
            heading: "TRUST PAY",
            para: "100% payment protection.Easy return policy"
        },
        {
            image: helpCenter,
            heading: "HELP CENTER",
            para: "Got a question ? Look no further.Browse our FAQ's and submit your query here"
        },
        {
            image: phone,
            heading: "SHOP ON THE GO",
            para: "Download the app and get exciting app inly offers at your fingertips"
        }
    ];

    return (
        <div className={styles.footerCard}>
            {cardData.map((card, index) => (
                <div key={index} className={styles.card}>
                    <img src={card.image} className={styles.image} alt={card.heading} />
                    <h4 className={styles.heading}>{card.heading}</h4>
                    <p className={styles.para}>{card.para}</p>
                </div>
            ))}
        </div>
    )
}

export default FooterCard
