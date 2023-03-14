import styles from "@/styles/Home.module.css";
import { sobercards } from "../json/sobercards";
import Tool from "@/components/Tool";

const soberCards = () => {

  const inputFieldText = "Enter a card and suit (e.g. 10H, AS, QD)";
  const title = "Sober Cards";

  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>{title}</h1>
            <Tool book={sobercards} placeholder={inputFieldText}/>
          </div>
        </div>
      </main>
    </>
  );
}
export default soberCards;