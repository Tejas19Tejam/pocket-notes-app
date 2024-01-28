import styles from "./NotesBox.module.css";

function Note({ note }) {
  return (
    <div className={styles.note}>
      <p className={styles.note_text}>{note.text}</p>
      <ul className={styles.note_timestamp}>
        <li className={styles.note_date}>{note.createdDate}</li>
        <li className={styles.note_time}>{note.createdTime}</li>
      </ul>
    </div>
  );
}

export default Note;
