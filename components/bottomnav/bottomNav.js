import styles from "./bottomNav.module.css";
import Link from "next/link";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Container } from "reactstrap";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const BottomNav = (props, items) => (
  <motion.div
    className={styles.navbar}
    initial="initial"
    animate="animate"
    exit={{ y: 60, opacity: 0, transition: { ease: easing, duration: 0.6 } }}
    variants={fadeInUp}
  >
    <Container>
      <motion.div variants={fadeInUp}>
        <motion.div className={styles.nav}>
          <Link href="/">
            <motion.span
              layoutId="isSelected"
              className={
                props.page == "home" ? styles.isSelected : styles.isNotSelected
              }
            >
              OVERVIEW
            </motion.span>
          </Link>
          <Link href="/news">
            <motion.span
              layoutId="isSelected"
              className={
                props.page == "news" ? styles.isSelected : styles.isNotSelected
              }
            >
              NEWS
            </motion.span>
          </Link>
          {/* <Link href="/prevention">
        <span className={props.page == 'prevention' ? styles.isSelected : styles.isNotSelected}>PREVENTION</span>
      </Link> */}
          <Link href="/helpline">
            <motion.span
              layoutId="isSelected"
              className={
                props.page == "helpline"
                  ? styles.isSelected
                  : styles.isNotSelected
              }
            >
              HELPLINES
            </motion.span>
          </Link>

          <Link href="/about">
            <motion.span
              layoutId="isSelected"
              className={
                props.page == "about" ? styles.isSelected : styles.isNotSelected
              }
            >
              ABOUT
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </Container>
  </motion.div>
);
export default BottomNav;
