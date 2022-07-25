import Head from "next/head";
import styles from "../styles/Home.module.css";

// components
import { Navigation } from "../components/Navigation";
import { CssTransitionComponent } from "../components/CssTransitionComponent";

export default function CssTransition() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSSTransition How-To</title>
        <meta
          name="description"
          content="How-To React CSSTransition Component"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <h2>CSSTransition Component</h2>
        <p className={styles.article}>
          CSSTransition applies class names along the transition as{" "}
          <code>*-state</code> in order to activate the CSS transition. Matching
          this class names gives total control on the transition behaviour.
          <CssTransitionComponent />
        </p>

        <article className={styles.article}>
          <h3>Fully owned styles</h3>
          <p>
            When the in prop is set to true, the child component will first
            receive the class <code>example-enter</code>, then the <code>example-enter-active</code> and
            so on...
          </p>
          
          <p>
            Targeting those prefix, It's possible to create custom transitions on top of them. Example:
          </p>
          <code className={styles.code}>
            <pre>
              {`
            .my-node-enter {
                opacity: 0;
              }
              .my-node-enter-active {
                opacity: 1;
                transition: opacity 200ms;
              }
              .my-node-exit {
                opacity: 1;
              }
              .my-node-exit-active {
                opacity: 0;
                transition: opacity 200ms;
              }
              
            `}
            </pre>
          </code>
        </article>
      </main>
    </div>
  );
}
