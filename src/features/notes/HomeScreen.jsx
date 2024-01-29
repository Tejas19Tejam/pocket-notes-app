import styles from "./HomeScreen.module.css";
import { IoMdLock } from "react-icons/io";

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

export default HomeScreen;
