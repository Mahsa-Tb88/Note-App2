import AddNote from "../Component/AddNote/AddNote";
import ListNote from "../Component/ListNote/ListNote";
import StateNote from "../Component/StateNote/StateNote";
import SortNotes from "../Component/SortNotes/SortNotes";
import "./App.css";
import { useState } from "react";
import NotesProvider, { useNotes } from "./context/NotesContext";

const App = () => {
  const [sortValue, setSortValue] = useState("newest");

  // const addNoteHandler = (note) => {
  //   dispatch({ type: "addNote", payload: note });
  //   // const newNote = {
  //   //   id: new Date().getTime(),
  //   //   title: note.title,
  //   //   text: note.text,
  //   //   date: new Date().toLocaleString(),
  //   //   Completed: false,
  //   // };
  //   // setNotes([...notes, newNote]);
  // };
  // const checkHandler = (id) => {
  //   console.log(id);
  //   dispatch({ type: "checkNote", payload: id });

  //   // const index = notes.findIndex((note) => note.id == id);
  //   // const selectedNote = { ...notes[index] };
  //   // selectedNote.Completed = !selectedNote.Completed;
  //   // const newNotes = [...notes];
  //   // newNotes[index] = selectedNote;
  //   // setNotes(newNotes);
  // };
  // const deleteHandler = (id) => {
  //   dispatch({ type: "deleteNote", payload: id });
  //   // const newNotes = notes.filter((note) => note.id != id);
  //   // setNotes(newNotes);
  // };

  return (
    <NotesProvider>
      <div className="app">
        <div className="header-app">
          <HeaderApp />
          <SortNotes
            sortValue={sortValue}
            onSort={(e) => setSortValue(e.target.value)}
          />
        </div>
        <div className="body-app">
          <div className="body-app_addNote">
            <AddNote />
          </div>
          <div className="body-app_listNote">
            <StateNote />
            <ListNote sortValue={sortValue} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
};

export default App;

function HeaderApp() {
  const notes=useNotes()
  return (
    <div className="header-app-title">
      <h1>My Notes</h1>
      <span>({notes.length})</span>
    </div>
  );
}
