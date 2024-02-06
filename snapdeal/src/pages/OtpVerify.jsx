import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OtpVerify() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    otp: "",
  });
  const navigate = useNavigate();
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
        "https://snapdealbackend-production.up.railway.app/users/otpVerify",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.status == "success") {
        navigate("/forgetbyotp");
      }
      setUserDetails({
        email: "",
        otp: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        alert(
          "Your otp  and email is incorrect please enter correct email and otp"
        );
      }
    }
  };

  return (
    <div className={styles.mainRegister}>
      <p className={styles.heading}>Enter your OTP</p>
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
        <label htmlFor="otp">Enter your otp</label>
        <input
          type="text"
          name="otp"
          id="otp"
          onChange={handleChange}
          value={userDetails.otp}
          required
          className={styles.input}
        />

        <button className={styles.registerBtn} type="submit">
          Otp Verification
        </button>
      </form>
    </div>
  );
}

export default OtpVerify;
