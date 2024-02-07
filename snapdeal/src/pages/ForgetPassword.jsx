import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ForgetPassword() {
  const [userDetails, setUserDetails] = useState({
    email: "",
  });
  const navigate = useNavigate()

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
     if(res.data.status=="success"){
      
      navigate("/otpverification")
      alert("Otp send on your email and please enter your mail and otp here")
     }
      setUserDetails({
        email: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        alert("Otp not send please enter valid email which is verified on gmail.com");
      }
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
