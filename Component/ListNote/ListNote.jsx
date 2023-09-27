import Note from "../Note/Note";
import style from "./ListNote.module.css";
import Message from "../Message/Message";
import { useNotes } from "../../src/context/NotesContext";
const ListNote = ({  sortValue }) => {
  const notes  = useNotes();
  let newstNotes = notes;
  if (notes.length == 0) {
    return (
      <Message>
        <p className={style.completed}>There is not any note yet</p>
      </Message>
    );
  }
  if (sortValue == "oldest") {
    newstNotes = [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  if (sortValue == "newest") {
    newstNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  if (sortValue == "Completed") {
    newstNotes = [...notes];
    console.log(newstNotes.filter((note) => note.Completed).length);
    if (newstNotes.filter((note) => note.Completed).length == 0) {
      return (
        <Message>
          <p className={style.completed}>There is not any Completed note</p>
        </Message>
      );
    } else {
      newstNotes = newstNotes.filter((note) => note.Completed);
    }
  }
  if (sortValue == "Uncompleted") {
    newstNotes = [...notes];
    console.log(newstNotes.filter((note) => !note.Completed));
    if (newstNotes.filter((note) => !note.Completed).length == 0) {
      return (
        <Message>
          <p className={style.completed}>There is not any Uncompleted note</p>
        </Message>
      );
    } else {
      newstNotes = newstNotes.filter((note) => !note.Completed);
    }
  }
  return (
    <div>
      {newstNotes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
           
          />
        );
      })}
    </div>
  );
};

export default ListNote;
