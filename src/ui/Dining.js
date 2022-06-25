import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import shulaSteak from "../img/dining/shulaSteak.png";
import todd from "../img/dining/todd.png";
import cabana from "../img/dining/cabana.png";
import fountain from "../img/dining/fountain.png";
import freshMedi from "../img/dining/freshMedi.png";
import picabu from "../img/dining/picabu.png";
import fuel from "../img/dining/fuel.png";
import phins from "../img/dining/phins.png";
import shulaLounge from "../img/dining/shulaLounge.png";
import toddLounge from "../img/dining/toddLounge.png";

import { Anchor } from "../components/Anchor";

export function Dining() {
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
            <br /> DINING
          </h2>
          <br />
          <h3>
            <u>Signature</u>
          </h3>
          <h4>Dress Code </h4>
          <ul style={{ textAlign: "left", padding: "0px 20px" }}>
            <li>
              Men must wear khakis, slacks or dress shorts and shirts. Jeans may
              be worn if in good condition. Sport coats are optional.
            </li>
            <li>
              Women must wear dress pants, skirts, dresses or dress shorts.
              Jeans may be worn if in good condition.
            </li>{" "}
            <li>
              Not permitted: tank tops, swimsuits, swimsuit cover-ups, hats for
              gentlemen, cut-offs and t-shirts with offensive language and/or
              graphics.
            </li>
          </ul>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/shulas-steak-house/">
              Shula’s Steak House{" "}
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={shulaSteak}
                alt={"shulaSteak"}
                className={styles.margin}
              />
            </div>
          </div>
          <br />
          <p>
            Themed after the 1972 Miami Dolphins’ “Perfect Season” – the only
            team in NFL history to finish a season undefeated, their custom cuts
            and aging process are the highest in the industry. The Premium Black
            Angus Beef® steaks accompanied with their aging process make up
            their award winning SHULA CUT®, the best beef money can buy. You
            won’t find a better steak anywhere.
            <br />
            <i>
              {" "}
              *Dinner only.{" "}
              <Anchor href="https://www.opentable.com/restref/client/?rid=171706&restref=171706&lang=en-US&r3uid=GUlhIkTQ8&corrid=d8da1f6c-cb1c-4e87-91db-2d1b99198fe2">
                Reservations{" "}
              </Anchor>{" "}
              recommended.
            </i>
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/todd-englishs-bluezoo/">
              Todd English’s Bluezoo{" "}
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={todd}
                alt={"todd"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            This AAA Four-Diamond creation of internationally renowned celebrity
            chef Todd English features coastal cuisine with both international
            and New American culinary influences. From the signature simply fish
            to the two-pound Maine “Cantonese” lobster, Bluezoo’s menu serves
            blissful bites for every palate. The restaurant’s award-winning
            design by Jeffrey Beers captures an ethereal, underwater theme with
            sophistication.
            <br />
            <i>
              {" "}
              *Dinner only.{" "}
              <Anchor href="https://www.opentable.com/restref/client/?rid=171709&restref=171709&lang=en-US&r3uid=lGCYUJ0OPk&corrid=579322bb-0072-4bd7-88ea-134b61d50598">
                Reservations{" "}
              </Anchor>{" "}
              recommended.
            </i>
          </p>
          <br />
          <h3>
            <u>Casual</u>
          </h3>
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/cabana-bar-and-beach-club/">
              Cabana Bar and Beach Club
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={cabana}
                alt={"cabana"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            Kick back poolside for a flatbread, fish tacos or grass-fed organic
            burger. Located just steps from the Dolphin lap pool, the outdoor
            Cabana Bar and Beach Club encourages everyone to “come as they are”
            for savory treats including a sophisticated variety of appetizers,
            salads, and entrees. 
            <br />
            <i>*Open daily for lunch and dinner</i>
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/fountain/">
              Fountain
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={fountain}
                alt={"fountain"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            This ice cream fountain and snack shop is the ideal stop for crisp
            salads, custom-grilled burgers and a delectable array of hearty
            sandwiches and sweet treats.  It’s hard to resist the hand-dipped
            and soft-serve ice cream, malts, and shakes.
            <br />
            <i>*Open for lunch and dinner.</i>
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/fresh-mediterranean-market/">
              Fresh Mediterranean Market
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={freshMedi}
                alt={"freshMedi"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            At Fresh Mediterranean Market, they have gone to great lengths in an
            effort to provide you with some of the finest, most wholesome, local
            products available. Serving made-to-order breakfast dishes, along
            with a full buffet, they are honored to have the opportunity to
            present ingredients from local artisans and craftsmen. They take a
            healthy, less is more approach. The less they tinker with the local
            products, the more you will enjoy them.  Sangria and wine are also
            featured!
            <br />
            <i>*Open for breakfast.</i>
          </p>
          <br />
          <h3>
            <u>Quick Serve</u>
          </h3>
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/picabu/">
              Picabu
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={picabu}
                alt={"picabu"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            Picabu, for whom the restaurant is named, is an artful animated
            wood-carved character adding excitement to the dining experience. 
            The 24-hour fare, served cafeteria style, includes hot and cold
            sandwiches, pizza and other favorites, perfect for family dining. A
            Taqueria section allows guests to custom-order tacos and burritos.
            <br />
            Picabu Sundries Shop (adjacent to Picabu eatery) offers snacks,
            toiletries, sodas and sweets as part of this fully-stocked
            convenience store.  Visitors can stock up on everything needed for a
            full day at the Disney theme parks.
          </p>
          <br />

          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/fuel/">
              Fuel
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={fuel}
                alt={"fuel"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            On the go? Looking to stock up for the theme parks? Stop by Fuel to
            recharge, refresh, and fill-up on coffee, ready-made sandwiches and
            snacks. Fuel offers guests a convenient way to energize during the
            day, whether it’s filled with business meetings or exploring the
            theme parks. Our baristas can create your favorite caffeinated
            concoctions to carry you through the day. You can also enjoy a fresh
            frozen dessert at our D.I.Y. yogurt stand or grab a decadent sweet
            pastry created by our pastry chefs. Fuel now offers fresh baked
            pizza to satisfy those late-night cravings.
          </p>
          <br />
          <h3>
            <u>Lounges</u>
          </h3>
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/phins/">
              Phins
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={phins}
                alt={"phins"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            Phins is a contemporary lounge centrally located in the Dolphin
            lobby.  Guests can enjoy light bites, sipping on custom-crafted
            cocktails, a glass of vintage wine, or even a frosty mug of our very
            own Phins and Feathers beer.
            <br />
            Phins is the ideal gathering spot for family, friends and
            colleagues. Try Phins’ adult punch daily special, Sunday morning
            specialty brunch cocktails or their own signature cocktails. 
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/shulas-lounge/">
              Shula’s Lounge
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={shulaLounge}
                alt={"shulaLounge"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            A cozy atmosphere with leather chairs, plenty of sports channels to
            choose from, and a selection of fine beer, wine, and after-dinner
            drinks.”
            <br />
            <i>*Open evenings.</i>
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/dining/todd-englishs-bluezoo-lounge/">
              Todd English’s Bluezoo Lounge
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={toddLounge}
                alt={"toddLounge"}
                className={styles.margin}
              />
            </div>
          </div>
          <p>
            Toast the good life with handmade classic cocktails, fine champagne,
            or specialty cordials in a chic underwater setting around a blue,
            backlit bar. Those seeking a unique taste can find the latest
            creations from the resort’s expert mixologists, such as the Bazooka
            Joe Vodka, the flaming Burnt Orange as well as the venue’s signature
            cocktail, the Zooberry.  Light menu offered.
            <br />
          </p>
          <br />
        </div>
      </div>
    </Layout>
  );
}
