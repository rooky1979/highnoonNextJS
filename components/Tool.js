import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
//import { mymind } from "../json/mymind";

const Tool = ({ book, placeholder, godshot }) => {
  const [allData, setAllData] = useState(book);

  useEffect(() => {
    setAllData(book);
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

  let rand = Math.random() * godshot;
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
      <form>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          onChange={(e) => handleSearch(e)}
        />
        <button  type="button" className={styles.btn} onClick={random}>
          Random
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
