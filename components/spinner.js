import Image from "next/image";

export default function Spinner() {
  return  <div className={styles.card}>
  <Image src="/spinner.gif" alt="loading..." width="100" height="100" />;
  </div>
}
