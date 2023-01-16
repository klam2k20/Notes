import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';

function Searchbar() {
  return (
    <div className="searchbar">
      <MdOutlineSearch />
      <input type="text" />
    </div>
  );
}

export default Searchbar;
