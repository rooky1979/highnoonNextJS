import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function myMind() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.formstyle}>
          <h1 className={styles.title}>My mind is out to get me</h1>
          <form action="/send-data-here" method="post">
            <input
            className={styles.input}
              type="text"
              id="mymind"
              name="mymmind"
              placeholder="Enter a number from 1 - 526"
            />
            <button className={styles.btn} type="submit">Deal</button>
          </form>
          </div>
        </div>
        <div></div>
      </main>
    </>
  );
}
