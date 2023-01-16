import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSearch } from 'react-icons/md';

import '../styles/Searchbar.css';

function Searchbar({ handleSearch }) {
  return (
    <div className="searchbar">
      <MdOutlineSearch className="search-icon" />
      <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
