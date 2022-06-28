import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import styles1 from "../scss/accommodations.module.scss";
import one from "../img/dining/1.png";
import two from "../img/dining/2.png";
import three from "../img/dining/3.png";
import four from "../img/dining/4.png";
import five from "../img/dining/5.png";
import six from "../img/dining/6.png";
import seven from "../img/dining/7.png";
import eight from "../img/dining/8.png";
import nine from "../img/dining/9.png";
import ten from "../img/dining/10.png";

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
          <h3>Resort Restaurants and Bars</h3>
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
                style={{ padding: "10px" }}
              >
                <p>
                  Dine at one of the restaurants at Sun Gardens Dubrovnik
                  offering a mix of Dalmatian, Mediterranean, and international
                  culinary experiences.  The choice of bars offers a diverse mix
                  of venues for every occasion. Poolside, evening, relax,
                  vitality, sports, wine and beach bars provide a great chance
                  to unwind and enjoy a refreshment in a lovely ambience.
                </p>
                <br />
                <p>
                  Nothing beats slow sailing on historic ships across the
                  turquoise Adriatic Sea in the Dubrovnik archipelago waters.{" "}
                </p>
                <br />
                <p>
                  **LifeVantage will pay for the meals that are not provided
                  within the program. The money will be deposited into your
                  hyperwallet account before your departure.
                </p>
                <br />
                <p>
                  <strong>DRESS CODE:</strong> <br />
                  No formal dress code is required in the restaurants. Swimsuits
                  are only allowed on pool bars and the beach area.
                </p>
                <br />
                <p>
                  <strong>SUN GARDENS ROOM SERVICE: </strong>
                  7:00am – Midnight
                </p>
                <br />

                <p>
                  <i>
                    **Please note that some of the bars & restaurants are opened
                    primarily in the high season (from May until
                    September). Hours displayed are subjected to change based on
                    occupancy in the resort.{" "}
                  </i>
                </p>
              </div>
            </div>
          </div>
          <br />
          <h2
            style={{
              textAlign: "left",
            }}
          >
            RESTAURANTS:
          </h2>
          <br />
          <h3>Origano </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  A casual atmosphere and coastal views make Origano’s sunny
                  terrace a perfect place to start the day. The fusion of
                  delicate and healthy savory ingredients takes center stage
                  each morning with a lavish buffet breakfast featuring a cheese
                  & bread selection, various gourmet stations, natural juices,
                  fruits and pastries and more. 
                  <br />
                  Located on the hotel’s Level R, Origano boasts a relaxed
                  ambience befitting of its place with a sea view.
                  <br />
                  <strong>Hours:</strong> 8:00 – 11:00am
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
            </div>
          </div>
          <br /> <h3>Cilantro </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={two}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Inspired by a desire to explore the Mediterranean region, the
                  Cilantro restaurant is a diner’s gem that you shouldn’t miss
                  during your stay at the resort.
                  <br />
                  As the Adriatic Sea whispers on the shore, experience
                  mouth-watering aromas from the open kitchen and enjoy a light
                  lunch or a quiet romantic dinner for two. Authentic
                  ingredients bursting with flavor and modern culinary
                  techniques make Cilantro the perfect choice when you wish to
                  enjoy delightful dishes in chic surroundings with a view of
                  the sea.
                  <br />
                  <strong>Hours:</strong> Noon – 11:30pm
                  <br />
                  Lunch: Noon – 5:00pm
                  <br />
                  Dinner: 7:00pm – 11:30pm
                </p>
              </div>
            </div>
          </div>
          <br />
          <h3>La Pasta </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Take a culinary journey at La Pasta, a modern restaurant
                  specializing in fresh and simple Italian cuisine. Satisfy your
                  craving for fresh, home-made pasta, a delicious Neapolitan
                  pizza, or a light and crispy salad, served against the
                  backdrop of innovative décor in woody surroundings. An open
                  kitchen with a bread oven exclusively for baking pizzas offers
                  diners a wonderful dining experience.
                  <br />
                  <strong>Hours:</strong> Noon – 11:00pm
                </p>
              </div>
            </div>
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={three}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </div>
          <br /> <h3>The Market </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={four}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  A perfect choice for a locally inspired evening meal. After a
                  stroll and perhaps a spot of shopping through the resort's
                  main storefront area, enjoy a fine late lunch or a dinner in a
                  lovely setting. The Market offers fresh seafood specialties
                  with an amazing panoramic view over the crystal-clear Adriatic
                  Sea from the welcoming terrace.
                  <br />
                  Match one of these sublime dishes with a bottle of fine local
                  wine and you have an authentic experience in a truly unique
                  Dalmatian atmosphere.
                  <br />
                  <strong>Hours:</strong> 6:00pm – 11:30pm
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <h3>Butcher’s Grill </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Butcher's Grill is a “must visit” eatery for meat lovers. With
                  a live kitchen and the highest quality meats from all over the
                  world, you are guaranteed a delicious meal.
                  <br />
                  As your steak sizzles on the grill, why not run through our
                  extensive wine list to find the perfect combination. Our
                  friendly staff are on hand at all times to guide you through
                  our menus and offer advice on the ideal way to serve your
                  steak.
                  <br />
                  <strong>Hours:</strong> 6:00pm – 11:30pm
                </p>
              </div>
            </div>
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={five}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </div>
          <br /> <h3>Sunset Grill – Pool Bar </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={six}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  At our Sunset Pool, there is fun for the whole family, with
                  water features, a dedicated kids’ pool, and a fantastic bar &
                  grill.
                  <br />
                  Have a light lunch without wandering too far from the beach.
                  Try wraps, salads and grilled specialties, or sample something
                  lighter, such as bar snacks and local fruits, all in a
                  family-friendly environment. Treat yourself with ice cream or
                  a smoothie, and enjoy coffee, beer, wine, and cocktails near
                  the pool.
                  <br />
                  <strong>Hours:</strong> 10:00am - 7:00pm
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <h2
            style={{
              textAlign: "left",
            }}
          >
            BARS:{" "}
          </h2>
          <h3>Maraska Lounge Bar </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Soak in the stunning views of the sea and the nearby islands
                  as you unwind, relax and catch up on the day’s events in the
                  modern surroundings of the Maraska Lounge Bar.
                  <br />
                  Choose from an irresistible selection of drinks, including
                  signature cocktails, wine by the glass and the best malt
                  whiskeys or let our baristas make you a perfect cup of
                  coffee. 
                  <br />
                  <strong>Hours:</strong> 9:00am to Midnight
                </p>
              </div>
            </div>
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={seven}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </div>
          <br /> <h3>Lemonia Bar </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={eight}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Experience true luxury as you lounge by one of the best pools
                  in the world, as stated by the Conde Nast Traveler. Enjoy a
                  beautiful, sunlit day at the family Lemonia Pool and unwind
                  with a favorite cocktail, beer or wine. Delight in the
                  selection of delicious, sweet snacks such as ice creams,
                  smoothies and fresh, local fruits. 
                  <br />
                  <strong>Hours: </strong>10:00am – 7:00pm
                </p>
              </div>
            </div>
          </div>{" "}
          <br />
          <h3>Beach Bar </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Treat yourself to some thirst-quenching drinks, freshly
                  squeezed juices and cold beverages all served in the paradise
                  of the Adriatic coastline.
                  <br />
                  <strong>Hours:</strong> 10:00am – 7:00pm
                </p>
              </div>
            </div>
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={nine}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
          </div>
          <br /> <h3>Marina Bar </h3>
          <div
            className={cx(
              styles1.flexRoom,
              styles1.reverseRoom,
              styles1.margin
            )}
            style={{ maxWidth: "800px", margin: "auto" }}
          >
            <div className={styles1.marginLeft} style={{ maxWidth: "320px" }}>
              <img
                style={{ width: "320px", height: "280px" }}
                height="400px"
                src={ten}
                alt={"San Marco Hotel"}
                className={styles.margin}
              />
            </div>
            <div>
              <div
                className={cx(styles.flexRoom, styles.margin)}
                style={{ padding: "10px" }}
              >
                <p>
                  Distance yourself from the hustle and bustle and let your
                  cares slip into the sunset with a cocktail in the Marina Bar.
                  This <strong>adults-only bar</strong> allows you to soak up
                  the tranquility of the atmosphere whilst sipping a glass of
                  fine wine, champagne, favorite cocktail or a long, cold beer.
                  For a snack, try an ice cream, a smoothie or something else
                  from our snack menu and relax with a cup of coffee.  
                  <br />
                  <strong>Hours:</strong> 10:00am – 7:00pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
