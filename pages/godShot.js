import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { godshot } from "../json/godshot";

const godShot = () => {
  const inputFieldText = "Enter a number from 1 - 101";
  const title = "God Shot";

  const [allData, setAllData] = useState(godshot);

  useEffect(() => {
    setAllData(godshot);
  }, []);

  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return data.id.search(value) != -1;
    });

    setFilteredData(result);
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
        <button className={styles.btn} onClick="">{/* random for onClick */}
          Deal
        </button>
      </form>
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
};
export default godShot;
