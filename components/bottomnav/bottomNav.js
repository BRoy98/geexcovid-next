import styles from "./bottomNav.module.css";
import Link from 'next/link';

const BottomNav = (props) => (
  
  <div className={styles.navbar}>
    <div className={styles.nav}>
      
      <Link href="/">
        <span className={props.page == 'home' ? styles.isSelected : styles.isNotSelected}>OVERVIEW</span>
      </Link>
      <Link href="/news">
        <span className={props.page == 'news' ? styles.isSelected : styles.isNotSelected}>NEWS</span>
      </Link>
      {/* <Link href="/prevention">
        <span className={props.page == 'prevention' ? styles.isSelected : styles.isNotSelected}>PREVENTION</span>
      </Link> */}
      <Link href="/helpline">
        <span className={props.page == 'helpline' ? styles.isSelected : styles.isNotSelected}>HELPLINES</span>
      </Link>
      
      <Link href="/about">
        <span className={props.page == 'about' ? styles.isSelected : styles.isNotSelected}>ABOUT</span>
      </Link>
      
    </div>
  </div>
);
export default BottomNav;
