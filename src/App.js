import React, { useState } from "react";
import Notes from "./components/Notes";

function App() {
  let [list, setList] = useState([]);
  let [newNote, setNewNote] = useState("");

  function addNote() {
    let addedNote = list.concat(newNote);
    setList(addedNote);
    setNewNote("");
  }

  function handleChange(e) {
    setNewNote(e.target.value);
  }

  return (
    <div className="App">
      <h1>Toby Notes</h1>
      <input className="App__notes-input" type="text" value={newNote} onChange={handleChange} />
      <button className="App__button" onClick={addNote}>Save</button>
      <Notes data={list} />
    </div>
  );
}

export default App;
