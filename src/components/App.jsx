import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    });
  };
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((eachNote, index) => {
        return index !== id;
      });
    })
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => {
        return <Note 
        key={index}
        id={index}
        remove={deleteNote}
          title={note.title}
          content={note.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
