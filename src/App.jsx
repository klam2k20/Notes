import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Searchbar from './components/Searchbar';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const addNote = (text) => {
    const newNote = {
      id: uuidv4(),
      text,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(((note) => note.id !== id));
    setNotes(filteredNotes);
  };

  const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(search));

  return (
    <div className="app">
      <Header />
      <Searchbar handleSearch={setSearch} />
      <NoteList notes={filteredNotes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
