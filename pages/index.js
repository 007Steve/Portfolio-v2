import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stephen Plummer</title>
        <meta name="description" content="Stephen Plummer" />
        <link rel="icon" href="/spicon.png" />
      </Head>

      <h1>AUSTIN</h1>
    </div>
  )
}
