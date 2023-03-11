import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { mymind } from "../json/mymind";

const inter = Inter({ subsets: ["latin"] });

export default function myMind() {
  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>My mind is out to get me</h1>
            <form>
              <input
                className={styles.input}
                type="text"
                id="mymind"
                name="mymind"
                placeholder="Enter a number from 1 - 526"
              />
              <button className={styles.btn} onClick="">
                Deal
              </button>
            </form>
            {mymind.map((saying) => (
              <div className={styles.quotecard}>
                <div className={styles.readingtext}>
                  {saying.id}: {saying.quote}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
