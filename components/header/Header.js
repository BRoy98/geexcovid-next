import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "reactstrap";
export const Header = () => (
  <Container>
    <Row className={styles.header_parent}>
      <Col md="12" className={styles.heading}>
        <img
          className={styles.image}
          src="/images/flag.svg"
          alt="India Flag"
        />
        <span className={styles.india}>India</span>
        <span className={styles.covid}>Covid-19 Outbreak</span>
      </Col>
    </Row>
  </Container>
);
export default Header;
