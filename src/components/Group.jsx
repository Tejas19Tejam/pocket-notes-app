import styles from './Group.module.css';
import { getAbbreviation } from '../utils/helper';

function Group({ name, groupColor }) {
  return (
    <>
      <p className={`${styles.item_abbreviation} color_${groupColor}`}>
        {getAbbreviation(name)}
      </p>
      <p className={styles.item_text}>{name}</p>
    </>
  );
}

export default Group;
