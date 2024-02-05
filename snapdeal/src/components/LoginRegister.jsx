import React, { useContext } from "react";
import styles from "../styles/LoginRegister.module.css";
import { Link } from "react-router-dom";


function LoginRegister({ mouseLeave, mouseEvent }) {
  return (
    <div
      onMouseLeave={mouseLeave}
      onMouseOver={mouseEvent}
      className={styles.shortCard}
    >
      <p className={styles.textForNewUser}>If you are new user</p>
      <Link to="/register">
      <button className={styles.registerButton}>Register</button>
      </Link>
      <Link className={styles.link} to="/login">
      <button className={styles.loginButton}>Login</button>
      </Link>
    </div>
  );
}

export default LoginRegister;
