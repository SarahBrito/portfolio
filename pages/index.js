import Head from 'next/head'
import About from '../components/About';
import Profile from "../components/Profile";

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (

    <div>
     <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Site Pessoal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.container}>
        <Profile />
        <About />
      </main>
    </div>
    
  )
}

