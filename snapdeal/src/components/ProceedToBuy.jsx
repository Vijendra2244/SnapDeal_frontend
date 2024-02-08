import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/ProceedToBuy.module.css";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/ModalContext";

function ProceedToBuy() {
  const [count, setCount] = useState(10);

  const { modal, setModal } = useContext(ModalContext);
  const modalClose = () => {
    setModal(false);
    alert("Congratulation to buy product on our website");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.main}>
      <p className={styles.counterPara}>
        {count == 0
          ? "Your item has been delivered"
          : `Your item will be delivered within ${count} seconds`}
      </p>
      <button className={styles.okButton} onClick={modalClose}>
        Ok
      </button>
    </div>,
    document.getElementById("root")
  );
}

export default ProceedToBuy;
