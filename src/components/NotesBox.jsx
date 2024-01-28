import { useEffect, useState } from "react";
import Group from "./Group";
import styles from "./NotesBox.module.css";
import { IoMdLock } from "react-icons/io";
import { MdSend } from "react-icons/md";
import { getDateAndTime } from "../utils/helper";
import NotesList from "./NotesList";

function NotesBox({ group }) {
  const [notes, setNotes] = useState([]);
  const [grpName, setGrpName] = useState("");
  const [grpColor, setGrpColor] = useState("");

  // const grpName = group?.name;
  // const grpColor = group?.color;

  useEffect(() => {
    if (!group) return;
    setGrpName(group.name);
    setGrpColor(group.color);
    setNotes(group.notes);
  }, [group]);

  if (!group) return <HomeScreen />;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        {<Group name={grpName} groupColor={grpColor} />}
      </header>
      <NotesList notes={notes} />
      <CreateNote setNotes={setNotes} />
    </section>
  );
}

function HomeScreen() {
  return (
    <section className={styles.homescreen}>
      <img
        src="/images/image--1.png"
        alt="Peoples write on notes"
        className={styles.illustration_img}
      />
      <h1 className={styles.heading_primary}>Pocket Notes</h1>
      <p className={styles.text}>
        Send and receive messages without keeping your phone online.
      </p>
      <p className={styles.text}>
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={styles.encrypted}>
        <IoMdLock className={`icon ${styles.lock_icon}`} />
        <p className={styles.encrypted_text}>end-to-end encrypted</p>
      </div>
    </section>
  );
}

function CreateNote({ setNotes }) {
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

//  {
//    !group ? (
//      <HomeScreen />
//    ) : (
//      <header>{<Group name={group.name} groupColor={group.color} />}</header>
//    );
//  }

export default NotesBox;
