import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Birthday!!</title>
        <meta name="description" content="It's Keegan's Birthday!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Happy Birthday Keegan! We Love You!</h1>
    </div>
  )
}

export default Home
