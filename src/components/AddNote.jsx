import React, { useState } from 'react';

import '../styles/AddNote.css';

function AddNote() {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    if (text.length < 200) {
      setText(e.target.value);
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
        <small>
          {`${200 - text.length} Characters Remaining`}
        </small>
        <button className="save-btn" type="button">Save</button>
      </div>
    </div>
  );
}

export default AddNote;
