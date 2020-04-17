import { Container, Row, Col } from "reactstrap";
import styles from "./Cases.module.css";
import { ResponsiveLine } from "@nivo/line";
import { motion } from "framer-motion";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 0,
      },
      {
        x: "helicopter",
        y: 0,
      },
      {
        x: "boat",
        y: 0,
      },
      {
        x: "train",
        y: 1,
      },
      {
        x: "subway",
        y: 3,
      },
      {
        x: "bus",
        y: 3,
      },
      {
        x: "car",
        y: 2,
      },
      {
        x: "moto",
        y: 4,
      },
      {
        x: "bicycle",
        y: 5,
      },
      {
        x: "horse",
        y: 50,
      },
      {
        x: "skateboard",
        y: 36,
      },
      {
        x: "others",
        y: 60,
      },
    ],
  },
];

const MyResponsiveLine = ({ data, color }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    curve={"cardinal"}
    axisTop={null}
    axisRight={null}
    axisBottom={null}
    axisLeft={null}
    lineWidth={3}
    enableArea={false}
    areaOpacity={0.1}
    enableGridX={false}
    enableGridY={false}
    enablePoints={false}
    colors={color}
  />
);

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
const easing = [0.6, -0.5, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Cases = (props) => {
  var totalConfirmed = [
    {
      id: "totalConfirmed",
      data: [],
    },
  ];
  var totalActive = [
    {
      id: "totalActive",
      data: [],
    },
  ];
  var totalRecoveries = [
    {
      id: "totalRecoveries",
      data: [],
    },
  ];
  var totalDeaths = [
    {
      id: "totalDeaths",
      data: [],
    },
  ];
  console.log("ts" + props.timeSeries);
  props.timeSeries.forEach((dayData, index) => {
    if (index == 0) {
      totalConfirmed[0].data.push({
        x: dayData.date,
        y: dayData.totalconfirmed,
      });
      totalRecoveries[0].data.push({
        x: dayData.date,
        y: dayData.totalrecovered,
      });
      totalDeaths[0].data.push({
        x: dayData.date,
        y: dayData.totaldeceased,
      });
      totalActive[0].data.push({
        x: dayData.date,
        y:
          dayData.totalconfirmed -
          dayData.totalrecovered -
          dayData.totaldeceased,
      });
    } else {
      totalConfirmed[0].data.push({
        x: dayData.date,
        y: dayData.totalconfirmed - props.timeSeries[index - 1].totalconfirmed,
      });
      totalRecoveries[0].data.push({
        x: dayData.date,
        y: dayData.totalrecovered - props.timeSeries[index - 1].totalrecovered,
      });
      totalDeaths[0].data.push({
        x: dayData.date,
        y: dayData.totaldeceased - props.timeSeries[index - 1].totaldeceased,
      });
      var pastArray = props.timeSeries[index - 1];
      var past =
        pastArray.totalconfirmed -
        pastArray.totalrecovered -
        pastArray.totaldeceased;
      var present =
        dayData.totalconfirmed - dayData.totalrecovered - dayData.totaldeceased;
      totalActive[0].data.push({
        x: dayData.date,
        y: present - past,
      });
      console.log(
        dayData.totalConfirmed -
          dayData.totalrecovered -
          dayData.totaldeceased -
          props.timeSeries[index - 1].totalconfirmed
      );
    }
  });

  console.log("totalActive :", totalActive);

  console.log("totalConfirmed: ", totalConfirmed);

  return (
    <motion.div variants={stagger}>
      <Container>
        <Row className={styles.cases}>
          <div></div>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.case_card, styles.g_infections].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: easing, duration: 0.4, delay: 0.2 }}
            >
              <span className={styles.logo}>
                <motion.div animate={iconAnimation} transition={iconTransition}>
                  <img className={styles.caseIcon} src="/images/Asset_1.svg" />
                </motion.div>
              </span>
              {/* <span>+315</span> */}
              <span className={styles.count}>
                {props.counts.totalConfirmed}
              </span>
              <span className={styles.title}>Infections</span>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(1.4px)",
                }}
              >
                <MyResponsiveLine
                  data={totalConfirmed}
                  color={"#FC312FBF"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.case_card, styles.g_active].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: easing, duration: 0.6, delay: 0.4 }}
            >
              <span className={styles.logo}>
                <motion.div animate={iconAnimation} transition={iconTransition}>
                  <img className={styles.caseIcon} src="/images/Asset_2.svg" />
                </motion.div>
              </span>
              <span className={styles.count}>{props.counts.totalActive}</span>
              <span className={styles.title}>Hospitalized</span>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(1.4px)",
                }}
              >
                <MyResponsiveLine
                  data={totalActive}
                  color={"#F7C93FBF"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.case_card, styles.g_recoveries].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: easing, duration: 0.8, delay: 0.6 }}
            >
              <span className={styles.logo}>
                <motion.div animate={iconAnimation} transition={iconTransition}>
                  <img className={styles.caseIcon} src="/images/Asset_3.svg" />
                </motion.div>
              </span>
              <span className={styles.count}>
                {props.counts.totalRecoveries}
              </span>
              <span className={styles.title}>Recoveries</span>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(1.4px)",
                }}
              >
                <MyResponsiveLine
                  data={totalRecoveries}
                  color={"#24B94ABF"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.g_death, styles.case_card].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: easing, duration: 0.9, delay: 0.8 }}
            >
              <span className={styles.logo}>
                <motion.div animate={iconAnimation} transition={iconTransition}>
                  <img className={styles.caseIcon} src="/images/Asset_4.svg" />
                </motion.div>
              </span>
              <span className={styles.count}>{props.counts.totalDeaths}</span>
              <span className={styles.title}>Deaths</span>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  filter: "blur(1.4px)",
                }}
              >
                <MyResponsiveLine
                  data={totalDeaths}
                  color={"#F46767BF"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Cases;
