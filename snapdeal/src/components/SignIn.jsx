import React, { useContext, useState } from "react";
import styles from "../styles/SignIn.module.css";
import { FaRegUserCircle } from "react-icons/fa";

import LoginRegister from "./LoginRegister";

function SignIn() {
  const [mouseOver, setMouseOver] = useState(false);
  const mouseEvent = () => {
    setMouseOver(true);
  };
  const mouseLeave = () => {
    setTimeout(() => {
      setMouseOver(false);
    }, 2000);
  };
  return (
    <div
      onMouseLeave={mouseLeave}
      onMouseOver={mouseEvent}
      className={styles.singInContainer}
    >
      <button className={styles.signInButton}>
        SingIn <FaRegUserCircle className={styles.userIcon}></FaRegUserCircle>
      </button>
      {mouseOver && (
        <LoginRegister mouseEvent={mouseEvent} mouseLeave={mouseLeave} />
      )}
    </div>
  );
}

export default SignIn;
