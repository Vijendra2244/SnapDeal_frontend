import React, { useContext, useState } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "../context/UserImageContext";
import { AuthContext } from "../context/AuthContext";
import { useToast } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const { userImage, setUserImage } = useContext(ImageContext);
  const [visible, setVisible] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const toast = useToast();
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
        "https://snap-deal-backend.vercel.app/users/login",
        userDetails,
        {
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.data.status == "success") {
        setUserImage(res.data.avatar);
        setAuth(true);
        localStorage.setItem("userImage", res.data.avatar);
        toast({
          position: "bottom",
          description: "Login successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/");
      }
      setUserDetails({
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        toast({
          position: "bottom",
          description: "Incorrect email or password. Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  const handleEye = () => {
    setVisible(!visible);
  };

  return (
    <>
      <p className={styles.heading}>Login / SignIn</p>
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
          <label htmlFor="password">Enter your password</label>
          <div className={styles.inputPaas}>
            <input
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              onChange={handleChange}
              value={userDetails.password}
              required
              className={styles.inputUni}
              placeholder="Enter your password"
            />
            {visible ? (
              <FaEye onClick={handleEye} />
            ) : (
              <FaEyeSlash onClick={handleEye} />
            )}
          </div>
          <div className={styles.passwordOption}>
            <Link className={styles.linkPass} to="/resetpassword">
              <p className={styles.passwordNew}>Reset Password</p>
            </Link>
            <Link className={styles.linkPass} to="/forgetpassword">
              <p className={styles.passwordNew}>Forget Password</p>
            </Link>
          </div>
          <button className={styles.registerBtn} type="submit">
            Login
          </button>
          <Link className={styles.linkPass} to="/register">
            If you are new user please register first
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
