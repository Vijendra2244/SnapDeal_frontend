import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function OtpResetPass() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    newPassword:""
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
        "https://snapdealbackend-production.up.railway.app/users/forgotPassword",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);

      setUserDetails({
        email: "",
        newPassword:""
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

        <label htmlFor="newPassword">Enter your new password</label>
        <input
          type="newPassword"
          name="newPassword"
          id="newPassword"
          onChange={handleChange}
          value={userDetails.newPassword}
          required
          className={styles.input}
        />
       
          <button className={styles.registerBtn} type="submit">
            Forget Password
          </button>
       
      </form>
    </div>
  );
}

export default OtpResetPass;
