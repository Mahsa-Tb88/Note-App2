import style from "./Note.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useNotesDispatch } from "../../src/context/NotesContext";
const Note = ({ note }) => {
  const dispatch = useNotesDispatch();
  return (
    <div className={style.note}>
      <div className={style.note_body}>
        <div className={style.note_title}>
          <h2>{note.title}</h2>
          <p>{note.text}</p>
        </div>
        <div className={style.note_option}>
          <span
            className={style.note_trash}
            onClick={() => dispatch({ type: "deleteNote", payload: note.id })}
          >
            <FaTrashCan />
          </span>
          <span
            className={style.note_check}
            onClick={() => dispatch({ type: "checkNote", payload: note.id })}
          >
            {note.Completed ? <FaCheck /> : ""}
          </span>
        </div>
      </div>

      <div>
        <span className={style.note_data}>{note.date}</span>
      </div>
    </div>
  );
};

export default Note;
