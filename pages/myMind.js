import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import  mymind  from "../json/mymind";

const inter = Inter({ subsets: ["latin"] });

export default function myMind() {

  const [allData, setAllData] = useState(mymind);

  useEffect(() => {
    setAllData(mymind);
  },[])

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
            <h1 className={styles.title}>My mind is out to get me</h1>
            <form>
              <input
                className={styles.input}
                type="text"
                id="mymind"
                name="mymind"
                placeholder="Enter a number from 1 - 526"
                onChange={(e) => handleSearch(e)}
              />
              <button className={styles.btn} onClick="">
                Deal
              </button>
            </form>
            {filteredData?.map((saying, index) => (
              <div className={styles.quotecard} key={saying.id}>
                <div className={styles.readingtext}>
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
