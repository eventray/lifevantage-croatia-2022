import React from "react";
import gus from "../scss/gus.module.scss";
import cx from "classnames";
import styles from "../scss/accommodations.module.scss";
import { Anchor } from "../components/Anchor";

import { Layout } from "../components/Layout";

import one from "../img/accommodations/1.png";

export function Accommodations() {
  return (
    <Layout noMargin>
      <>
        <div
          className={styles.container}
          style={{ borderRadius: "9px", marginTop: "20px" }}
        >
          {" "}
          <Anchor
            target="_blank"
            href={"https://www.dubrovniksungardens.com/en"}
          >
            <h2 className={cx(gus.textCenter)}>Sun Gardens Dubrovnik </h2>
          </Anchor>
          <br />
          <br />
          <div
            className={cx(
              styles.flex,
              styles.reverse,
              styles.margin,
              gus.padding1
            )}
          >
            <div style={{ marginLeft: "30px", textAlign: "left" }}>
              <p>
                Located in the small village of Orašac, only 11 km from
                Dubrovnik city centre. It is easy to reach from all directions
                and is accessible whether you travel by plane, car or ferry.
              </p>
              <div className={cx(styles.flex, styles.reverse, styles.margin)}>
                <div style={{ width: "320px" }}>
                  <img
                    style={{ width: "320px", height: "280px" }}
                    height="400px"
                    src={one}
                    alt={"San Marco Hotel"}
                    className={styles.margin}
                  />
                </div>
                <div
                  className={styles.marginLeft}
                  style={{ width: "100%", textAlign: "left" }}
                >
                  <p style={{ textAlign: "left" }}>
                    A hidden beachfront oasis, a lush garden basking in the
                    sounds and fragrances of the Mediterranean. Elegant and
                    spacious accommodation will make for an ideal home away from
                    home, set in the middle of lush nature, a few meters away
                    from the inviting Adriatic shore.
                  </p>
                </div>
              </div>
              <div>
                <br />
                <h3>Resort Features:</h3>
                <ul>
                  <li>Diverse selection of restaurants and bars</li>
                  <li>Three swimming pools and natural pebble beach</li>
                  <li>
                    Sports center offering more than a dozen sports and
                    activities
                  </li>
                  <li>Marco Polo club for kids</li>
                  <li>Supermarket and Retail shopping</li>
                  <li>
                    Nearby Hiking and running paths to enjoy the Coastal
                    panorama and scenic Countryside{" "}
                  </li>
                  <li>
                    Spa and Wellness Oasis, Gourmet Experiences, such as Wine &
                    Dine & Mixology Class & Outdoor and Nature cycling tours (At
                    an additional cost){" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        <Anchor
                          target="_blank"
                          href={
                            "https://www.dubrovniksungardens.com/datastore/filestore/11/SUN_GARDENS_MAP_WEB.pdf "
                          }
                        >
                          Download Property Map
                        </Anchor>
                      </li>
                    </ul>
                  </li>
                </ul>
                <br />
                <h3>Included With Your Stay</h3>
                <ul>
                  <li>
                    Ground Transportation (to/from Dubrovnik Airport & Sun
                    Gardens) on program dates. (September 10 – 15th){" "}
                  </li>
                  <li>Hotel Room Accommodations for Two in a Deluxe Room</li>
                  <li>Daily Breakfast at Sun Gardens Resort</li>
                  <li>
                    LifeVantage Group Meals (Welcome Reception & Farewell
                    Dinner)
                  </li>
                  <li>
                    Additional Meals
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        LifeVantage will pay for the meals that are not provided
                        within the program. The money will be deposited into
                        your hyperwallet account before your departure.{" "}
                      </li>
                    </ul>
                  </li>

                  <li>
                    Three Swimming Pools and Beach
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        Sunset Pool: The Sunset Pool is a perfect place to
                        lounge shaded from the rays, watching the sun set over
                        the vast blueness of the horizon. With various water
                        features, a dedicated children’s pool and a bar, this
                        sea-view pool offers something for everybody.
                      </li>
                      <li>
                        Marina Pool: This adult-friendly pool is a perfect
                        sanctuary when what you desire is a moment of peace and
                        tranquility. Revel in the Zen-like sounds of the
                        surroundings and let your worries disappear.
                      </li>

                      <li>
                        Lemonia Pool: This Pool is a perfect family friendly
                        spot to enjoy your summer holiday splashing around in
                        the sun. Grab freshly made smoothies, ice-creams and
                        snacks to keep both the energy and the spirits high and
                        have fun, fun, fun. The little ones will enjoy
                        themselves in the children's pool, while the grown-ups
                        can find deeper waters in the main pool area.
                      </li>

                      <li>
                        Natural Pebble Beach: Our beach is ideal for a whole
                        family, with plenty of space for your towels and
                        accessories, and easy access to the sea for even the
                        tiniest feet. It is surrounded by lush, untouched
                        nature, brimming with the true charm of the old
                        Mediterranean.
                      </li>
                    </ul>
                  </li>

                  <li>
                    Sports Center:{" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        Challenge yourself and stay active during your stay.
                        Choose from a large offer of water sports, indoor and
                        outdoor activities at the resort.{" "}
                        <ul style={{ marginLeft: "20px" }}>
                          <li>
                            Gym, Wall -climbing, squash, badminton and
                            basketball court.
                          </li>
                        </ul>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    Marco Polo Kids Club{" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        With specially trained staff on hand at all times, our
                        Marco Polo Kids Club offers the chance for your children
                        to enjoy new experiences under the warm Mediterranean
                        sun.
                      </li>
                    </ul>
                  </li>
                </ul>
                <br />
                <h3>Optional Extras:</h3>
                <ul>
                  <li>
                    Wellness and Spa oasis{" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        Yes to Beauty offers an integrated beauty program
                        featuring exclusive professional face and body care
                        treatments, signature experiences and an ample selection
                        of massage techniques. Highly trained therapists,
                        educated in the Wellness Academy, use a range of quality
                        and luxury wellness products.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Gourmet Experience{" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        There are plenty of treats for gastronomy lovers at Sun
                        Gardens Dubrovnik! Dalmatian cuisine is attracting
                        increasing international attention and with good reason.
                        Its secrets lie in its simplicity, the freshness of
                        ingredients and traditional recipes, passed through
                        generations.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Outdoor & Nature{" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        Explore spectacular views and fascinating sights on one
                        of our suggested paths. Whether you prefer hiking,
                        running or cycling, set your own pace and choose the
                        route that suits you best.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Children’s Sports Academy{" "}
                    <ul style={{ marginLeft: "20px" }}>
                      <li>
                        Sun Gardens Dubrovnik Sports Academy welcomes children
                        aged 7 to 15. There is no better place for them to take
                        part in training programs for their favorite sport, like
                        football, tennis and swimming, or explore so me new
                        activity like squash or water-sports.
                        <ul style={{ marginLeft: "20px" }}>
                          <li>Water Sports Academy</li>
                          <li>Campioni Soccer Academy</li>
                          <li>Football Academy</li>
                          <li>Tennis Academy</li>
                          <li>Squash Academy</li>
                          <li>Swimming Academy</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
