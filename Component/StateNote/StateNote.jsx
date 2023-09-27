import { useNotes } from "../../src/context/NotesContext";
import style from "./StateNote.module.css";
const StateNote = () => {
  const notes = useNotes();
  return (
    <div className={style.stateNote}>
      <div>
        <span>All</span>
        <span>{notes.length}</span>
      </div>
      <div>
        <span>Completed</span>
        <span>{notes.filter((n) => n.Completed).length}</span>
      </div>
      <div>
        <span>Uncompleted</span>
        <span>{notes.filter((n) => !n.Completed).length}</span>
      </div>
    </div>
  );
};

export default StateNote;
