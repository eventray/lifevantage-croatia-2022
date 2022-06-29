import React from "react";
import { Layout } from "../components/Layout";
import styles from "../scss/terms.module.scss";

import cx from "classnames";
import gus from "../scss/gus.module.scss";
export function Terms() {
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
            TERMS
          </h2>
          <div style={{ textAlign: "left" }}>
            Distributor account must be in good standing and compensation plan
            active during the qualification period and at time of booking.
            Qualifying positions are non-transferable, non-refundable and are
            only valid for those listed on the account.
            <br />
            <br />
            Trip is based on double occupancy. <br />
            <br /> If a leader has multiple Business Centers that qualify, only
            one will be eligible to attend the Croatia Incentive Trip.
            <br />
            <br />
            LifeVantage reserves the right to change the terms and conditions of
            the incentive trip any time or interpret the rule of qualification
            for the incentive trip and has final decision in the event any
            disputes regarding the qualification requirements.
            <br />
            <br />
            <i>
              The Distributor sales earnings disclosed are potential gross
              earnings and not net of other business expenses and not
              necessarily representative of the actual income, if any, that a
              Distributor can or will earn through the LifeVantage Sales
              Compensation Plan. A Distributor’s earnings will depend on
              individual diligence, work effort and market conditions.
              LifeVantage does not guarantee any income or rank success. See the
              Average Annual Earnings Disclosure for detailed earnings
              information per rank.
            </i>
          </div>
        </div>
      </div>
    </Layout>
  );
}
