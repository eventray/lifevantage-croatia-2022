import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import room1 from "../img/rooms/room1.png";
import room2 from "../img/rooms/room2.png";

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
            At the end of the day, guest rooms offer the perfect retreat for
            rest and relaxation. The centerpiece of the rooms is The Westin
            Heavenly Bed® – featuring a pillow-top mattress, a white goose-down
            comforter, high thread count sheets, and four overstuffed pillows.
            You don’t just sleep in it, you lose yourself in it!
          </p>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={room1}
                alt={"room"}
                className={styles.margin}
              />
            </div>
          </div>

          <br />
          <div>
            <h4>Check-In</h4>
            <p>
              3:00 p.m.(Early check in is available if your room is ready; if
              not, luggage storage is available.){" "}
            </p>
            <br />
            <h4>Check-out</h4>
            <p>11:00 a.m.</p>
          </div>
          <br />

          <h4>Room Types:</h4>
          <p>
            1 King Bed + 1 Sofa Bed (full size)
            <br />
            2 Double Beds
            <br />
            <br />
            Room Features:
            <ul style={{ marginLeft: "30px" }}>
              <li> All Rooms are Non-Smoking</li>
              <li> Make-Up Mirror</li>
              <li> Hair Dryer</li>
              <li>Safe</li>
              <li> Iron / Ironing Board</li>
              <li> Single Serve Brew Coffee Makers</li>
              <li> In-Room Mini Refrigerators</li>
              <li> Clock Radio with Dual USB Charging Stations</li>
              <li> Individual Climate Control</li>
            </ul>
          </p>
          <br />
          <h4 style={{ textAlign: "center" }}>Dolphin Guest Room Floor Plan</h4>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={room2}
                alt={"room"}
                className={styles.margin}
              />
            </div>
          </div>
          <p style={{ color: "red" }}>
            <i>
              *Not all room have balconies.
              <br />
              **Room configurations and furnishings may vary.
            </i>
          </p>
        </div>{" "}
      </div>
    </Layout>
  );
}
