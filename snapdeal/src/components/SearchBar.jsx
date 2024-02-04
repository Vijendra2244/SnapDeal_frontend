import React from 'react'
import styles from "../styles/SearchBar.module.css"
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
           <input className={styles.searchField} type="text" placeholder='Search products & brands' name='search' id='search'/>
           <div className={styles.searchBar}>
              <FaSearch/>
              Search
           </div>
    </div>
  )
}

export default SearchBar