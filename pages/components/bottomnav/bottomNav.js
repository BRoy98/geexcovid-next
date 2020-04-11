import styles from "./bottomNav.module.css";
import { render } from "react-dom";
//
let active = false;
let a = "styles.isSelected";
//console.log(className);

function colorChange() {
  active = true;
  let a = "bottomNav_isSelected__249nU";
  if (active) {
    a = "bottomNav_isSelected__249nU";
  }
}
const BottomNav = () => (
  <div className={styles.navbar}>
    <div className={styles.nav}>
      <span className={styles.isSelected}>OVERVIEW</span>
      <span className={styles.isNotSelected}>NEWS</span>
      <span className={styles.isNotSelected}>HELPLINES</span>
      <span className={styles.isNotSelected}>PREVENTION</span>
      <span className={styles.isNotSelected}>ABOUT</span>
    </div>
  </div>
);
export default BottomNav;
