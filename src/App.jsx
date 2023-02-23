import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Searchbar from './components/Searchbar';
import NoteList from './components/NoteList';
import './styles/App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem('react-notes-app'));
    return storedNotes || [];
  });
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('react-notes-app', JSON.stringify(notes));
  }, [notes]);

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

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const filteredNotes = notes.filter((note) => note.text.toLowerCase()
    .includes(search.toLowerCase()));

  return (
    <div className="app" id={theme}>
      <div className="container">
        <Header theme={theme} handleTheme={toggleTheme} />
        <Searchbar handleSearch={setSearch} />
        <NoteList notes={filteredNotes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
