import React from 'react';
import PropTypes from 'prop-types';

import Note from './Note';
import '../styles/NoteList.css';
import AddNote from './AddNote';

function NoteList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={() => handleDeleteNote(note.id)}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  handleAddNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
};

export default NoteList;
