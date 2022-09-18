import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState(0);

  const Subtract = () => {
    setNumber(number - 1);
  };

  const Add = () => {
    setTimeout(() => {
      setNumber((prevNum) => {
        return prevNum + 1;
      });
    }, 2000);
  };

  return (
    <section className={styles.main}>
      <h1 style={{ fontSize: '2.5rem' }}>useState Counter</h1>
      <div className={styles.number}>
        <span>{number}</span>
      </div>
      <div className={styles.Thebuttons}>
        <button
          className={`${styles.Abutton} ${styles.redButton}`}
          onClick={Subtract}
        >
          - Subtract
        </button>
        <button
          className={`${styles.Abutton} ${styles.whiteButton}`}
          onClick={() => {
            setNumber(0);
          }}
        >
          Reset
        </button>
        <button
          className={`${styles.Abutton} ${styles.blueButton}`}
          onClick={Add}
        >
          + Add
        </button>
      </div>
    </section>
  );
}
