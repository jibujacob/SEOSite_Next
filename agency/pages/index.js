import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by next app" />
      </Head>
      This is homepage

    </div>
  )
}