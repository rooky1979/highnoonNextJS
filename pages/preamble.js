import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function preamble() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const preambleText = JSON.parse(data);
  return (
    //UP TO HERE. TRYING TO DRAG DATA FROM THE PREAMBLE JS FILE
    <>
      <main className={styles.readingsmain}>
      <h1 className={styles.title}>Preamble</h1>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{preambleText.preamble.text1}
          <br></br><br></br>
          {preambleText.preamble.text2}</p>
        </div>
        <Link href="./" className={styles.btn}>Back</Link>
      </main>
    </>
  );
}
