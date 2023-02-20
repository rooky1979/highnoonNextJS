import styles from "@/styles/Home.module.css";
import Image from 'next/image'

const Nav = () => {
    return <div className={styles.navbar}>
    <Image
    className={styles.navimg}
    src="/HNGlong.png"
    alt="Picture of the author"
    width={850}
    height={150}
    priority
  />
  </div>
};
export default Nav;