import styles from "./Group.module.css";
import Group from "./Group";

function GroupItem({ groupId, name, groupState }) {
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

export default GroupItem;
