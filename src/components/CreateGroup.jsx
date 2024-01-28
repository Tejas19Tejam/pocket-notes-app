import { useEffect, useRef, useState } from "react";
import styles from "./CreateGroup.module.css";

function CreateGroup({ closePrompt, setGroups }) {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");
  const promptRef = useRef(null);

  // Unique Group ID
  const uid = Math.floor(Math.random() * 9000 + 1000);

  const handleClickOutside = (event) => {
    if (event.target === promptRef.current) {
      closePrompt();
    }
  };

  const handleCreateGroup = () => {
    if (!groupColor || !groupName) return;

    console.log(uid);

    const newGroup = {
      id: uid,
      name: groupName,
      color: groupColor,
      notes: [],
    };

    console.log(newGroup);
    // Add new group
    setGroups((groups) => [...groups, newGroup]);

    // Close prompt after group greated .
    closePrompt();
  };

  useEffect(() => {
    // Handle click outside on mount and unmount
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.prompt} role="button" ref={promptRef}>
      <div className={styles.prompt_box}>
        <p className={styles.prompt_box__title}>Create new group</p>
        <div className={styles.prompt_box__row}>
          <p className={styles.prompt_box__text}>Group name</p>
          <input
            type="text"
            className={styles.prompt_box__input}
            placeholder="Enter group name "
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            required
          />
        </div>
        <div className={styles.prompt_box__row}>
          <p className={styles.prompt_box__text}>Choose colour</p>
          <ul className={styles.colors}>
            <li
              className={`${styles.color} color_purple`}
              role="button"
              data-color="purple"
              onClick={(e) => setGroupColor(e.target.dataset.color)}
            ></li>
            <li
              className={`${styles.color} color_pink`}
              role="button"
              data-color="pink"
              onClick={(e) => setGroupColor(e.target.dataset.color)}
            ></li>
            <li
              className={`${styles.color} color_sky`}
              role="button"
              data-color="sky"
              onClick={(e) => setGroupColor(e.target.dataset.color)}
            ></li>
            <li
              className={`${styles.color} color_salamon`}
              role="button"
              data-color="salamon"
              onClick={(e) => setGroupColor(e.target.dataset.color)}
            ></li>
            <li
              className={`${styles.color} color_blue`}
              role="button"
              data-color="blue"
              onClick={(e) => setGroupColor(e.target.dataset.color)}
            ></li>
            <li
              className={`${styles.color} color_blue_light`}
              role="button"
              data-color="blue_light"
              onClick={(e) => setGroupColor(e.target.dataset.color)}
            ></li>
          </ul>
        </div>
        <button
          className={`btn ${styles.btn__create_group}`}
          onClick={handleCreateGroup}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateGroup;
