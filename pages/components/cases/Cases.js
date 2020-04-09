import { Container, Row, Col } from "reactstrap";
import styles from "./Cases.module.css";
const Cases = () => (
  <Container>
    <Row className={styles.cases}>
      <Col xs="6" sm="6" md="3">
        <div className={styles.g_infections}>
          <span className={styles.logo}>
            <img src="/images/Asset_1.svg" />
          </span>
          <span className={styles.count}>4314</span>
          <span className={styles.title}>Infections</span>
        </div>
      </Col>
      <Col xs="6" sm="6" md="3">
        <div className={styles.g_active}>
          <span className={styles.logo}>
            <img src="/images/Asset_4.svg" />
          </span>
          <span className={styles.count}>0</span>
          <span className={styles.title}>Active</span>
        </div>
      </Col>
      <Col xs="6" sm="6" md="3">
        <div className={styles.g_recoveries}>
          <span className={styles.logo}>
            <img src="/images/Asset_3.svg" />
          </span>
          <span className={styles.count}>328</span>
          <span className={styles.title}>Recoveries</span>
        </div>
      </Col>
      <Col xs="6" sm="6" md="3">
        <div className={styles.g_death}>
          <span className={styles.logo}>
            <img src="/images/Asset_2.svg" />
          </span>
          <span className={styles.count}>118</span>
          <span className={styles.title}>Deaths</span>
        </div>
      </Col>
    </Row>
  </Container>
);
export default Cases;
