import styles from './app.module.css';
import { FaPlus } from 'react-icons/fa6';

function App() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.box_left}>
          <p className={styles.title}>Pocket Notes</p>
          
          <ul className={styles.box_left__container} role="div">
            <li className={`${styles.item}`} role="button">
              <p className={`${styles.item_abbrivation} ${styles.color_pink}`}>
                PY
              </p>
              <p className={styles.item_text}>Python Notes</p>
            </li>
            <li className={`${styles.item}`} role="button">
              <p className={`${styles.item_abbrivation} ${styles.color_pink}`}>
                CS
              </p>
              <p className={styles.item_text}>Computer Scienc</p>
            </li>
            <li className={`${styles.item}`} role="button">
              <p className={`${styles.item_abbrivation}`}>PH</p>
              <p className={styles.item_text}>Physics Notes</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbrivation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
          </ul>
          <button className={styles.box_left__button}>
            <FaPlus className="icon" />
          </button>
        </section>
        <section className={styles.box_right}>
          <h1>Main section</h1>
        </section>
      </main>
    </>
  );
}
export default App;
