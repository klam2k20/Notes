import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../styles/AddNote.css';

function AddNote({ handleAddNote }) {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    if (text.length < 200) {
      setText(e.target.value);
    }
  };

  const addNote = () => {
    if (text.trim().length > 0) {
      handleAddNote(text.substring(0, 200));
      setText('');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows={10}
        cols={8}
        placeholder="Add Note..."
        value={text}
        onInput={(e) => handleInput(e)}
      />
      <div className="note-footer">
        <small className="character-count">
          {`${200 - text.length} Remaining`}
        </small>
        <button className="save-btn" type="button" onClick={addNote}>Save</button>
      </div>
    </div>
  );
}

AddNote.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default AddNote;
