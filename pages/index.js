import Cases from "../components/cases/Cases";
import Prevention from "../components/prevention/Prevention";
import Parent from "../components/parent/Parent";

const Home = () => (
  <Parent page={'home'}>
    <Cases />
    <Prevention />
  </Parent>
);

export default Home;
