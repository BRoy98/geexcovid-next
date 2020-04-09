import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "reactstrap";
export const Header = () => (
  <Container>
    <Row>
      <Col md="12" className={styles.heading}>
        <img
          className={styles.image}
          src="/svg/Flag_Of_India.svg"
          alt="ZEIT Logo"
        />
        <span className={styles.india}>India</span>
        <span className={styles.covid}>Covid-19 Outbreak</span>
      </Col>
    </Row>
  </Container>
);
export default Header;
