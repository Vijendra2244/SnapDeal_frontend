import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
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
        "https://snapdealbackend-production.up.railway.app/users/login",
        userDetails,
        {
          withCredentials: true,
        }
      );

      console.log(res);

      setUserDetails({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.mainRegister}>
      <p className={styles.heading}>Login / SignIn</p>
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
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={userDetails.password}
          required
          className={styles.input}
        />
         <div className={styles.passwordOption}>
            <Link className={styles.linkPass} to="/resetpassword">
            <p className={styles.passwordNew}>Reset Password</p>
            </Link>
            <Link className={styles.linkPass}  to="/forgetpassword">
            <p className={styles.passwordNew}>Forget Password</p>
            </Link>
         </div>
        <button className={styles.registerBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
