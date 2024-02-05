import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [userDetails, setUserDetails] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://snapdealbackend-production.up.railway.app/users/otpRequest",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);

      setUserDetails({
        email: "",
      });
    } catch (error) {
      console.error("Reset  failed:", error);
    }
  };

  return (
    <div className={styles.mainRegister}>
      <p className={styles.heading}>Send OTP to your email</p>
      <form onSubmit={handleSubmit} className={styles.formData}>
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={userDetails.email}
          required
          className={styles.input}
        />
        <br />

        <button className={styles.registerBtn} type="submit">
          Send OTP
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
