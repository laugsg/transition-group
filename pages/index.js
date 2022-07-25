import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// components
import { Navigation } from '../components/Navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How-To React Transition Group</title>
        <meta name="description" content="How-To React Transition Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{ color: "blue" }}>Research</span>
        </h1>

        <p className={styles.description}>
          An investigation about Transition Group library to be used in DS.
        </p>
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
