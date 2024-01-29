import styles from "./Notes.module.css";
import Note from "./Note";

function NotesList({ notes }) {
  if (!notes) return <h1>No notes present</h1>;

  return (
    <div className={styles.notes_container}>
      {notes?.map((note) => (
        <Note key={note.noteId} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
