import Header from "../header/Header";
import BottomNav from "../bottomnav/bottomNav";
import styles from "./Parent.module.css";

const Parent = (props) => (
  <div className={styles.parentBg}>
    <Header />
    {props.children}
    <BottomNav page={props.page} />
  </div>
);

export default Parent;
