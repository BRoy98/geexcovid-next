import styles from "./Prevention.module.css";
import { Container, Row, Col } from "reactstrap";
export const Prevention = () => (
  <Container>
    <Row>
      <Col>
        <Col className={styles.prevention}>
          <span className={styles.image}>
            <img src="/images/Asset_5.svg" />
          </span>
          <span className={styles.titles}>
            <span className={styles.maintitle}>Prevention</span>
            <span className={styles.subtitle}>Check WHO Guidelines</span>
          </span>
          <span className={styles.button}>
            <div class={styles.btnbg}>
              <img src="/images/Arrow_1.svg" />
            </div>
          </span>
        </Col>
      </Col>
    </Row>
  </Container>
);
export default Prevention;
