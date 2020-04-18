import styles from "./Prevention.module.css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
//NOTE NOTE :  FOR SOME REASON VARIANTS variants={fadeInUp} is not working in this page. therefore inline tags are used.
// const fadeInUp = {
//   initial: {
//     y: 60,
//     opacity: 0,
//     transition: { duration: 0.6, ease: easing },
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: easing,
//     },
//   },
// };

export const Prevention = () => (
  <Container initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <Row>
      <Col>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Col className={styles.prevention}>
            <motion.span
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={styles.image}
              key={styles.image}
            >
              <img src="/images/Asset_5.svg" />
            </motion.span>
            <motion.span className={styles.titles}>
              <motion.span className={styles.maintitle}>Prevention</motion.span>
              <span className={styles.subtitle}>Check WHO Guidelines</span>
            </motion.span>
            <motion.span
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={styles.button}
            >
              <div className={styles.btnbg}>
                <img src="/images/arrow_1.svg" />
              </div>
            </motion.span>
          </Col>
        </motion.div>
      </Col>
    </Row>
  </Container>
);

export default Prevention;
