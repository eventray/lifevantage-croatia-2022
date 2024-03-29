import React from "react";
import { Layout } from "../components/Layout";
import { Anchor } from "../components/Anchor";
import styles from "../scss/faqs.module.scss";

import cx from "classnames";
import gus from "../scss/gus.module.scss";
export function Faqs() {
  return (
    <Layout noMargin>
      <div className={styles.container}>
        <div
          className={
            (styles.container,
            cx(styles.flex, styles.reverse, styles.margin, gus.padding1))
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
            <br />
            FAQs
          </h2>
          <div>
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              What is included in this trip?
            </h3>
            <h4>Airfare for two:</h4>
            <p>
              {" "}
              “You are REQUIRED to book your qualifying flight(s) through the
              LifeVantage travel agency. Once you have completed registration,
              CTI Business Travel, will reach out to you to book your flight(s).{" "}
              <br />
              <br />
              *PLEASE NOTE: LIFEVANTAGE WILL NO LONGER REIMBURSE QUALIFIERS FOR
              FLIGHTS BOOKED ON THEIR OWN.
              <br />
              <br />
              *IF YOU BOOK YOUR GUEST’S FLIGHT ON YOUR OWN AND YOU WANT
              LIFEVANTAGE TO PROVIDE GROUND TRANSPORTATION BETWEEN THE AIRPORT
              AND THE RESORT YOU WILL NEED TO SEND THE FLIGHT ITINERARY TO{" "}
              <Anchor href={"mailto:croatiarooms@museem.com"}>
                CROATIAROOMS@MUSEEM.COM
              </Anchor>{" "}
              BY <strong>MONDAY, AUGUST 1st.</strong>
            </p>
            <br />
            <h4>Transportation:</h4>
            <p>
              LifeVantage will provide transportation for you and your guest
              to/from Dubrovnik Airport and Sun Gardens hotel on program dates.
              (September 10-15th)
              <ul style={{ marginLeft: "30px" }}>
                <li>
                  <strong>Upon arrival into Dubrovnik:</strong> Proceed to the
                  terminal exit where Ventula Travel DMC will greet you, wearing
                  LifeVantage branded shirts and holding a sign displaying the
                  LifeVantage Croatia Incentive logo.
                </li>
                <li>
                  <strong>Upon departure from Sun Gardens:</strong> Transfer
                  notices will be provided to you. (Plan on being ready to leave
                  the Resort 2-3 hours prior to your returning flight).
                </li>
              </ul>
              <br />
              For those arriving early, extending their trips, or choosing to
              fly in and out of a different airport, please make separate
              transportation arrangements.
              <ul style={{ marginLeft: "30px" }}>
                <li>
                  <strong>Please Note:</strong>The Sun Gardens Dubrovnik Resort
                  is 45 minutes from the Dubrovnik Airport, approximately 60
                  Euro for a Taxi.{" "}
                  <ul style={{ marginLeft: "20px" }}>
                    <li>
                      <strong>Old Town</strong> is 20 minutes from the Sun
                      Gardens Resort and is approximately 40 Euro for a Taxi.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <br />
            <h4>Hotel Accommodations for two:</h4>
            <p>
              Attendees will be staying at the Sun Gardens Dubrovnik Resort.
              Lodging costs and taxes are covered for qualified dates.
            </p>
            <br />
            <h4>Meals:</h4>
            <p>
              Daily Breakfast at the hotel. LifeVantage will host Welcome and
              Farewell receptions where food will also be served. LifeVantage
              will also deposit money into attendee's hyperwallet accounts to
              pay for the meals that are not provided.{" "}
            </p>
            <br />
            <h4>Welcome Gifts:</h4>
            <p>
              You will receive a welcome gift when you check in with
              LifeVantage.
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              What is not included in this trip?{" "}
            </h3>
            <h4>Transportation:</h4>
            <p>
              {" "}
              You will be responsible for any transportation costs associated
              with events outside of the Incentive Trip schedule. Additionally,
              you are responsible for any rental cars, taxis or other form of
              transportation you choose to take during the trip.
              <br />
              <br />
              LifeVantage will not cover any of the following:
            </p>
            <br />
            <h4>Hotel Accommodations:</h4>
            <p>
              <ul style={{ marginLeft: "30px" }}>
                <li>
                  Additional hotel nights outside of the nights you have
                  qualified for
                </li>
                <li>Additional room charges (e.g. laundry service, etc.)</li>
              </ul>
            </p>
            <br />
            <h4>Additional Activities:</h4>
            <p>
              LifeVantage will not cover the cost of additional activities you
              choose to do on your own.
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              What should I pack?{" "}
            </h3>
            <h4>
              Average September temperatures in Croatia, are 80 °F for the high
              and 67 °F for the low. Here are a few things we suggest:
            </h4>
            <p>
              <ul style={{ marginLeft: "30px" }}>
                <li>Jacket</li>
                <li>Walking shoes</li>
                <li>Comfortable clothing for activities</li>{" "}
                <li>Sunscreen, sunglasses and a hat</li> <li>Swimwear</li>{" "}
              </ul>
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              What airport will I be flying into?{" "}
            </h3>
            <p>Dubrovnik Airport: Dobrota24, 20213, Čilipi, Croatia</p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              What if I want to arrive early/extend my stay?{" "}
            </h3>
            <p>
              You are welcome to extend your trips (at the beginning or the
              end). However, LifeVantage will not cover any airport transfer
              costs outside of the regular schedule, and rooms at the Sun
              Gardens Dubrovnik can only be booked if the hotel has capacity to
              do so. Please contact{" "}
              <Anchor href={"mailto:croatiarooms@museem.com"}>
                croatiarooms@museem.com{" "}
              </Anchor>{" "}
              to inquire about extended room nights.
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              What is the Croatian Currency?{" "}
            </h3>
            <p>
              Kuna (1hrk=.14 usd)
              <br />
              <strong> Please note:</strong> Most shops will take Euro and very
              few take dollars. American Express Credit Cards are not accepted
              by all shops. Most convenient to have Kuna or Euros on hand at all
              times.{" "}
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              Who should I contact with questions or to make changes to my
              registration?{" "}
            </h3>
            <p>
              {" "}
              <Anchor href={"mailto:croatiarooms@museem.com"}>
                croatiarooms@museem.com{" "}
              </Anchor>{" "}
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              Who should I contact with general event questions?
            </h3>
            <p>
              {" "}
              <Anchor href={"mailto: events@lifevantage.com"}>
                events@lifevantage.com{" "}
              </Anchor>{" "}
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              <strong>
                If I’ve earned the Trip of a Lifetime Incentive in Croatia but
                cannot go, can I receive a substitute reward or allow someone to
                go in my place?
              </strong>
            </h3>
            <p>
              The trip is non-transferable. However, if you cannot attend, you
              are able to receive a $3,000USD deposit into your hyperwallet
              account.
              <br />
              <br /> If you register for the trip and cannot attend, you must
              cancel<strong> NO LATER than August 1, 2022,</strong> by emailing{" "}
              <Anchor href={"mailto:events@lifevantage.com"}>
                events@lifevantage.com{" "}
              </Anchor>
              in order to receive the $3,000USD alternative prize. Following
              August 1, there will be NO EXCEPTIONS on receiving the cash offer
              for any reason including travel restrictions, medical issues, etc
            </p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              Is this trip included in my year end totals for tax purposes?{" "}
            </h3>
            <p> Yes, the value of the trip will be included in your 1099.</p>
            <br />
            <h3
              style={{
                textAlign: "left",
                color: "#012856",
              }}
            >
              How will COVID-19 regulations affect the trip?{" "}
            </h3>
            <p>
              <strong>Upon Entry:</strong> Croatia removed all border crossing
              restrictions; you do not have to provide a negative COVID-19 test
              or show proof of vaccination for entry to Croatia.
              <br />
              <br />
              <strong>Upon Departure:</strong> A negative COVID-19 test is no
              longer required to return to the United States. For International
              Markets, please research travel requirements for returning to your
              home country, so you are aware of any that may apply.
              <br />
              <br /> <strong>Please Note:</strong> All LifeVantage Distributors
              attending the ‘LifeVantage Trip of Lifetime’ in Croatia will be
              responsible for all risks associated with travel, including costs
              and restrictions surrounding Covid-19 and variants. All attendees
              will be responsible for researching and following the guidelines
              and travel restrictions related to their country of origin, i.e.,
              vaccination, negative testing requirements, etc. The CDC suggests
              that all International travel poses additional risks, and while a
              vaccine to enter Croatia is not required, even fully vaccinated
              travelers might be at an increased risk for getting and possible
              spreading some Covid-19 variants. By checking the box during
              registration, participants agree to assume all risks (medical and
              financial) associated with travel and in addition, will
              self-monitor signs and symptoms of Covid-19 (and its variants) and
              remove themselves from group activities if any Covid symptoms
              occur. LifeVantage reserves the right to remove anyone who had
              contracted COVID-19 and variants from group activities and events
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
