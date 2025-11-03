import Link from "next/link";

import { clsx } from "clsx";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.card}>
        <div className={styles.title}>Next.js Flow Editor</div>
        <div className={styles.nav}>
          <Link href="./flow" className={clsx(styles.button, styles.flow)}>
            <h2>Flow</h2>
          </Link>
          <Link
            href="./workflow"
            className={clsx(styles.button, styles.workflow)}
          >
            <h2> Work FLow</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
