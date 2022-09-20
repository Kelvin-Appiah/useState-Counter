import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [integer, setInteger] = useState(0);

  const Add = () => {
    setTimeout(() => {
      setInteger((prevInt) => {
        return prevInt + 1;
      });
    }, 2000);
  };

  const Subtract = () => {
    setInteger(integer - 1);
  };

  return (
    <section className={styles.main}>
      <h1 style={{ fontSize: '2.5rem' }}>useState Counter</h1>
      <div className={styles.number}>
        <span>{integer}</span>
      </div>
      <div className={styles.Thebuttons}>
        <button
          className={`${styles.button} ${styles.subtractButton}`}
          onClick={Subtract}
        >
          - Subtract
        </button>
        <button
          className={`${styles.button} ${styles.resetButton}`}
          onClick={() => {
            setInteger(0);
          }}
        >
          Reset
        </button>
        <button
          className={`${styles.button} ${styles.addButton}`}
          onClick={Add}
        >
          + Add
        </button>
      </div>
    </section>
  );
}
