import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function preamble() {
  const { data, error } = useSWR("/api/responsibilityAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const responsibilityText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Responsibility Statement</h1>
      <Link href="./" className={styles.btn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>
          {responsibilityText.responsibility.text1}
          <br></br><br></br>
          {responsibilityText.responsibility.text2}
          </p>
        </div>
      </main>
    </>
  );
}