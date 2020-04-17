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
  var totalRecoveries;
  var totalDeaths;

  props.timeSeries.forEach((dayData, index) => {
    if (index == 0) {
      totalConfirmed[0].data.push({
        x: dayData.date,
        y: dayData.totalconfirmed,
      });
    } else {
      totalConfirmed[0].data.push({
        x: dayData.date,
        y: dayData.totalconfirmed - props.timeSeries[index - 1].totalconfirmed,
      });
      console.log(
        dayData.totalconfirmed - props.timeSeries[index - 1].totalconfirmed
      );
    }
  });
  // console.log("totalConfirmed: ", totalConfirmed);

  return (
    <motion.div variants={stagger}>
      <Container>
        <Row className={styles.cases}>
          <div></div>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.case_card, styles.g_infections].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 0.4 }}
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
                }}
              >
                <MyResponsiveLine
                  data={totalConfirmed}
                  color={"#903EF3BF"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.case_card, styles.g_active].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
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
                }}
              >
                <MyResponsiveLine
                  data={data}
                  color={"#F7C93F24"}
                ></MyResponsiveLine>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <MyResponsiveLine
                  data={data}
                  color={"#F7C93F24"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.case_card, styles.g_recoveries].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 0.6 }}
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
                }}
              >
                <MyResponsiveLine
                  data={data}
                  color={"#24B94A24"}
                ></MyResponsiveLine>
              </div>
            </motion.div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <motion.div
              className={[styles.g_death, styles.case_card].join(" ")}
              style={{ position: "relative", overflow: "hidden" }}
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 0.7 }}
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
                }}
              >
                <MyResponsiveLine
                  data={data}
                  color={"#F4676724"}
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
