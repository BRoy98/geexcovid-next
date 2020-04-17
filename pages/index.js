import Cases from "../components/home/cases/Cases";
import Prevention from "../components/home/prevention/Prevention";
import Parent from "../components/parent/Parent";
import fetch from "isomorphic-unfetch";

const Home = (props) => (
  <Parent page={"home"}>
    <Cases
      counts={props.coronaData.today}
      timeSeries={props.coronaData.timeSeries}
    />
    <Prevention />
  </Parent>
);

Home.getInitialProps = async function () {
  const res = await fetch("https://api.covid19india.org/data.json");
  const data = await res.json();

  var totalConfirmed = 0,
    totalActive = 0,
    totalRecoveries = 0,
    totalDeaths = 0;

  data.statewise.forEach((state, index) => {
    if (index !== 0) {
      totalConfirmed += parseInt(state.confirmed);
      totalActive += parseInt(state.active);
      totalRecoveries += parseInt(state.recovered);
      totalDeaths += parseInt(state.deaths);
    }
  });
  return {
    coronaData: {
      today: {
        totalConfirmed: totalConfirmed,
        totalActive: totalActive,
        totalRecoveries: totalRecoveries,
        totalDeaths: totalDeaths,
      },
      timeSeries: data.cases_time_series,
    },
  };
};

export default Home;
