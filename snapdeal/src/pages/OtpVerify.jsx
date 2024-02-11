import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function OtpVerify() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    otp: "",
  });
  const toast = useToast()
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
        toast({
          position: "bottom",
          description: "otp verified successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/forgetbyotp");
      }
      setUserDetails({
        email: "",
        otp: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        toast({
          position: "bottom",
          description:
            "Your otp  and email is incorrect please enter correct email and otp",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <p className={styles.heading}>Enter your OTP</p>
      <div className={styles.mainRegister}>
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
            placeholder="Enter your email"
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
            placeholder="Enter your otp"
            className={styles.input}
          />

          <button className={styles.registerBtn} type="submit">
            Otp Verification
          </button>
        </form>
      </div>
    </>
  );
}

export default OtpVerify;
