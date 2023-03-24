import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Meeting = () => {
  const { data, error } = useSWR("/api/meetingAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const meetingText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Meeting List</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>{meetingText.meeting.text}
          <br></br><br></br>
          {meetingText.meeting.text2}
          <br></br><br></br>
          {meetingText.meeting.text3}
          <br></br><br></br>
          {meetingText.meeting.text4}
          <br></br><br></br>
          <span><strong>AA PREAMBLE:  </strong></span>
          <br></br><br></br>
          {meetingText.meeting.text5}
          <br></br><br></br>
          {meetingText.meeting.text6}
          <br></br><br></br>
          {meetingText.meeting.text7}
          <br></br><br></br>
          {meetingText.meeting.text8}
          <br></br><br></br>
          {meetingText.meeting.text9}
          <br></br>
          {meetingText.meeting.text10}
          <br></br><br></br>
          <span><strong>ZOOM ETIQUETTE:  </strong></span>
          <br></br><br></br>
          {meetingText.meeting.text11}
          <br></br><br></br>
          {meetingText.meeting.text12}
          <br></br><br></br>
          {meetingText.meeting.text13}
          <br></br><br></br>
          {meetingText.meeting.text14}
          <br></br><br></br>
          {meetingText.meeting.text15}
          <br></br><br></br>
          {meetingText.meeting.text16}
          <br></br><br></br>
          <span><strong>AA SAFETY CARD ADAPTED FOR ONLINE (SHORT VERSION):  </strong></span>
          <br></br><br></br>
          {meetingText.meeting.text18}
          <br></br><br></br>
          {meetingText.meeting.text19}
          <br></br><br></br>
          {meetingText.meeting.text20}
          <br></br><br></br>
          {meetingText.meeting.text21}
          <br></br><br></br>
          <span><strong>VIRTUAL BASKET:  </strong></span>
          <br></br><br></br>
          {meetingText.meeting.text22}
          <br></br><br></br>
          {meetingText.meeting.text23}
          <br></br><br></br>
          {meetingText.meeting.text24}
          <br></br><br></br>
          {meetingText.meeting.text25}
          <br></br><br></br>
          <span><strong>INTRODUCTIONS AND BIRTHDAYS:  </strong></span>
          <br></br><br></br>
          {meetingText.meeting.text26}
          <br></br><br></br>
          {meetingText.meeting.text27}
          <br></br><br></br>
          {meetingText.meeting.text28}
          <br></br><br></br>
          <span><strong>TOOLS:  </strong></span>
          <br></br><br></br>
          {meetingText.meeting.text29}
          <br></br><br></br>
          {meetingText.meeting.text30}
          <br></br><br></br>
          <span><strong>WITH 5 MINUTES LEFT</strong></span>
          <br></br><br></br>
          <span><strong>BURNING DESIRE</strong></span>
          <br></br><br></br>
          {meetingText.meeting.text33}
          <br></br><br></br>
          {meetingText.meeting.text34}
          <br></br><br></br>
          <span><strong>WITH 2 MINUTES LEFT</strong></span>
          <br></br><br></br>
          {meetingText.meeting.text36}
          <br></br><br></br>
          <span><strong>ANNOUNCEMENTS (CHAT copy/paste):</strong></span>
          <br></br><br></br>
          {meetingText.meeting.text38}
          <br></br><br></br>
          {meetingText.meeting.text39}
          <br></br><br></br>
          {meetingText.meeting.text40}
          <br></br><br></br>
          {meetingText.meeting.text41}
          <br></br><br></br>
          {meetingText.meeting.text42}
          <br></br><br></br>
          <span><strong>Optional Prayers:</strong></span>
          <br></br>
          {meetingText.meeting.text44}
          <br></br>
          {meetingText.meeting.text45}
          <br></br>
          {meetingText.meeting.text46}
          <br></br>
          {meetingText.meeting.text47}
          <br></br><br></br>
          <span><strong>RESPONSIBILITY STATEMENT:</strong></span>
          <br></br><br></br>
          {meetingText.meeting.text49}
          <br></br><br></br>
          </p>
        </div>
      </main>
    </>
  );
}
export default Meeting;