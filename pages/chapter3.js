import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function preamble() {
  const { data, error } = useSWR("/api/chapter3API", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const chapter3Text = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Chapter 3 - More About Alcoholism</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{chapter3Text.chapter3.text1}
          <br></br><br></br>
          {chapter3Text.chapter3.text2}
          <br></br><br></br>
          {chapter3Text.chapter3.text3}
          <br></br><br></br>
          {chapter3Text.chapter3.text4}
          <br></br><br></br>
          {chapter3Text.chapter3.text5}
          <br></br><br></br>
          {chapter3Text.chapter3.text6}
          </p>
        </div>
      </main>
    </>
  );
}
