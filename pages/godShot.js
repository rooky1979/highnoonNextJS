import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { godshot } from "../json/godshot";

const GodShot = () => {
  const inputFieldText = "Click the button for a random shot from any tool";
  const title = "God Shot";
  const quoteNo = 450;

  const [allData, setAllData] = useState(godshot);

  useEffect(() => {
    setAllData(godshot);
  }, []);

  const [filteredData, setFilteredData] = useState(allData);

  //need a random method for the deal button
  const random = () => {
    let rand = Math.random() * quoteNo;
    rand = Math.floor(rand);
    console.log(rand);

    let result;
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
            <h3 className={styles.title}>{inputFieldText}</h3>
            <div className={styles.inline} >
            <button type="button" className={styles.btn} onClick={random}>
              GodShot
            </button>
            <Link href="./" className={styles.backbtn}>
              Back
            </Link>
            </div>
            {filteredData?.map((saying) => (
              <div className={styles.quotecard} key={saying.id}>
                <div className={styles.quotetext}>
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
export default GodShot;
