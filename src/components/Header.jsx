import React from 'react';
import PropType from 'prop-types';
import Switch from 'react-switch';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';

import '../styles/Header.css';

function Header({ theme, handleTheme }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <Switch
        onChange={handleTheme}
        checked={theme === 'dark'}
        uncheckedIcon={<div className="switch-icon"><BsFillMoonStarsFill /></div>}
        checkedIcon={<div className="switch-icon"><IoIosSunny /></div>}
        onColor="#f8f32b"
        offColor="#bebebe"
        onHandleColor="#000"
      />
    </div>
  );
}

Header.propTypes = {
  theme: PropType.string.isRequired,
  handleTheme: PropType.func.isRequired,
};

export default Header;
