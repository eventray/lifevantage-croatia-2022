import React from "react";
import gus from "../scss/gus.module.scss";
import cx from "classnames";
import styles from "../scss/accommodations.module.scss";
import { Anchor } from "../components/Anchor";

import { Layout } from "../components/Layout";

import map from "../img/accommodations/map.png";
import pdf from "../img/accommodations/resort.pdf";

export function Accommodations() {
  return (
    <Layout noMargin>
      <>
        <div
          className={styles.container}
          style={{ borderRadius: "9px", marginTop: "20px" }}
        >
          <h2 className={cx(gus.textCenter)}>
            AWARD-WINNING WALT DISNEY WORLD SWAN & DOLPHIN RESORT{" "}
          </h2>

          <br />
          <br />
          <div
            className={cx(
              styles.flex,
              styles.reverse,
              styles.margin,
              gus.padding1
            )}
          >
            <div style={{ marginLeft: "30px", textAlign: "left" }}>
              <p style={{ textAlign: "left" }}>
                Enjoy 4 nights at the Dolphin hotel! Just 20 minutes from the Orlando
                airport, it is centrally located in the heart of Walt Disney
                World.
                <br />
                <br /> Besides being just a short distance away from the theme
                parks, the Dolphin hotel is also home to a number of fun
                recreational activities. From pristine pools and beaches, to the
                kids-only Camp Dolphin, young guests are kept entertained even
                after they return from a day at the park. The Dolphin hotel is
                also located near many activities that parents can enjoy such as
                spending a relaxing afternoon at the Mandara Spa or playing a
                round of golf on any one of the four championship Walt Disney
                World golf courses.
                <br />
                <br />
                The Swan & Dolphin Resort offers the following conveniences to
                help make your stay at the Disney resort worry-free:
                <br />
                <br />
                <ul style={{ marginLeft: "30px" }}>
                  <li>Two on-site Disney planning centers</li>
                  <li>Specialty shops</li>
                  <li>Coin-operated launderette</li>
                  <li>
                    Four ATM machines (two in the Dolphin and two at the Swan)
                  </li>
                  <li>Two business centers</li>
                  <li>Concierge services</li>
                  <li>24-hour bell stand</li>
                  <li>Two airline boarding pass kiosks</li>
                  <li>Self or valet parking</li>
                </ul>
                <br />
                <br />
                Resort Services Package:
                <ul style={{ marginLeft: "30px" }}>
                  <li> Complimentary bottled water replenished daily </li>
                  <li> High speed internet access </li>
                  <li> Unlimited admission to the fitness centers </li>
                  <li>
                    $30 off spa services of $200 or more at The Mandara Spa
                    during each day of your visit (1) offer per room per night
                  </li>
                  <li> Complimentary 30-minute Swan Paddle Boat ride</li>
                </ul>
                <br />
                <u>Parking</u>
                <br />
                Valet Parking Rates:
                <br />
                <p style={{ marginLeft: "30px" }}>
                  Day Use Valet - $39.00 plus tax each exit
                  <br />
                  Overnight Valet - $39.00 plus tax per day
                </p>
                <br />
                Self-Parking Rates:
                <br />
                <p style={{ marginLeft: "30px" }}>
                  Day Parking - $29.00 plus tax <br />
                  Overnight Guest Parking - $29.00 plus tax per day{" "}
                </p>
                <br />
                Located in the heart of the most magical place on earth, the
                Walt Disney World Swan & Dolphin Resort provides a truly
                extraordinary backdrop for your vacation!
              </p>
            </div>
          </div>

          <h2>Resort Map </h2>
          <div
            className={cx(
              styles.flex,
              styles.reverse,
              styles.margin,
              gus.padding1
            )}
            style={{ justifyContent: "center" }}
          >
            <div className={cx(styles.margin5)}>
              <Anchor target="_blank" href={pdf}>
                <div style={{ minWidth: "320px" }}>
                  <img
                    style={{ width: "100%", maxHeight: "500px" }}
                    src={map}
                    alt={"San Marco Hotel"}
                    className={styles.margin}
                  />
                  <p
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",

                      color: "#2696D4",
                    }}
                  >
                    *Click to open PDF
                  </p>
                </div>
              </Anchor>{" "}
            </div>
          </div>
          <p
            className={cx(styles.reverse, styles.margin, gus.padding1)}
            style={{ marginLeft: "30px", textAlign: "left" }}
          >
            Walk: Take a leisurely stroll.
            <br />
            <br />
            Boat: Take a complimentary water taxi from our boat dock to Epcot or
            Disney’s Hollywood Studios. Boats depart every 15-20 minutes.
            <br />
            <br />
            Shuttle Bus: Take complimentary transportation to all Walt Disney
            World parks and attractions, including Disney Springs. Buses depart
            every 20-30 minutes.
            <br />
            <br />
            *Check the{" "}
            <Anchor href={"https://swandolphin.com/mobile-app/"}>
              Walt Disney World Swan and Dolphin App
            </Anchor>{" "}
            for the latest openings and hours of operation.
          </p>
        </div>
      </>
    </Layout>
  );
}
