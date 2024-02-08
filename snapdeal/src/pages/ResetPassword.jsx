import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    oldPassword: "",
    newPassword: "",
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
        "https://snapdealbackend-production.up.railway.app/users/resetpassword",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      if (res.data.status == "success") {
        alert("Your password reset successfully");
        navigate("/login");
      }
      setUserDetails({
        email: "",
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      console.error("Reset  failed:", error);
    }
  };

  return (
    <div className={styles.mainRegister}>
      <p className={styles.heading}>Reset Password</p>
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
        <label htmlFor="oldPassword">Enter your OldPassword</label>
        <input
          type="password"
          name="oldPassword"
          id="oldPassword"
          onChange={handleChange}
          value={userDetails.oldPassword}
          required
          className={styles.input}
        />
        <label htmlFor="newPassword">Enter your NewPassword</label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          onChange={handleChange}
          value={userDetails.newPassword}
          required
          className={styles.input}
        />

        <button className={styles.registerBtn} type="submit">
          Reset
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
