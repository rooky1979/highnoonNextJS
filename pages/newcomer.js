import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Newcomer = () => {
  const { data, error } = useSWR("/api/newcomerAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const newcomerText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Newcomer Resources</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{newcomerText.newcomer.text}
          <br></br><br></br>
          {newcomerText.newcomer.text2}
          <br></br><br></br>
          {newcomerText.newcomer.text3}
          <br></br><br></br>
          {newcomerText.newcomer.text4}
          <br></br><br></br>
          <span><strong>AA PREAMBLE:  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text5}
          <br></br><br></br>
          {newcomerText.newcomer.text6}
          <br></br><br></br>
          {newcomerText.newcomer.text7}
          <br></br><br></br>
          {newcomerText.newcomer.text8}
          <br></br><br></br>
          {newcomerText.newcomer.text9}
          <br></br>
          {newcomerText.newcomer.text10}
          <br></br><br></br>
          <span><strong>ZOOM ETIQUETTE:  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text11}
          <br></br><br></br>
          {newcomerText.newcomer.text12}
          <br></br><br></br>
          {newcomerText.newcomer.text13}
          <br></br><br></br>
          {newcomerText.newcomer.text14}
          <br></br><br></br>
          {newcomerText.newcomer.text15}
          <br></br><br></br>
          {newcomerText.newcomer.text16}
          <br></br><br></br>
          <span><strong>AA SAFETY CARD ADAPTED FOR ONLINE (SHORT VERSION):  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text18}
          <br></br><br></br>
          {newcomerText.newcomer.text19}
          <br></br><br></br>
          {newcomerText.newcomer.text20}
          <br></br><br></br>
          {newcomerText.newcomer.text21}
          <br></br><br></br>
          <span><strong>VIRTUAL BASKET:  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text22}
          <br></br><br></br>
          {newcomerText.newcomer.text23}
          <br></br><br></br>
          {newcomerText.newcomer.text24}
          <br></br><br></br>
          {newcomerText.newcomer.text25}
          <br></br><br></br>
          <span><strong>INTRODUCTIONS AND BIRTHDAYS:  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text26}
          <br></br><br></br>
          {newcomerText.newcomer.text27}
          <br></br><br></br>
          {newcomerText.newcomer.text28}
          <br></br><br></br>
          <span><strong>TOOLS:  </strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text29}
          <br></br><br></br>
          {newcomerText.newcomer.text30}
          <br></br><br></br>
          <span><strong>WITH 5 MINUTES LEFT</strong></span>
          <br></br><br></br>
          <span><strong>BURNING DESIRE</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text33}
          <br></br><br></br>
          {newcomerText.newcomer.text34}
          <br></br><br></br>
          <span><strong>WITH 2 MINUTES LEFT</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text36}
          <br></br><br></br>
          <span><strong>ANNOUNCEMENTS (CHAT copy/paste):</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text38}
          <br></br><br></br>
          {newcomerText.newcomer.text39}
          <br></br><br></br>
          {newcomerText.newcomer.text40}
          <br></br><br></br>
          {newcomerText.newcomer.text41}
          <br></br><br></br>
          {newcomerText.newcomer.text42}
          <br></br><br></br>
          <span><strong>Optional Prayers:</strong></span>
          <br></br>
          {newcomerText.newcomer.text44}
          <br></br>
          {newcomerText.newcomer.text45}
          <br></br>
          {newcomerText.newcomer.text46}
          <br></br>
          {newcomerText.newcomer.text47}
          <br></br><br></br>
          <span><strong>RESPONSIBILITY STATEMENT:</strong></span>
          <br></br><br></br>
          {newcomerText.newcomer.text49}
          <br></br><br></br>
          </p>
        </div>
      </main>
    </>
  );
}
export default Newcomer;