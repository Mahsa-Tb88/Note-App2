import { useState } from "react";
import style from "./SortNotes.module.css";
const SortNotes = ({ sortValue ,onSort}) => {
  return (
    <div className={style.sortNote}>
      <select value={sortValue} onChange={onSort}>
        <option value="Uncompleted">sort base on Uncompleted</option>
        <option value="Completed">sort base on Completed</option>
        <option value="newest">sort base on newest</option>
        <option value="oldest">sort base on oldest</option>
      </select>
    </div>
  );
};

export default SortNotes;
