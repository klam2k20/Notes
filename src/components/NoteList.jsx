import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';
import '../styles/NoteList.css';

function NoteList({ notes }) {
  return (
    <div className="note-list">
      {notes.map((note) => <Note text={note.text} date={note.date} />)}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default NoteList;
