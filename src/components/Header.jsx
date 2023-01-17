import React from 'react';
import PropType from 'prop-types';
import Switch from 'react-switch';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import '../styles/Header.css';

function Header({ theme, handleTheme }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <Switch
        onChange={handleTheme}
        checked={theme === 'dark'}
        uncheckedIcon={<div className="switch-icon"><BsFillMoonStarsFill /></div>}
        checkedIcon={<div className="switch-icon"><BsFillSunFill /></div>}
        onColor="#fff"
        offColor="#3d3d3d"
        onHandleColor="#3d3d3d"
      />
    </div>
  );
}

Header.propTypes = {
  theme: PropType.string.isRequired,
  handleTheme: PropType.func.isRequired,
};

export default Header;
