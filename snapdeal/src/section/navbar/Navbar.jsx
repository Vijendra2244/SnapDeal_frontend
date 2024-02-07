import React from "react";
import styles from "../../styles/Navbar.module.css";
import CompanyLogo from "../../components/CompanyLogo";
import SearchBar from "../../components/SearchBar";
import Cart from "../../components/Cart";
import SignIn from "../../components/SignIn";

import {ImageContext} from "../../context/UserImageContext"


function Navbar() {
  const { userImage, setUserImage } = useContext(ImageContext);

import Logout from "../../pages/Logout";


function Navbar() {


  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <CompanyLogo />
        <SearchBar />
        <Cart />
        <SignIn />

        <img title="user-image" className={styles.userImage} src={userImage} alt="userimage" />

       <Logout/>

      </nav>
    </div>
  );
}

export default Navbar;
