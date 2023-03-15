import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { godshot } from "../json/godshot";

const soberCards = () => {

  const inputFieldText = "Hit the button for a random shot";
  const title = "God Shot";
  const quoteNo = 450;

  const [allData, setAllData] = useState(godshot);

  useEffect(() => {
    setAllData(godshot);
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
      return data.id.search(rand) != -1;
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
        <p className={styles.title} >{inputFieldText}</p>
        <button  type="button" className={styles.btn} onClick={random}>
          Random
        </button>
      {filteredData?.map((saying) => (
        <div className={styles.quotecard} key={saying.id}>
          <div className={styles.readingtext}>
            {saying.book}: {saying.quote}
          </div>
        </div>
      ))}
          </div>
        </div>
      </main>
    </>
  );
}
export default soberCards;