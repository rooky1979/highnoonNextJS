import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function preamble() {
  const { data, error } = useSWR("/api/chatAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading....</div>;

  const chatText = JSON.parse(data);
  return (
    <>
      <main className={styles.readingsmain}>
        <div className={styles.inline}>
      <h1 className={styles.title}>Post In Chat</h1>
      <Link href="./" className={styles.backbtn}>Back</Link>
      </div>
        <div className={styles.textpanel}>
          <p className={styles.readingtext}>
          <span><strong>ANNOUNCEMENT ABOUT SAFETY:</strong></span>
          <br></br><br></br>
          {chatText.chat.text1}
          <br></br><br></br>
          {chatText.chat.text2}
          <br></br><br></br>
          {chatText.chat.text3}
          <br></br><br></br>
          {chatText.chat.text4}
          <br></br><br></br>
          {chatText.chat.text5}
          <br></br><br></br>
          {chatText.chat.text6}
          <br></br><br></br>
          <span><strong>END OF MEETING ANNOUNCEMENTS:</strong></span>
          <br></br><br></br>
          {chatText.chat.text7}
          <br></br><br></br>
          {chatText.chat.text8}
          <br></br><br></br>
          <span><strong>Meeting attendance verification/Court card requests:</strong></span>
          <br></br><br></br>
          {chatText.chat.text10}
          <br></br><br></br>
          <span><strong>Questions: </strong></span>
          {chatText.chat.text11}
          <br></br><br></br>
          {chatText.chat.text12}
          <br></br><br></br>
          {chatText.chat.text13}
          <br></br>
          {chatText.chat.text14}
          <br></br>
          {chatText.chat.text15}
          <br></br>
          {chatText.chat.text16}
          <br></br>
          {chatText.chat.text17}
          <br></br><br></br>
          {chatText.chat.text18}
          <br></br><br></br>
          {chatText.chat.text19}
          <br></br><br></br>
          {chatText.chat.text20}
          <br></br><br></br>
          {chatText.chat.text21}
          <br></br><br></br>
          {chatText.chat.text22}
          <br></br><br></br>
          {chatText.chat.text23}
          <br></br><br></br>
          {chatText.chat.text24}
          <br></br><br></br>
          {chatText.chat.text25}
          <br></br><br></br>
          {chatText.chat.text26}
          <br></br><br></br>
          {chatText.chat.text27}
          <br></br><br></br>
          {chatText.chat.text28}
          <br></br><br></br>
          {chatText.chat.text29}
          <br></br><br></br>
          {chatText.chat.text30}
          <br></br><br></br>
          {chatText.chat.text31}
          <br></br><br></br>
          {chatText.chat.text32}
          <br></br><br></br>
          {chatText.chat.text33}
          <br></br><br></br>
          {chatText.chat.text34}
          <br></br><br></br>
          {chatText.chat.text35}
          <br></br><br></br>
          {chatText.chat.text36}
          <br></br><br></br>
          {chatText.chat.text37}
          <br></br><br></br>
          {chatText.chat.text38}
          <br></br><br></br>
          {chatText.chat.text39}
          <br></br><br></br>
          {chatText.chat.text40}
          <br></br><br></br>
          {chatText.chat.text41}
          <br></br><br></br>
          {chatText.chat.text42}
          <br></br><br></br>
          {chatText.chat.text44}
          <br></br><br></br>
          {chatText.chat.text45}
          <br></br><br></br>
          {chatText.chat.text46}
          <br></br><br></br>
          {chatText.chat.text47}
          <br></br><br></br>
          {chatText.chat.text48}
          <br></br><br></br>
          {chatText.chat.text49}
          <br></br><br></br>
          {chatText.chat.text50}
          </p>
        </div>
      </main>
    </>
  );
}