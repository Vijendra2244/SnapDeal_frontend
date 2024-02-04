import React, { useContext } from "react";
import styles from "../styles/LoginRegister.module.css";


function LoginRegister({ mouseLeave, mouseEvent }) {
  return (
    <div
      onMouseLeave={mouseLeave}
      onMouseOver={mouseEvent}
      className={styles.shortCard}
    >
      <p className={styles.textForNewUser}>If you are new user</p>
      <button className={styles.registerButton}>Register</button>
      <button className={styles.loginButton}>Login</button>
    </div>
  );
}

export default LoginRegister;
