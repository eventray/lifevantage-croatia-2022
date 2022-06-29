import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import help from "../img/legacy/legacy.png";
import logo from "../img/legacy/Legacy-Logo.png";

import { Anchor } from "../components/Anchor";

export function Legacy() {
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
            <br /> LEGACY
          </h2>
          <br />
          <strong style={{ color: "#2696D4", fontSize: "20px" }}>
            Date:
          </strong>{" "}
          Wednesday, September 14
          <br />
          <br />
          <strong style={{ color: "#2696D4", fontSize: "20px" }}>Time: </strong>
          9:00 AM
          <br />
          <br />
          <strong style={{ color: "#2696D4", fontSize: "20px" }}>
            Where to Meet:
          </strong>{" "}
          Sun Gardens Ballroom
          <br />
          <br />
          <p>
            Since the Russian invasion of Ukraine, over 20,000 Ukrainians have
            sought refuge in Croatia. Most of them require the most basic aid in
            food and hygiene supplies. According to Ukrainian associations in
            Croatia, the refugees primary wish is to return to their homes, but
            many will have to stay longer because their cities and
            infrastructure have been destroyed.
          </p>
          <br />
          <p>
            To standardize and facilitate the collection and distribution of aid
            for those in need, the Croatian Red Cross has created a package with
            supplies for two or four people containing basic foods and hygienic
            necessities. In addition, The LifeVantage Legacy project will
            partner with local organizations including local supermarket and
            wholesale chains, to provide additional supplies, coordination, and
            manpower to this effort.
            <br />
            <br />
            Together, we can make a difference for those who have been affected
            by the conflict in Ukraine.
            <br />
            <br />
            <div>
              <img
                style={{
                  minWidth: "300px",
                  minHeight: "280px",
                }}
                src={help}
                width="100%"
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </p>
          <br />
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Please{" "}
            <Anchor
              target="_blank"
              href="https://www.lifevantage.com/us-en/shop/lifevantage-legacy"
            >
              <u> Donate</u>{" "}
            </Anchor>
            Today!
          </h2>
          <div>
            <img
              style={{
                minWidth: "300px",
                minHeight: "280px",
              }}
              src={logo}
              width="70%"
              alt={"San Marco Hotel"}
              className={styles.margin}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
