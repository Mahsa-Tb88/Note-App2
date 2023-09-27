import { createContext } from "react";
import { useContext } from "react";
import Note from "../../Component/Note/Note";
import { useReducer } from "react";

const NotesContext = createContext();
const NotesDispatchContext = createContext();
const initialValue = [];
function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "addNote": {
      const newNote = {
        id: new Date().getTime(),
        title: payload.title,
        text: payload.text,
        date: new Date().toLocaleString(),
        Completed: false,
      };
      return [...notes, newNote];
    }
    case "checkNote": {
      const index = notes.findIndex((note) => note.id == payload);
      const selectedNote = { ...notes[index] };
      selectedNote.Completed = !selectedNote.Completed;
      const newNotes = [...notes];
      newNotes[index] = selectedNote;
      return newNotes;
    }
    case "deleteNote": {
      const newNotes = notes.filter((note) => note.id != payload);
      return newNotes;
    }
    // default: {
    //   throw Error("Unknow action" + type);
    // }
  }
}
function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, initialValue);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export default NotesProvider;

export const useNotes = () => useContext(NotesContext);
export const useNotesDispatch = () => useContext(NotesDispatchContext);
