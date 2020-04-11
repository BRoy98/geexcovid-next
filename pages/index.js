import Header from "./components/header/Header";
import Cases from "./components/cases/Cases";
import Prevention from "./components/prevention/Prevention";
import BottomNav from "./components/bottomnav/bottomNav";
const Home = () => (
  <div className="EntirePage">
    <Header />
    <Cases />
    <Prevention />
    <BottomNav />
  </div>
);

export default Home;
