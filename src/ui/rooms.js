import React from "react";
import styles from "../scss/faqs.module.scss";
import styles1 from "../scss/accommodations.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import room1 from "../img/rooms/1.png";
import { Anchor } from "../components/Anchor";

export function rooms() {
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
            <br /> ROOMS
          </h2>
          <br />
          <p>
            Elevate your Dubrovnik experience with our Deluxe Rooms,
            contemporary in design, elegant and lavish in taste. Settle in
            style, open your window, and let the Mediterranean paradise embrace
            you.
          </p>
          <br />
          <h4>Deluxe Room Features:</h4>
          <p>
            Each Room has its own private balcony offering unforgettable views
            of the Adriatic Sea and the islands.{" "}
          </p>
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
                <p style={{ width: "100%", textAlign: "left" }}>
                  <ul>
                    <li>
                      <strong>1 King Bed</strong>
                    </li>
                    <li>Bathrobe and Slippers</li>
                    <li>Luxury Toiletries</li>
                    <li>Hairdryer</li>
                    <li>Coffee and tea provisions</li>
                    <li>Free High-Speed Wireless Internet</li>
                    <li>Mini Bar</li>
                    <li>Satellite and Pay-TV</li>
                    <li>Safe</li>
                  </ul>
                </p>
              </div>
            </div>
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={room1}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            <p>
              <strong>Check-In: </strong> 2:00 pm
            </p>{" "}
            <p>
              <strong>Check-out: </strong> 12:00 pm
            </p>
            <br />
            <p>
              <strong>Max Occupancy Per Room: </strong>2 Adult Guests
              <br />
              <i>*Crib is allowed for infant up to 2 years of age </i>
            </p>
          </p>
          <br />
          <h3>Additional Guests & Additional Nights Information</h3>
          <h4>Additional Guests: </h4>
          <p style={{ textAlign: "left" }}>
            <strong>Includes: </strong>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                Ground Transportation (to/from Dubrovnik Airport & Sun Gardens)
                on program dates. (September 10 – 15th){" "}
              </li>
              <li>5-night hotel stay</li>
              <li>Daily breakfast at Sun Gardens Resort</li>
              <li>Group Meals</li>
              <li>Group Activity</li>
            </ul>
          </p>
          <br />
          <p>
            <p>
              <strong>3rd Additional Adult </strong> (13 & up) $2,600
            </p>{" "}
            <p>
              <strong>4th Additional Adult </strong> (13 & up) $800
            </p>
            <p>
              <strong>Child </strong>(3 – 12): $600
            </p>
            <p>
              <strong>Child </strong>(2 & under) $150
            </p>
          </p>
          <br />
          <h4>Additional Nights:</h4>
          <p>
            The LifeVantage Group hotel rate will be extended for up to three
            nights before and after our program dates. (Requests will be based
            upon the hotel’s availability)
          </p>
          <br />
          <p>
            <strong>Please note:</strong> We are happy for you to bring
            additional people. Based upon the hotel there will be additional
            charges and complications that we are happy to work out with you.{" "}
            <br />
            If you bring additional guests, the nightly room rate listed below
            will increase due to maximum of 2 adults per room. Please reach out
            to{" "}
            <Anchor target="_blank" href={"mailto: croatiarooms@museem.com"}>
              croatiarooms@museem.com{" "}
            </Anchor>
            and we will help find the best solution for you and your family.
          </p>
          <br />
          <p>
            Also, please note: as aligned with the LifeVantage travel procedures
            transportation will <u>not</u> be provided outside of program dates.{" "}
          </p>
          <br />
          <p style={{ textAlign: "right" }}>
            <strong>Deluxe Room</strong> with 1 King Bed (crib allowed)
            <br />
            <strong>Double Occupancy: </strong>$350 USD per night (includes
            taxes and fees)
            <br />
            <i>*Includes resort daily breakfast </i>
          </p>
          <br />
          <p style={{ textAlign: "center" }}>
            If you are interested in adding additional guests or additional
            nights, please email
            <br />{" "}
            <Anchor target="_blank" href={"mailto: croatiarooms@museem.com"}>
              croatiarooms@museem.com{" "}
            </Anchor>
            <strong>NO LATER than Monday, August 1 2022.</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
}
