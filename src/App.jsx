import { useState } from 'react';

import NoteList from './components/NoteList';
import './App.css';

function App() {
  const [notes] = useState([
    {
      text: 'Note 1',
      date: '01/12/23',
    },
    {
      text: 'Note 2',
      date: '01/13/23',
    },
    {
      text: 'Note 3',
      date: '01/14/23',
    },
  ]);
  return (
    <div className="App">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
