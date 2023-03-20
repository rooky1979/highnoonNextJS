import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { sobercards } from "../json/sobercards";

const SoberCards = () => {

  const inputFieldText = "Enter a card and suit (e.g. 10H, AS, QD)";
  const title = "Sober Cards";
  const quoteNo = 52;

  const [allData, setAllData] = useState(sobercards);

  useEffect(() => {
    setAllData(sobercards);
  }, []);

  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (e) => {
    let value = e.target.value.toUpperCase();
    let result = [];
    result = allData.filter((data) => {
      return data.id.search(value) != -1;
    });
    setFilteredData(result);
    console.log(filteredData);
  };

  //need a random method for the deal button
  const random = () => {

  let rand = Math.random() * quoteNo;
  rand = Math.floor(rand);

  let result = [];
    result = allData.filter((data) => {
      return data.card.search(rand) != -1;
    });
    setFilteredData(result);
    console.log(filteredData);
};

  return (
    <>
      <main className={styles.readingsmain}>
        <div>
          <div className={styles.formstyle}>
            <h1 className={styles.title}>{title}</h1>
            <form>
        <input
          className={styles.input}
          type="text"
          placeholder={inputFieldText}
          onChange={(e) => handleSearch(e)}
        />
        <button  type="button" className={styles.btn} onClick={random}>
          Random
        </button>
        <Link href="./" className={styles.backbtn}>Back</Link>
      </form>
      {filteredData?.map((saying) => (
        <div className={styles.quotecard} key={saying.id}>
          <div className={styles.quotetext}>
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
export default SoberCards;