import { Container, Row, Col } from "reactstrap";
import styles from "./Cases.module.css";
import { motion } from "framer-motion";

const iconAnimation = {
  scale: [1, 1.07, 1, 1.07],
  y: [0, 2, -5, 2],
};

const iconTransition = {
  duration: 3,
  ease: "easeInOut",
  times: [0.445, 0.05, 0.55, 0.95],
  loop: Infinity,
};

const Cases = (props) => (
  <Container>
    <Row className={styles.cases}>
      <div></div>
      <Col xs="6" sm="6" md="3">
        <div
          className={[styles.case_card, styles.g_infections].join(" ")}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <span className={styles.logo}>
            <motion.div animate={iconAnimation} transition={iconTransition}>
              <img className={styles.caseIcon} src="/images/Asset_1.svg" />
            </motion.div>
          </span>
          {/* <span>+315</span> */}
          <span className={styles.count}>{props.counts.totalConfirmed}</span>
          <span className={styles.title}>Infections</span>
          
        </div>
      </Col>
      <Col xs="6" sm="6" md="3">
        <div className={[styles.case_card, styles.g_active].join(" ")}>
          <span className={styles.logo}>
            <motion.div animate={iconAnimation} transition={iconTransition}>
              <img className={styles.caseIcon} src="/images/Asset_2.svg" />
            </motion.div>
          </span>
          <span className={styles.count}>{props.counts.totalActive}</span>
          <span className={styles.title}>Hospitalized</span>
        </div>
      </Col>
      <Col xs="6" sm="6" md="3">
        <div className={[styles.case_card, styles.g_recoveries].join(" ")}>
          <span className={styles.logo}>
            <motion.div animate={iconAnimation} transition={iconTransition}>
              <img className={styles.caseIcon} src="/images/Asset_3.svg" />
            </motion.div>
          </span>
          <span className={styles.count}>{props.counts.totalRecoveries}</span>
          <span className={styles.title}>Recoveries</span>
        </div>
      </Col>
      <Col xs="6" sm="6" md="3">
        <div className={[styles.g_death, styles.case_card].join(" ")}>
          <span className={styles.logo}>
            <motion.div animate={iconAnimation} transition={iconTransition}>
              <img className={styles.caseIcon} src="/images/Asset_4.svg" />
            </motion.div>
          </span>
          <span className={styles.count}>{props.counts.totalDeaths}</span>
          <span className={styles.title}>Deaths</span>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Cases;
