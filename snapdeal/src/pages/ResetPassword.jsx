import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

function ResetPassword() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    oldPassword: "",
    newPassword: "",
    email: "",
  });

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
        "https://snap-deal-backend.vercel.app/users/resetpassword",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.status == "success") {
        toast({
          position: "bottom",
          description: "Your password reset successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      }
      setUserDetails({
        email: "",
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      console.error("Reset  failed:", error);
      if (error.response.data.msg == "Your old password is incorrect") {
        toast({
          position: "bottom",
          description: "Your old password is incorrect",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <p className={styles.heading}>Reset Password</p>
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
          <label htmlFor="oldPassword">Enter your OldPassword</label>
          <input
            type="text"
            name="oldPassword"
            id="oldPassword"
            onChange={handleChange}
            value={userDetails.oldPassword}
            required
            placeholder="Enter your old password"
            className={styles.input}
          />
          <label htmlFor="newPassword">Enter your NewPassword</label>
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
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
