import React from "react";
import { Layout } from "../components/Layout";
import styles from "../scss/terms.module.scss";

import cx from "classnames";
import gus from "../scss/gus.module.scss";
export function AdditionalGuest() {
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
            All Inclusive{" "}
          </h2>
          <div>
            <p>
              The following services and amenities are INCLUDED as part of the
              All-Inclusive Plan:{" "}
            </p>
            <br />
            <p style={{ marginLeft: "18px" }}>
              <ul>
                <li>Breakfast, lunch, dinner, room service and snacks </li>
                <li>
                  Alcoholic and non-alcoholic drinks, bottled water, specialty
                  coffees and teas at all of Hotel’s food and beverage outlets
                  during their regular hours of operation{" "}
                </li>
                <li>Wi-Fi in public areas and guestrooms </li>
                <li>Mini bar drinks </li>
                <li>Non-motorized water sports </li>
                <li>
                  Exercise facilities, daytime tennis courts, table games,
                  scheduled stage shows and mini club activities (where
                  applicable){" "}
                </li>
                <li>Gratuities </li>
                <li>All applicable taxes</li>
              </ul>
            </p>
            <br />
            <p>
              All meals and beverages are offered at Hotel’s restaurants and
              bars and are available during regular hours of operation.
            </p>
            <br />
            <p>
              The following services are NOT included as part of the
              All-Inclusive Plan:
            </p>
            <br />
            <p style={{ marginLeft: "18px" }}>
              <ul>
                <li>Spa treatments and hair salon services </li>
                <li>
                  Concessions-shop products or services such as, but not limited
                  to tours, excursions, car rentals, etc.
                </li>
                <li>
                  All lessons, i.e., tennis, watersports, scuba, golf, etc.{" "}
                </li>
                <li>
                  Local/long distance calls (800-number service connection fee
                  charges applies){" "}
                </li>
                <li>
                  Wine by the bottle, sake and imported beer available at
                  specialty outlets (for example, Japanese beer){" "}
                </li>
                <li>Laundry and dry clean service</li>
                <li>Business center </li>
                <li>Gift shop purchases </li>
              </ul>
            </p>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}
