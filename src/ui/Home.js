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
          <span
            className={cx(styles.tag, styles.time)}
            style={{ width: "fit-content", display: "flex", margin: " auto" }}
          >
            Registration Closes: August 1, 2022{" "}
          </span>
          <br />
        </div>
        <div style={{ textAlign: "center", margin: "0px auto" }}>
          <span
            className={cx(styles.tag, styles.time)}
            style={{ width: "fit-content", display: "flex", margin: " auto" }}
          >
            {" "}
            Event Dates: September 10 – 15, 2022{" "}
          </span>
          <Countdown
            date={`2022-09-10T00:00:00`}
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
        <br/>
        <br/>
        <h1
          style={{ textAlign: "center", color: "#002856 " }}
        >
          Welcome{" "}
        </h1>
        <div>
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Get ready for this special opportunity in an idyllic setting. You’ll
            build relationships with other Distributors and build corporate
            connections in beautiful Croatia. Meet in the medieval town of
            Dubrovnik, over amazing meals, and at astounding group activities.
            Work or play? It will be hard to tell. 
            <br />
            <br />
            See you soon!
            <br />
            <br />
            Steve Fife
            <br />
            Chief Executive Officer
            <br />
            <br />{" "}
          </h2>
        </div>
        <div>
          <h3>A Little History on Sun Gardens Dubrovnik:</h3>
          <p style={{ background: "lightgrey", padding: "5px" }}>
            In 1512, the Florentine statesman Piero Soderini was driven into
            exile by the Medici family and is reputed to have settled in the
            stone castle (palazzo) in the grounds of what is now Sun Gardens
            Dubrovnik until his return to Italy. The original palace still
            stands and forms a picturesque focal point within the resort
            gardens.
            <br />
            <br />
            Parts of the site were first developed in the late 1980s as a resort
            frequented by European and local tourists. The on-site nightclub at
            the time became a popular hangout for many of Croatia’s rock
            musicians.
            <br />
            <br />
            During the 1991-1995 war, Dubrovnik was subjected to a siege lasting
            many months. The city was extensively shelled damaging many historic
            buildings and much of the surrounding areas. Sun Gardens Dubrovnik
            was also badly damaged, burned and looted.
            <br />
            <br /> In 2008, a major redevelopment of the site began. The
            residences, pools, and promenade areas were upgraded, replaced and
            extended, whilst the hotel, spa conference and event facilities and
            sports centre were constructed. Sun Gardens Dubrovnik opened as a
            fully-fledged luxury integrated resort in July 2009.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
