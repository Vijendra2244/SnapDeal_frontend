import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function OtpResetPass() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    newPassword: "",
  });
  const navigate = useNavigate();
  const toast = useToast()

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
      if (res.data.status == "success") {
        toast({
          position: "bottom",
          description: "Password reset successfully",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });;
    
        navigate("/");
      }

      setUserDetails({
        email: "",
        newPassword: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        toast({
          position: "bottom",
          description: "Otp not send please enter valid email which is verified on gmail.com",
          status: "warning",
          duration: 9000,
          isClosable: true,
        });;
       
      }
    }
  };

  return (
    <>
      <p className={styles.heading}>Enter your email and new password</p>
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
            placeholder="Enter your email"
            className={styles.input}
          />
          <br />

          <label htmlFor="newPassword">Enter your new password</label>
          <input
            type="text"
            name="newPassword"
            id="newPassword"
            onChange={handleChange}
            value={userDetails.newPassword}
            required
            className={styles.input}
            placeholder="Enter your new password"
          />

          <button className={styles.registerBtn} type="submit">
            Forget Password
          </button>
        </form>
      </div>
    </>
  );
}

export default OtpResetPass;
