import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import styles1 from "../scss/accommodations.module.scss";
import one from "../img/activities/1.png";
import two from "../img/activities/2.png";
import three from "../img/activities/3.png";

import { Anchor } from "../components/Anchor";

export function Activities() {
  return (
    <Layout noMargin>
      <div className={styles.container}>
        <div
          className={
            (styles.container, cx(styles.flex, styles.reverse, styles.margin))
          }
          style={{ backgroundColor: "white", borderRadius: "9px" }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <br /> ACTIVITES
            <br />
            <br />
            Buy-In via Registration
          </h2>
          <br />

          <br />
          <h3>Boat Tour (Tiny Island & Dubrovnik Walls)</h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
          >
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "5px" }}
              >
                <p>
                  <strong> Date:</strong> Sunday, September 11th
                  <br />
                  <strong> Time:</strong> 10:00am – 2:00pm <br />
                  <strong>Where to meet: </strong>
                  Sun Gardens Resort Port at <strong>9:45am</strong> <br />
                  <strong>Duration:</strong> This sail is 4 hours
                  <br />
                  <strong> What to bring: </strong>
                  Causal wear, hat camera, sunscreen, towels & swimsuit
                  <br /> and small cash bills for bar on the island.
                </p>
                <br />
                <p>
                  Nothing beats slow sailing on historic ships across the
                  turquoise Adriatic Sea in the Dubrovnik archipelago waters.{" "}
                </p>
                <br />
                <p>
                  Ships will leave directly from the Sun Gardens Resort and sail
                  across the channel to Lopud island, an eponymous village home
                  of many famous captains and sailors. You will enjoy exploring
                  the village along Lopud Bay, where a short swim on the beach
                  is also possible.
                </p>
                <br />
                <p>
                  Returning directly to the Sun Gardens Resort, we set sail to
                  the mighty Dubrovnik Walls – amongst the largest and the most
                  monumental city walls in the World. This tour will surely be a
                  memorable experience.{" "}
                </p>
                <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                  <li>
                    <strong>Lunch and Welcome Drink Included</strong>
                    <ul style={{ textAlign: "left", marginLeft: "20px" }}>
                      <li>
                        Lunch (Hot & Cold Pasta options, Potato Gnocchi,
                        Vegetable Risotto, Fresh Seasonal Salads and Fresh
                        Seasonal Fruit).
                      </li>
                      <li>
                        Non – Alcoholic Drink (Juice, Still or Sparkling Water,
                        Coffee or Tea){" "}
                      </li>
                    </ul>
                  </li>
                </ul>
                <br />
                <p>
                  Packaged price of <strong>$135.00 per person </strong>(5 &
                  older) arranged exclusively for LifeVantage Distributors.
                  <br /> *Children (0 - 4) Free
                </p>
                <br />
                <p>
                  If you are interested in this Boat Tour, make sure to add it
                  during registration. Deadline to sign up for this activity is{" "}
                  <strong>NO LATER than Monday, August 1st.</strong>
                </p>
                <br />
                <p>
                  <strong>Please Note:</strong> Once your registration is
                  complete this activity is non-refundable.
                </p>
              </div>
            </div>
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={one}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={two}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </div>
          <br />
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <br /> LifeVantage Group Activity
          </h2>
          <h3>Dubrovnik Challenge</h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
          >
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={three}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "5px" }}
              >
                <p>
                  <strong> Date:</strong> Monday, September 12th
                  <br />
                  <strong> Time:</strong> 8:30am – 12:30pm <br />
                  <strong>Where to meet: </strong>
                  Sun Gardens Ballroom at <strong>8:30am</strong>. <br />
                  <strong>Duration:</strong> Plan on being with the group for 4
                  hours
                  <br />
                  <strong> What to bring: </strong>
                  Comfortable walking shoes, sunglasses & hat
                </p>
                <br />
                <p>
                  Little competition and a whole lot of fun!
                  <br /> Join us for a day out on the town where you will engage
                  in a friendly challenge with your team members and LifeVantage
                  Executives as we take you in and around the Old Town of
                  Dubrovnik.
                  <br /> You will receive a list of assignments to complete
                  while exploring everything this historic site offers.
                </p>
              </div>
            </div>
          </div>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <br /> Optional Buy-In Activities
          </h2>
          <p>
            Dubrovnik is called The Pearl of the Adriatic Sea. With a nickname
            like that, it’s hard not to expect sheer magnificence during your
            visit. You will want to be sure to plan time to go out and see the
            breathtaking scenery.
          </p>
          <br />
          <p>
            <strong>Click the below link</strong> and enter the password{" "}
            <strong>lifevantage</strong> to explore and book the options that
            are packages given exclusively to LifeVantage Distributors. Whether
            you and your team want to go Kayak around the islands, explore the
            Blue Cave, or take a day trip to the UNESCO World Heritage Site of
            Mostar.
          </p>
          <br />
          <p>
            We hope you will be able to find something that fits within your
            budget while not missing out on the sponsored LifeVantage group
            activities.
          </p>
          <Anchor
            target="_blank"
            href="https://ventula-travel.com/private-day-tours/life-vantage-private-day-tours/"
          >
            <br />
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <strong>LifeVantage Exclusive Activity Options</strong>
            </h2>
          </Anchor>
          <p>
            <strong>Please Note: </strong>These additional activities are at
            your own expense and are only available to book on your free time
            outside of the scheduled LifeVantage Group.
          </p>
        </div>
      </div>
    </Layout>
  );
}
