import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
//import { mymind } from "../json/mymind";

const Tool = ({ book, placeholder }) => {
  const [allData, setAllData] = useState(book);

  useEffect(() => {
    setAllData(book);
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
      <form>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          onChange={(e) => handleSearch(e)}
        />
        <button className={styles.btn} onClick="">{/* random for onClick */}
          Deal
        </button>
      </form>
      {filteredData?.map((saying) => (
        <div className={styles.quotecard} key={saying.id}>
          <div className={styles.readingtext}>
            {saying.id}: {saying.quote}
          </div>
        </div>
      ))}
    </>
  );
};
export default Tool;
