import styles from "./app.module.css";
import { FaPlus } from "react-icons/fa6";

function App() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.box_left}>
          <p className={styles.title}>Pocket Notes</p>

          <ul className={styles.box_left__container} role="div">
            <li className={`${styles.item}`} role="button">
              <p className={`${styles.item_abbreviation} color_pink`}>PY</p>
              <p className={styles.item_text}>Python Notes</p>
            </li>
            <li className={`${styles.item}`} role="button">
              <p className={`${styles.item_abbreviation} color_pink`}>CS</p>
              <p className={styles.item_text}>Computer Science</p>
            </li>
            <li className={`${styles.item}`} role="button">
              <p className={`${styles.item_abbreviation}`}>PH</p>
              <p className={styles.item_text}>Physics Notes</p>
            </li>
            <li className={styles.item} role="button">
              <p className={styles.item_abbreviation}>CA</p>
              <p className={styles.item_text}>Current Affairs</p>
            </li>
          </ul>
          <button className={`btn ${styles.box_left__button}`}>
            <FaPlus className="icon" />
          </button>
        </section>
        {/* <div className={styles.prompt}> */}
        <div className={styles.prompt_box}>
          <p className={styles.prompt_box__title}>Create new group</p>
          <div className={styles.prompt_box__row}>
            <p className={styles.prompt_box__text}>Group name</p>
            <input
              type="text"
              className={styles.prompt_box__input}
              placeholder="Enter group name "
            />
          </div>
          <div className={styles.prompt_box__row}>
            <p className={styles.prompt_box__text}>Choose colour</p>
            <ul className={styles.colors}>
              <li
                className={`${styles.color} color_purple`}
                role="button"
                value="purple"
              ></li>
              <li
                className={`${styles.color} color_pink`}
                role="button"
                value="pink"
              ></li>
              <li
                className={`${styles.color} color_sky`}
                role="button"
                value="sky"
              ></li>
              <li
                className={`${styles.color} color_salamon`}
                role="button"
                value="salamon"
              ></li>
              <li
                className={`${styles.color} color_blue`}
                role="button"
                value="blue"
              ></li>
              <li
                className={`${styles.color} color_blue_light`}
                role="button"
                value="blue_light"
              ></li>
            </ul>
          </div>
          <button className={`btn ${styles.btn__create_group}`}>Create</button>
        </div>
        {/* </div> */}
        <section className={styles.box_right}>
          <h1>Main section</h1>
        </section>
      </main>
    </>
  );
}
export default App;
