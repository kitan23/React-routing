import axios from "axios";
import { useState } from "react";
import noteServices from "../services/notes";

const Note = ({ note, toggerImportance, eraseNote }) => {
  const label = note.important ? "make not important" : "make important";
  return (
    <ul key={note.id}>
      <li>{note.content}</li>
      <li>{note.date}</li>
      <li>id: {note.id}</li>
      <li>important: {note.important.toString()}</li>
      <button
        style={{ background: note.important ? "red" : "greenyellow" }}
        onClick={toggerImportance}
      >
        {label}
      </button>
      <button onClick={eraseNote}>Erase Note</button>
    </ul>
  );
};

const ServerNote = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const GetNote = () => {
    noteServices.getAll().then((response) => {
      console.log(response);
      setNotes(response);
    });
  };
  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    };
    // axios.post("http://localhost:3001/notes", noteObject).then((response) => {
    //   console.log(response);
    // });
    noteServices.create(noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response));
      setNewNote("");
    });
  };
  const eraseNote = (id) => {
    noteServices.erase(id).then((response) => console.log(response));
    setNotes(notes.filter((note) => note.id !== id));
  };
  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteServices.update(id, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response)));
    });
  };
  return (
    <div>
      {/* <button onClick={addNote}>ADD NOTE TO JSON SERVER</button> */}
      <button onClick={GetNote}>Fetch Note</button>
      <form onSubmit={(e) => addNote(e)}>
        <input
          type="text"
          style={{ width: "50%" }}
          placeholder="type content..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button>Add Note</button>
      </form>
      {notes.map((note) => (
        <Note
          note={note}
          key={note.id}
          toggerImportance={() => toggleImportanceOf(note.id)}
          eraseNote={() => eraseNote(note.id)}
        />
      ))}
    </div>
  );
};

export default ServerNote;
