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

      <section>
        <h2>Few differences</h2>
        <p>
          Currently, the library is meant for React and CRA environment 
          which means It shows deferences about implementation details 
          from documentation to flat Nextjs.
        </p>

        <p>
          <small>
            <i>
              An adaptation from this library to be implemented with vanilla-extact 
              would be valuable to undercover the details of combine both 
              (Nextjs & Transition Gruoup) and conclude about limitations, advantages, constrains and How-To.
            </i>
          </small>
        </p>
      </section>
      </main>
    </div>
  );
}
