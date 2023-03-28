import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Sponsor = () => {
  const { data, error } = useSWR("/api/sponsorAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div className={styles.spinner} ></div>;

  const sponsorText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Sponsor Contacts:</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{sponsorText.sponsor.text}
          <br></br><br></br>
          {sponsorText.sponsor.text1}
          <br></br><br></br>
          {sponsorText.sponsor.text2}
          <br></br><br></br>
          {sponsorText.sponsor.text3}
          <br></br><br></br>
          {sponsorText.sponsor.text4}
          </p>
        </div>
      </main>
    </>
  );
}
export default Sponsor;