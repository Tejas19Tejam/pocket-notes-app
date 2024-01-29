import styles from "./Notes.module.css";
import { useState } from "react";
import { MdSend } from "react-icons/md";
import { getDateAndTime } from "../../utils/helper";

function CreateNote({ setNotes, groupId }) {
  const [text, setText] = useState("");

  function handleCreateNote() {
    if (!text) return;

    // Unique Note ID
    const uid = Math.floor(Math.random() * 9000 + 1000);
    const [date, time] = getDateAndTime();

    const newNote = {
      noteId: uid,
      text,
      createdDate: date,
      createdTime: time,
      groupId,
    };

    console.log(newNote);
    setNotes((notes) => [...notes, newNote]);
    setText("");
  }

  return (
    <div className={styles.note_input_box}>
      <textarea
        placeholder="Enter your text here......"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <MdSend
        className={`icon ${styles.send_icon} ${
          text ? `${styles.active}` : ""
        } `}
        role="button"
        onClick={handleCreateNote}
      />
    </div>
  );
}
export default CreateNote;
