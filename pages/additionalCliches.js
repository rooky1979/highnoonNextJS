import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { additionalcliches } from "../json/additionalcliches";

const inter = Inter({ subsets: ["latin"] });

export default function additionalCliches() {
  const [allData, setAllData] = useState(additionalcliches);

  useEffect(() => {
    setAllData(additionalcliches);
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
            <h1 className={styles.title}>101 Additional Cliches</h1>
            <form>
              <input
                className={styles.input}
                type="text"
                id="mymind"
                name="mymind"
                placeholder="Enter a number from 1 - 101"
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
