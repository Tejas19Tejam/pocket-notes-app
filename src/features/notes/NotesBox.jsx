import styles from "./Notes.module.css";

// Hooks
import { useEffect, useState } from "react";
import { useNotes } from "../../hooks/useNotes";

// Components
import Group from "../groups/Group";
import HomeScreen from "./HomeScreen";
import NotesList from "./NotesList";
import CreateNote from "./CreateNote";

function NotesBox({ selectedGroup }) {
  const [selectedGroupNotes, setSelectedGroupNotes] = useState([]);
  const [notes, setNotes] = useNotes([], "notes");

  useEffect(() => {
    if (!selectedGroup) return;
    const grpNotes = notes.filter((note) => note.groupId === selectedGroup.id);
    console.log(grpNotes);
    setSelectedGroupNotes(grpNotes);
  }, [selectedGroup, notes]);

  if (!selectedGroup) return <HomeScreen />;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        {<Group name={selectedGroup.name} groupColor={selectedGroup.color} />}
      </header>
      <NotesList notes={selectedGroupNotes} />
      <CreateNote setNotes={setNotes} groupId={selectedGroup.id} />
    </section>
  );
}

export default NotesBox;
