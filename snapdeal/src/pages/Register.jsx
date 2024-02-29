import React, { useContext, useState } from "react";
import styles from "../styles/Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useToast } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const { auth, setAuth } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
    avatar: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    const fileValue = name === "avatar" ? files[0] : value;

    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: fileValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(userDetails.password)) {
      toast({
        position: "bottom",
        description:
          "Password must have at least one uppercase character, one number, one special character, and be at least 8 characters long.",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }

    const formData = new FormData();
    formData.append("username", userDetails.username);
    formData.append("email", userDetails.email);
    formData.append("password", userDetails.password);
    formData.append("mobilenumber", userDetails.mobilenumber);
    formData.append("avatar", userDetails.avatar);

    try {
      const res = await axios.post(
        "https://snapdealbackend-production.up.railway.app/users/register",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(res);
      if (res.data.status == "success") {
        toast({
          position: "bottom",
          description: "Registration successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setAuth(true);
        navigate("/login");
      }

      setUserDetails({
        username: "",
        email: "",
        password: "",
        mobilenumber: "",
        avatar: null,
      });
    } catch (error) {
      if (error.response && error.response.data.status === "fail") {
        toast({
          position: "bottom",
          description: "All field are required!",
          status: "success",
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
      <p className={styles.heading}>Register / SignUp</p>
      <div className={styles.mainRegister}>
        <form onSubmit={handleSubmit} className={styles.formData}>
          <label htmlFor="username">Enter your name</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            value={userDetails.username}
            className={styles.input}
            required
            placeholder="Enter your user name"
          />

          <br />
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

          <br />
          <label htmlFor="mobilenumber">Enter your mobile number</label>
          <input
            type="number"
            name="mobilenumber"
            id="mobilenumber"
            onChange={handleChange}
            value={userDetails.mobilenumber}
            required
            className={styles.input}
            placeholder="Enter your mobile number"
          />
          <br />
          <label htmlFor="avatar">Upload your image</label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleChange}
            required
            className={styles.input}
          />

          <button className={styles.registerBtn} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
