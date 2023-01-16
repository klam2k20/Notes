import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';

import '../styles/Note.css';

function Note({ text, date }) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete className="delete-icon" />
      </div>
    </div>
  );
}

Note.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Note;
