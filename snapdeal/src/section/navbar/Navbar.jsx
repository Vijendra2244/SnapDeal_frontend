import React, { useContext } from "react";
import styles from "../../styles/Navbar.module.css";
import CompanyLogo from "../../components/CompanyLogo";
import SearchBar from "../../components/SearchBar";
import Cart from "../../components/Cart";
import SignIn from "../../components/SignIn";


function Navbar() {

  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <CompanyLogo />
        <SearchBar />
        <Cart />
        <SignIn />
      </nav>
    </div>
  );
}

export default Navbar;
