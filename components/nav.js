import styles from "@/styles/Home.module.css";
import Image from 'next/image'

const Nav = () => {
    return <div className={styles.navbar}>
  <img className={styles.navimg} src="/HNGlong.png" alt="High Noon Gamble"/>
  </div>
};
export default Nav;