import Head from "next/head";
import Header from "./components/header/Header";
import Cases from "./components/cases/Cases";
import { Container, Row, Col } from "reactstrap";
const Home = () => (
  <div className="EntirePage">
    <Header />
    <Cases />
  </div>
);

export default Home;
