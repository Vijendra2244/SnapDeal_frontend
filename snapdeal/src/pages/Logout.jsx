import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Logout.module.css";
import { ImageContext } from "../context/UserImageContext.jsx";
import { AuthContext } from "../context/AuthContext.jsx";

export const logoutUser = async () => {
  try {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    const res = await axios.post(
      "https://snapdealbackend-production.up.railway.app/users/logout",
      {},
      {
        withCredentials: true,
      }
    );

    if (res.data.status === "success") {
      return { success: true, message: "Logout successfully" };
    }
  } catch (error) {
    if (error.response && error.response.data.status === "fail") {
      return {
        success: false,
        message: "Some error occurred while logged out",
      };
    }
    if (error.response && error.response.data.status === "allready") {
      return { success: false, message: "You are already logged out" };
    }
    return { success: false, message: "Error during logout" };
  }
};

function Logout() {
  const { userImage, setUserImage } = useContext(ImageContext);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const logoutResult = await logoutUser();
    if (logoutResult.success) {
      setUserImage("");
      localStorage.removeItem("userImage");
      alert("User logged out");
      setAuth(false);
      navigate("/");
    }
  };

  return (
    <div className={styles.main}>
      <button className={styles.btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
