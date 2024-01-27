import Group from './Group';
import styles from './NotesBox.module.css';
import { IoMdLock } from 'react-icons/io';

function NotesBox({ group }) {
  return (
    <section className={styles.box_right}>
      <header className={styles.header}>
        {<Group name="Computer Science" groupColor="pink" />}
      </header>

      <div className={styles.container}>
        <div className={styles.note}>
          <p className={styles.note_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className={styles.note_timestamp}>
            <li className={styles.note_date}>9 Mar 2023</li>
            <li className={styles.note_time}>10:10 AM</li>
          </ul>
        </div>
        <div className={styles.note}>
          <p className={styles.note_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className={styles.note_timestamp}>
            <li className={styles.note_date}>9 Mar 2023</li>
            <li className={styles.note_time}>10:10 AM</li>
          </ul>
        </div>
        <div className={styles.note}>
          <p className={styles.note_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className={styles.note_timestamp}>
            <li className={styles.note_date}>9 Mar 2023</li>
            <li className={styles.note_time}>10:10 AM</li>
          </ul>
        </div>
        <div className={styles.note}>
          <p className={styles.note_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className={styles.note_timestamp}>
            <li className={styles.note_date}>9 Mar 2023</li>
            <li className={styles.note_time}>10:10 AM</li>
          </ul>
        </div>
        <div className={styles.note}>
          <p className={styles.note_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className={styles.note_timestamp}>
            <li className={styles.note_date}>9 Mar 2023</li>
            <li className={styles.note_time}>10:10 AM</li>
          </ul>
        </div>
        <div className={styles.note}>
          <p className={styles.note_text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <ul className={styles.note_timestamp}>
            <li className={styles.note_date}>9 Mar 2023</li>
            <li className={styles.note_time}>10:10 AM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeScreen() {
  return (
    <>
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
    </>
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
