import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Preamble = () => {
  const { data, error } = useSWR("/api/preambleAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div className={styles.spinner} ></div>;

  const preambleText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
          <h1 className={styles.title}>Preamble</h1>
          <Link href="./" className={styles.backbtn}>
            Back
          </Link>
        </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>
            {preambleText.preamble.text1}
            <br></br>
            <br></br>
            {preambleText.preamble.text2}
          </p>
        </div>
      </main>
    </>
  );
};
export default Preamble;
