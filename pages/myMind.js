import styles from "@/styles/Home.module.css";
import { mymind } from "../json/mymind";
import Tool from "@/components/Tool";

const myMind = () => {
  const inputFieldText = "Enter a number from 1 - 526";
  const title = "My mind is out to get me";
  const quoteNo = 526;

  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>{title}</h1>
            <Tool book={mymind} placeholder={inputFieldText} godshot={quoteNo} />
          </div>
        </div>
      </main>
    </>
  );
};
export default myMind;
