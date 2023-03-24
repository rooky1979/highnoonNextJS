import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Traditions = () => {
  const { data, error } = useSWR("/api/traditionsAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const traditionsText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>12 Traditions of Alcoholics Anonymous</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{traditionsText.traditions.text}
          <br></br><br></br>
          {traditionsText.traditions.text2}
          <br></br><br></br>
          {traditionsText.traditions.text3}
          <br></br><br></br>
          {traditionsText.traditions.text4}
          <br></br><br></br>
          {traditionsText.traditions.text5}
          <br></br><br></br>
          {traditionsText.traditions.text6}
          <br></br><br></br>
          {traditionsText.traditions.text7}
          <br></br><br></br>
          {traditionsText.traditions.text8}
          <br></br><br></br>
          {traditionsText.traditions.text9}
          <br></br><br></br>
          {traditionsText.traditions.text10}
          <br></br><br></br>
          {traditionsText.traditions.text11}
          <br></br><br></br>
          {traditionsText.traditions.text12}
          <br></br><br></br>
          </p>
        </div>
      </main>
    </>
  );
}
export default Traditions;