import Note from "./Note";
import styles from "./NotesBox.module.css";

function NotesList({ notes }) {
  return (
    <div className={styles.notes_container}>
      {notes.map((note) => (
        <Note key={note.noteId} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
