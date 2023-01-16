import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';

import '../styles/Searchbar.css';

function Searchbar() {
  return (
    <div className="searchbar">
      <MdOutlineSearch className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default Searchbar;
