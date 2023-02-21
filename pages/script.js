import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function preamble() {
  const { data, error } = useSWR("/api/scriptAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const scriptText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>12 Traditions of Alcoholics Anonymous</h1>
      <Link href="./" className={styles.btn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{scriptText.script.text}
          <br></br><br></br>
          {scriptText.script.text2}
          <br></br><br></br>
          {scriptText.script.text3}
          <br></br><br></br>
          {scriptText.script.text4}
          <br></br><br></br>
          <span><strong>AA PREAMBLE:  </strong></span>
          <br></br><br></br>
          {scriptText.script.text5}
          <br></br><br></br>
          {scriptText.script.text6}
          <br></br><br></br>
          {scriptText.script.text7}
          <br></br><br></br>
          {scriptText.script.text8}
          <br></br><br></br>
          {scriptText.script.text9}
          <br></br>
          {scriptText.script.text10}
          <br></br><br></br>
          <span><strong>ZOOM ETIQUETTE:  </strong></span>
          <br></br><br></br>
          {scriptText.script.text11}
          <br></br><br></br>
          {scriptText.script.text12}
          <br></br><br></br>
          {scriptText.script.text13}
          <br></br><br></br>
          {scriptText.script.text14}
          <br></br><br></br>
          {scriptText.script.text15}
          <br></br><br></br>
          {scriptText.script.text16}
          <br></br><br></br>
          <span><strong>AA SAFETY CARD ADAPTED FOR ONLINE (SHORT VERSION):  </strong></span>
          <br></br><br></br>
          {scriptText.script.text18}
          <br></br><br></br>
          {scriptText.script.text19}
          <br></br><br></br>
          {scriptText.script.text20}
          <br></br><br></br>
          {scriptText.script.text21}
          <br></br><br></br>
          <span><strong>VIRTUAL BASKET:  </strong></span>
          <br></br><br></br>
          {scriptText.script.text22}
          <br></br><br></br>
          {scriptText.script.text23}
          <br></br><br></br>
          {scriptText.script.text24}
          <br></br><br></br>
          {scriptText.script.text25}
          <br></br><br></br>
          <span><strong>INTRODUCTIONS AND BIRTHDAYS:  </strong></span>
          <br></br><br></br>
          {scriptText.script.text26}
          <br></br><br></br>
          {scriptText.script.text27}
          <br></br><br></br>
          {scriptText.script.text28}
          <br></br><br></br>
          <span><strong>TOOLS:  </strong></span>
          <br></br><br></br>
          {scriptText.script.text29}
          <br></br><br></br>
          {scriptText.script.text30}
          <br></br><br></br>
          <span><strong>WITH 5 MINUTES LEFT</strong></span>
          <br></br><br></br>
          <span><strong>BURNING DESIRE</strong></span>
          <br></br><br></br>
          {scriptText.script.text33}
          <br></br><br></br>
          {scriptText.script.text34}
          <br></br><br></br>
          <span><strong>WITH 2 MINUTES LEFT</strong></span>
          <br></br><br></br>
          {scriptText.script.text36}
          <br></br><br></br>
          <span><strong>ANNOUNCEMENTS (CHAT copy/paste):</strong></span>
          <br></br><br></br>
          {scriptText.script.text38}
          <br></br><br></br>
          {scriptText.script.text39}
          <br></br><br></br>
          {scriptText.script.text40}
          <br></br><br></br>
          {scriptText.script.text41}
          <br></br><br></br>
          {scriptText.script.text42}
          <br></br><br></br>
          <span><strong>Optional Prayers:</strong></span>
          <br></br>
          {scriptText.script.text44}
          <br></br>
          {scriptText.script.text45}
          <br></br>
          {scriptText.script.text46}
          <br></br>
          {scriptText.script.text47}
          <br></br><br></br>
          <span><strong>RESPONSIBILITY STATEMENT:</strong></span>
          <br></br><br></br>
          {scriptText.script.text49}
          <br></br><br></br>
          </p>
        </div>
      </main>
    </>
  );
}