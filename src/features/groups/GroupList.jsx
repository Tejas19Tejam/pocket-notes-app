import styles from "./Group.module.css";
import GroupItem from "./GroupItem";

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
            groupState={groupState}
            groupId={group.id}
          />
        );
      })}
    </ul>
  );
}

export default GroupList;
