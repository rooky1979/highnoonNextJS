import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Chapter5 = () => {
  const { data, error } = useSWR("/api/chapter5API", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const chapter5Text = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Chapter 5 - How It Works</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{chapter5Text.chapter5.text1}
          <br></br><br></br>
          {chapter5Text.chapter5.text2}
          <br></br><br></br>
          {chapter5Text.chapter5.text3}
          <br></br><br></br>
          {chapter5Text.chapter5.text4}
          <br></br><br></br>
          {chapter5Text.chapter5.text5}
          <br></br><br></br>
          {chapter5Text.chapter5.text6}
          <br></br><br></br>
          {chapter5Text.chapter5.text7}
          <br></br><br></br>
          {chapter5Text.chapter5.text8}
          <br></br><br></br>
          {chapter5Text.chapter5.text9}
          <br></br><br></br>
          {chapter5Text.chapter5.text10}
          <br></br><br></br>
          {chapter5Text.chapter5.text11}
          <br></br><br></br>
          {chapter5Text.chapter5.text12}
          <br></br><br></br>
          {chapter5Text.chapter5.text13}
          <br></br><br></br>
          {chapter5Text.chapter5.text14}
          <br></br><br></br>
          {chapter5Text.chapter5.text15}
          <br></br><br></br>
          {chapter5Text.chapter5.text16}
          <br></br><br></br>
          {chapter5Text.chapter5.text17}
          <br></br><br></br>
          {chapter5Text.chapter5.text18}
          <br></br><br></br>
          {chapter5Text.chapter5.text19}
          <br></br><br></br>
          {chapter5Text.chapter5.text20}
          <br></br><br></br>
          {chapter5Text.chapter5.text21}

          </p>
        </div>
      </main>
    </>
  );
}
export default Chapter5;