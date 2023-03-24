import styles from "../styles/Home.module.css";
import { additionalcliches } from "../json/additionalcliches";
import Tool from "../components/Tool";

const additionalCliches = () => {

  const inputFieldText = "Enter a number from 1 - 101";
  const title = "101 Additional Cliches";
  const quoteNo = 101;
  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>{title}</h1>
            <Tool book={additionalcliches} placeholder={inputFieldText} godshot={quoteNo}/>
          </div>
        </div>
      </main>
    </>
  );
}
export default additionalCliches;