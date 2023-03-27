import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Newcomer = () => {
  const { data, error } = useSWR("/api/newcomerAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div className={styles.spinner} ></div>;

  const newcomerText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Newcomer Resources</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>
          <span><strong>QUICK LINKS:  </strong></span>
          <br></br><br></br>
            {newcomerText.newcomer.text}
          <br></br><br></br>
          {newcomerText.newcomer.text2}
          <br></br><br></br>
          {newcomerText.newcomer.text3}
          <br></br><br></br>
          {newcomerText.newcomer.text4}
          <br></br><br></br>
          <span><strong>KEY LITERATURE:  </strong></span>
          <br></br><br></br>
          <span><strong>This Is A.A. - An introduction to the A.A. recovery program  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text5}
          <br></br><br></br>
          <span><strong>Is A.A. for You?</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text6}
          <br></br><br></br>
          <span><strong>A Brief Guide to A.A.</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text7}
          <br></br><br></br>
          <span><strong>A.A. Big Book</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text8}
          <br></br><br></br>
          <span><strong>Twelve Steps and Twelve Traditions Book</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text9}
          <br></br><br></br>
          <span><strong>Living Sober Book</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text10}
          <br></br><br></br>
          <span><strong>Questions and Answers on Sponsorship</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text11}
          <br></br><br></br>
          </p>
        </div>
      </main>
    </>
  );
}
export default Newcomer;