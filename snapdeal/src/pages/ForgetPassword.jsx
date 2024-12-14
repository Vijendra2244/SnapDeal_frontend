import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function ForgetPassword() {
  const [userDetails, setUserDetails] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const toast = useToast();

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
        "https://snapdeal-backend-l15i.onrender.com/users/otpRequest",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.status == "success") {
        navigate("/otpverification");
        toast({
          position: "bottom",
          description:
            "Otp send on your email and please enter your mail and otp here",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
      setUserDetails({
        email: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        toast({
          position: "bottom",
          description:
            "Otp not send please enter valid email which is verified on gmail.com",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <p className={styles.heading}>Send OTP to your email</p>
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

          <button className={styles.registerBtn} type="submit">
            Send OTP
          </button>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
