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
            <h3>GENERAL INFO</h3>
            <h4>What are the dates of the 2022 Ohana Trip?</h4>
            <p>July 20-24, 2022 </p>
            <br />
            <h4>Where are we going on the 2022 Ohana Trip?</h4>
            <p>
              {" "}
              Walt Disney World in Orlando, Florida
              <br />
              Swan and Dolphin Resort <br />
              1500 Epcot Resorts Blvd. <br />
              Lake Buena Vista, FL 32830
            </p>
            <br />
            <h4>What is the schedule for the 2022 Ohana Trip?</h4>
            <p> Please refer to the “Schedule” tab.</p>
            <br />
            <h4>What is included with my 2022 Ohana Trip?</h4>
            <p>
              {" "}
              First Colony Mortgage will provide the following:
              <ol style={{ marginLeft: "30px" }}>
                <li>
                  Roundtrip Airfare to Orlando for up to 4 individuals (economy
                  seating)
                </li>
                <li>
                  Group Transfers between the airport and the hotel (If you
                  choose to deviate from the event schedule, you will be
                  responsible for your own transfers)
                </li>
                <li>
                  4 Hotel Nights with up to 4 individuals in your room, July
                  20th-24th
                </li>
                <li>
                  Walt Disney World 3-Day Hopper Pass for up to 4 individuals
                </li>
                <li>
                  Welcome Reception at Epcot with special viewing of firework
                  show
                </li>
                <li>Welcome Gift</li>
              </ol>
            </p>
            <br />
            <h4>What is not included with my 2022 Ohana Trip?</h4>
            <p>
              <ol style={{ marginLeft: "30px" }}>
                <li>Cost for additional nights or late checkouts.</li>
                <li>
                  Cost for additional rooms or guests (Airfare, Airport
                  Transfers, Hotel Room, Disney Passes).
                </li>
                <li>Meals</li>
              </ol>{" "}
            </p>
            <br />
            <h4>Is a credit card required at check-in?</h4>
            <p>
              {" "}
              Yes, guests will be required to supply a credit card at check-in
              to cover any incidental charges to their room (spa services, golf,
              extra activities, gift shop purchases, laundry service, etc.).
            </p>
            <br />
            <h4>
              Can I extend my trip to either arrive early or leave at a later
              date?
            </h4>
            <p>
              {" "}
              Yes, you are welcome to extend your trip. However, additional
              nights will be at your own expense. If you are interested in
              adding nights to your reservation at the Dolphin hotel please
              contact{" "}
              <Anchor href="mailto:firstcolony@museem.com.">
                firstcolony@museem.com.{" "}
              </Anchor>{" "}
              Additional nights can only be booked if the hotel has capacity to
              do so.{" "}
            </p>
            <br />
            <h3>PACKING INFO</h3>
            <h4>Is there a dress code for the Welcome Reception?</h4>
            <p>
              The Welcome Reception dress code will be casual. This consists of
              anything like shorts, t-shirts, dresses, sandals, flip flops, etc.
              Anything you feel most comfortable wearing.
            </p>
            <br />
            <h4>What other items should I pack?</h4>
            <p>
              {" "}
              Here are some musts for your trip:
              <ul style={{ marginLeft: "30px" }}>
                <li>Good Walking Shoes</li>
                <li>Hat</li>
                <li>Sunscreen</li>
                <li> Water Bottle</li>
                <li>Comfortable Clothing</li>
                <li>Sunglasses </li>
                <li>Personal Items</li>
                <li>Snacks</li>
                <li>Swimsuit</li>
                <li>Rain Jacket</li>
                <li>Medications </li>
              </ul>
            </p>
            <br />
            <h4>What type of weather can I expect?</h4>
            <p>
              The average July temperatures in Orlando, Florida are a high of
              91° and a low of 75°with an average humidity of 76%. July brings a
              chance of rain showers but also has most sunshine each day.{" "}
            </p>
            <br />
            <h3>TRAVEL INFO</h3>
            <h4>What travel documents will I need?</h4>
            <p>
              Adult passengers 18 years of age and older will need to show proof
              of identification. This could be a valid driver’s license or
              passport. TSA does not require children under 18 to provide
              identification when traveling within the United States.{" "}
            </p>
            <br />
            <h4>How do I book my flights?</h4>
            <p>
              After you register, you will be contacted by the travel agent to
              book your flights.{" "}
            </p>
            <br />
            <h4>How do I catch my transfer from the airport to the hotel?</h4>
            <p>
              Once you unload the plane, take a short ride on the monorail
              system to the main building and follow the signs and escalator
              down to Level 2 - baggage claim area. <br />
              <br />
              Look for a greeter at the bottom of the escalator in the baggage
              claim area holding a sign with your company logo. The greeters are
              dressed in green polo shirts with black slacks. <br />
              <br />
              Please identify yourself to the driver before you claim your
              luggage. Once you have identified yourself to the driver, they
              will give you direction to the baggage carousel for your flight
              and escort you to your waiting vehicle.
            </p>
            <br />
            <h4>How do I catch my transfer back to the airport?</h4>
            <p>
              {" "}
              You will be given a departure notice with this information at the
              FCM registration.
            </p>
            <br />
            <h4>What are the Covid-19 requirements during my trip?</h4>
            <p>
              At this time, face masks are not required for traveling via air or
              ground.{" "}
            </p>
            <br />
            <h4>Walt Disney World:</h4>
            <p>
              {" "}
              By visiting Walt Disney World Resort you voluntarily assume all
              risks related to exposure to COVID-19.
              <br />
              Face coverings are optional for Guests in both outdoor and indoor
              locations, as well as Disney transportation. <br />
              It is recommended Guests who are not fully vaccinated continue
              wearing face coverings in all indoor locations, including indoor
              attractions and theaters and on enclosed transportation. By
              entering Walt Disney World Resort, you are confirming that you and
              all persons in your party are not experiencing any of the
              following symptoms of COVID-19:
              <ul style={{ marginLeft: "30px" }}>
                <li>Fever or chills</li>
                <li>Cough</li>
                <li>Shortness of breath or difficulty breathing</li>
                <li>Fatigue</li>
                <li>Muscle or body aches</li>
                <li>Headache</li>
                <li>New loss of taste or smell</li>
                <li>Sore throat</li>
                <li>Congestion or runny nose</li>
                <li>Nausea or vomiting</li>
                <li>Diarrhea</li>
                <li>
                  do not need to quarantine due to close contact with someone
                  with confirmed or suspected COVID-19
                </li>
                <li>are not under any self-quarantine orders</li>
              </ul>{" "}
              Guests who cannot confirm all of the above criteria must not enter
              Walt Disney World Resort. If at any point during their visit a
              Guest does not meet all of the above criteria, they and their
              traveling party will be required to isolate and may be relocated
              or asked to leave the property.
            </p>
            <br />
            <h3>RESORT INFO</h3>
            <h4>Which hotel are we staying at?</h4>
            <p>We are staying at the Dolphin Hotel. </p>
            <br />
            <h4>What time is check-in at the hotel?</h4>
            <p>
              {" "}
              Check-in time is <strong>3:00pm EST</strong>.
              <br /> Early check-ins are based on availability. If you arrive
              early and your room is not available you can check your luggage at
              the bell desk.
            </p>
            <br />
            <h4>What time is checkout at the hotel?</h4>
            <p>
              {" "}
              Check-out time is at <strong>11:00 am EST</strong>. If your
              departure time is after checkout, you can check your luggage at
              the bell desk until you are ready to leave. You may also request a
              late checkout through the hotel but it will be based on
              availability. You will be responsible for any costs associated
              with a late checkout.
            </p>
            <br /> <h4>What activities are available on property?</h4>
            <p> Please refer to the “Activities” tab.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
