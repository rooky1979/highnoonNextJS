import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import useSWR from 'swr';

const inter = Inter({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) =>res.json());

export default function preamble() {

  const {data, error} = useSWR('/api/staticdata', fetcher)

  if(error) return <div>Failed to load</div>
  if(!data) return <div>Loading....</div>

  return (//UP TO HERE. TRYING TO DRAG DATA FROM THE PREAMBLE JS FILE
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className={styles.title}>Preamble</h1>
          <p>
            {data.preamble.text1}
        </p>
        </div>
        

      </main>
    </>
  );
}
