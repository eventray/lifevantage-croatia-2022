import Countdown from "../components/Countdown";
import React from "react";
import cx from "classnames";
import styles from "../scss/app.module.scss";

function Home() {
  return (
    <div className={cx(styles.theme1, styles.theme)}>
      <div className={styles.section1} id="section1">
        <div className={styles.landingBackground} />
      </div>

      <div className={cx(styles.section2)}>
        <div style={{ textAlign: "center", margin: "0px auto" }}>
          <span className={cx(styles.tag, styles.time)}>July 20-24, 2022</span>
          <Countdown
            date={`2022-07-20T00:00:00`}
            show={["days"]}
            timeLabelStyles={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
            timeStyles={{
              color: "#2696D4",
              textAlign: "center",
              marginTop: "0px",
            }}
          />
        </div>
        <h1
          style={{ textAlign: "center", marginTop: "-20px", color: "#002856 " }}
        >
          Welcome{" "}
        </h1>
        <div>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            We look forward to you and your families joining us in Orlando July
            20th-24th at the Walt Disney World Swan and Dolphin Resort.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
