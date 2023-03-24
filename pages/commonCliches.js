import styles from "../styles/Home.module.css";
import { commoncliches } from "../json/commoncliches";
import Tool from "../components/Tool";

const commonCliches = () => {
  const inputFieldText = "Enter a number from 1 - 101";
  const title = "101 Common Cliches";
  const quoteNo = 101;

  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>{title}</h1>
            <Tool book={commoncliches} placeholder={inputFieldText} godshot={quoteNo} />
          </div>
        </div>
      </main>
    </>
  );
};
export default commonCliches;
