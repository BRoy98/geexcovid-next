import Header from "../header/Header";
import BottomNav from "../bottomnav/bottomNav";

const Parent = (props) => (
  <div>
    <Header />
    {props.children}
    <BottomNav page={props.page} />
  </div>
);

export default Parent;
