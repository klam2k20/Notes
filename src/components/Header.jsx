import React from 'react';

import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="toggle-btn" type="button">Dark Mode</button>
    </div>
  );
}

export default Header;
