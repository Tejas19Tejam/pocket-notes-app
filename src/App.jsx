import styles from "./app.module.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import CreateGroup from "./components/CreateGroup";
import NotesBox from "./components/NotesBox";
import initialGroups from "./groups";
import Group from "./components/Group";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

function App() {
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [createGroup, setCreateGroup] = useState(false);
  // const [selectedGroup, setSelectedGroup] = useState([]);

  // const [groups, setGroups] = useState(initialGroups);

  const [groups, setGroups] = useLocalStorageState([], "groups");

  // Derived state
  const selectedGroup = groups?.find((group) => group.id === activeGroupId);
  console.log(selectedGroup);

  return (
    <>
      <main className={styles.main}>
        <NotesGroupBox createGroup={setCreateGroup}>
          <GroupList
            groups={groups}
            activeGroupId={activeGroupId}
            setActiveGroupId={setActiveGroupId}
          />
        </NotesGroupBox>
        <NotesBox group={selectedGroup} />
        {createGroup && (
          <CreateGroup
            closePrompt={() => setCreateGroup(false)}
            setGroups={setGroups}
          />
        )}
      </main>
    </>
  );
}

function NotesGroupBox({ children, createGroup }) {
  return (
    <section className={styles.box_left}>
      <p className={styles.title}>Pocket Notes</p>
      {children}
      <button
        className={`btn ${styles.box_left__button}`}
        onClick={() => createGroup(true)}
      >
        <FaPlus className="icon" />
      </button>
    </section>
  );
}

function GroupList({ groups, activeGroupId, setActiveGroupId }) {
  if (groups.length === 0)
    return (
      <h3>
        Oops.... no groups are created, click on + button to create new group
      </h3>
    );
  return (
    <ul className={styles.box_left__container}>
      {groups.map((group) => {
        const groupState = {
          color: group.color,
          setActiveGroupId: setActiveGroupId,
          activeGroupId,
        };

        return (
          <GroupItem
            key={group.id}
            name={group.name}
            myNotes={group.notes}
            groupState={groupState}
            groupId={group.id}
          />
        );
      })}
    </ul>
  );
}

function GroupItem({ groupId, name, myNotes, groupState }) {
  const [notes, setNotes] = useState(myNotes);

  function handleShowNotes() {
    groupState.setActiveGroupId(groupId);
  }

  return (
    <li
      className={`${styles.item} ${
        groupState.activeGroupId === groupId && `${styles.active}`
      }`}
      role="button"
      onClick={handleShowNotes}
    >
      <Group name={name} groupColor={groupState.color} />
    </li>
  );
}

export default App;
