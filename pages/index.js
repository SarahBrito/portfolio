import Head from 'next/head'
import About from '../components/About';
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Site Pessoal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main className={styles.container}>
        <Profile />
        <About />
      </main>
      
    </div>
    
  )
}

