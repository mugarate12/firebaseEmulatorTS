import { error } from 'console'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import { createAnything } from './../firebase/anything'

export default function Home() {
  async function create() {
    await createAnything()
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className={styles.container}>
      <button
      className={styles.button}
        onClick={() => create()}
      >
        Insere dados na collection anything
      </button>
    </div>
  )
}
