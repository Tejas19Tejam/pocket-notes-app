import styles from './app.css'


function App() {
  return <>
  <aside className={styles.aside}>
    <h1>Pocket notes</h1>
    <ul>
      <li>
        <p>PY</p>
        <p>Python Notes</p>
      </li>
    </ul>
  </aside>
  <main  className={styles.main}></main>
  </>
} 
export default App;
