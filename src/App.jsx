import styles from "./app.module.css";

// HOOKS
import { useState } from "react";
import { useGroups } from "./hooks/useGroups";

// Components
import GroupContainer from "./features/groups/GroupContainer";
import CreateGroup from "./features/groups/CreateGroup";
import GroupList from "./features/groups/GroupList";
import NotesBox from "./features/notes/NotesBox";

function App() {
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [createGroup, setCreateGroup] = useState(false);

  const [groups, setGroups] = useGroups([], "groups");

  // Derived state
  const selectedGroup = groups?.find((group) => group.id === activeGroupId);

  return (
    <>
      <main className={styles.main}>
        <GroupContainer createGroup={setCreateGroup}>
          <GroupList
            groups={groups}
            activeGroupId={activeGroupId}
            setActiveGroupId={setActiveGroupId}
          />
        </GroupContainer>
        <NotesBox selectedGroup={selectedGroup} />
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

export default App;
