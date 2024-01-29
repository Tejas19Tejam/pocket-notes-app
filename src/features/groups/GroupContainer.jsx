import styles from "./Group.module.css";
import { FaPlus } from "react-icons/fa6";

function GroupContainer({ children, createGroup }) {
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

export default GroupContainer;
