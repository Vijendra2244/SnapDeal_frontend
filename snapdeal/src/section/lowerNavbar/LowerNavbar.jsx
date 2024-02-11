import React, { useContext } from "react";
import styles from "../../styles/LowerNavbar.module.css";
import { RiHome4Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logoutUser } from "../../pages/Logout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ImageContext } from "../../context/UserImageContext";
import { useToast } from "@chakra-ui/react";

function LowerNavbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const { setUserImage } = useContext(ImageContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = async () => {
    const logoutResult = await logoutUser();
    if (logoutResult.success) {
      setUserImage("");
      localStorage.removeItem("userImage");
      setAuth(false);
      toast({
        position: "bottom",
        description: "Logout successfully",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        position: "bottom",
        description: "Error while logged out",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <div className={styles.mainLower}>
      <Link className={styles.linkNav} to="/">
        <RiHome4Fill className={styles.icon}></RiHome4Fill>
        <p className={styles.text}>Home</p>
      </Link>

      <Link className={styles.linkNav} to="/addtocart">
        <IoCartOutline className={styles.icon}></IoCartOutline>
        <p className={styles.text}>Cart</p>
      </Link>
      {auth ? (
        <Link to="/" className={styles.linkNav}>
          <IoLogOut onClick={handleLogout} className={styles.icon}></IoLogOut>
          <p className={styles.text}>Logout</p>
        </Link>
      ) : (
        <Link className={styles.linkNav} to="/login">
          <FaRegUserCircle className={styles.icon}></FaRegUserCircle>
          <p className={styles.text}>Profile</p>
        </Link>
      )}
    </div>
  );
}

export default LowerNavbar;
