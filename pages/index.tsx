import { error } from 'console'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <button
      className={styles.button}
        onClick={() => {}}
      >
        Insere dados na collection anything
      </button>
    </div>
  )
}
