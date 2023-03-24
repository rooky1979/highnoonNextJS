import styles from "../styles/Home.module.css";
import { bbcards } from "../json/bbcards";
import Tool from "../components/Tool";

const bbCards = () => {

  const inputFieldText = "Enter a number between 1 - 46";
  const title = "Big Book Cards";
  const quoteNo = 46;

  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>{title}</h1>
            <Tool book={bbcards} placeholder={inputFieldText} godshot={quoteNo}/>
          </div>
        </div>
      </main>
    </>
  );
}
export default bbCards;