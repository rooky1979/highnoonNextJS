import styles from "../styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PostInChat = () => {
  const { data, error } = useSWR("/api/chatAPI", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div className={styles.spinner} ></div>;

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
          <br></br><br></br>
          {chatText.chat.text14}
          <br></br><br></br>
          {chatText.chat.text15}
          <br></br><br></br>
          {chatText.chat.text16}
          <br></br><br></br>
          {chatText.chat.text17}
          <br></br><br></br>
          {chatText.chat.text18}
          <br></br><br></br>
          </p>
        </div>
      </main>
    </>
  );
}
export default PostInChat;