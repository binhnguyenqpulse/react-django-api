import React from 'react'
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'

function SearchBar() {
  return (
    <div className="Searchbar">
        <FaSearch id="search-icon" />
        <input placeholder="Search anything..."/>
    </div>
  )
}

export default SearchBar
