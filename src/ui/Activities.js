import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";
import golf from "../img/activities/golf.png";
import health from "../img/activities/health.png";
import pool from "../img/activities/pool.png";
import spa from "../img/activities/spa.png";

import { Anchor } from "../components/Anchor";

export function Activities() {
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
            <br /> ACTIVITES
          </h2>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/activities/pools-beach-and-watercraft-rentals/">
              Pools, Beach & Watercraft Rentals{" "}
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={pool}
                alt={"pool"}
                className={styles.margin}
              />
            </div>
          </div>
          <br />

          <p>
            Get ready for fun in the sun! With six unique pools – not to mention
            whirlpools, fountains and beautiful cascading waterfalls, all
            nestled in an exotic tropical environment, you’ll find the perfect
            spot to relax in the shade or enjoy the Florida sunshine.  Grab a
            good book and crawl into a relaxing hammock on the white sand
            beach.  The expansive pool area provides the best of both worlds:
            quiet alcoves for those who prefer a private place to unwind and
            more lively areas with seasonal music and entertainment for those
            who prefer a little more excitement. The large sun deck provides
            plenty of room for relaxing, family friendly outdoor gaming, or just
            enjoying the tropical pool oasis.
            <br />
            The crystal blue lap pool ensures you’ll keep up your fitness
            regimen while on vacation and was recently named #1 of 10 hotel lap
            pools in the country by Athletic Minded Traveler!  Or take a
            leisurely ride around Crescent Lake on a swan paddle boat.  You’ll
            find exciting activities for the whole family.
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/activities/sports-trails-games/">
              Sports, Trails & Games{" "}
            </Anchor>{" "}
          </h3>

          <p>
            Ping Pong: Enjoy some family friendly competition at our ping pong
            tables. Paddles and balls are provided at each table. A table is
            located at each of the lap pools.
            <br />
            <br />
            Volleyball: Enjoy an invigorating game of volleyball with your
            friends, family, and other hotel guests – either on the sand or in
            the water. At the Walt Disney World Swan and Dolphin, they offer two
            regulation size volleyball courts on the white sand beach. They also
            have a net stretched across a section of the grotto pool. For your
            convenience, volleyballs are available at the Cabana Beach Hut.
            <br />
            <br />
            Jogging: The jogging trails offer more than just a safe place to
            run. The scenic beauty alone is enough to get your heart pumping!
            Jog down Disney’s BoardWalk, around Crescent Lake, and enjoy a
            close-up view of Epcot and the neighboring Disney resorts.
            <i>
              *Stop by the health club to pick up a jogging map or {" "}
              <Anchor href="https://swandolphin.com/wp-content/uploads/2021/03/Jogging-Map.pdf">
                click here {" "}
              </Anchor>{" "}
              to print a copy.
            </i>
            <br />
            <br />
            Game Room: Family fun isn’t limited to the theme parks. Located on
            the first level of the Dolphin, our game room is open daily and
            machines are available to convert coins to tokens. So, grab a few
            tokens and show how much of a pinball, air hockey or video game
            wizard you truly are. Whether you are a kid or simply a kid at
            heart, you’ll enjoy time together in our game room.
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/activities/health-clubs/">
              Health Club{" "}
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={health}
                alt={"health"}
                className={styles.margin}
              />
            </div>
          </div>
          <br />

          <p>
            You can take advantage of a wide array to technologically advanced
            equipment, free weights, cardiovascular equipment, elliptical
            machines, and state of the art exercise bikes. Lockers, water and
            towels are available. Enjoy TV’s or beautiful resort views as you
            take care of your mind and body. 
            <br />
            <i>
              *In the Dolphin wing, the Health Club is located on the first
              floor, west side. It remains open 24 hours with access available
              using your guest room key. 
            </i>
            <br />
            Daily instructor led fitness classes: 
            <ul style={{ marginLeft: "30px" }}>
              <li>
                Aqua HIIT!: This class offers a series of short fitness drills
                in the water at high intensity intervals to provide participants
                with a challenging and intense pool workout that offers results!
              </li>
              <li>
                Zumba: This class is a Latin-dance-inspired aerobic fitness
                format! No dance experience is required, your instructor will
                show you all the moves and you will learn as you go! With dances
                like Salsa, Merengue, Bachata, and Cumbia- Zumba feels like more
                of a party than a workout. Sneakers recommended.
              </li>
              <li>
                Cardio Splash: Bring your workout to the pool! Cardio-Splash
                uses water resistance to improve cardiovascular fitness,
                endurance and flexibility with a high-energy pool workout that
                is fun for all fitness levels.
              </li>
              <li>
                Beach Yogalates: This Class combines strength and flexibility
                movements from both Yoga and Pilates for a Unique class dynamic.
                Yogalates classes focus on increasing flexibility, strength, and
                the mind/body connection.
              </li>
              <li>
                Beach Yoga: In this class, our Yoga instructor will guide you
                through a series of postures practiced to with a focus on
                alignment to help increase flexibility and strengthen the body.
                Class incorporates some breathing techniques and meditation to
                help quiet the mind and develop a deeper mind-body connection.
              </li>
              <li>
                Aqua Aerobics: Aqua Aerobics uses a combination of moves that
                strengthen, tone, and help increase aerobic capacity with all
                low-impact pool workout. Class is low-impact and great for all
                levels!
              </li>
            </ul>
            <i>
              *A different class is offered each day, so please check the latest
              schedule.
            </i>
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/activities/kids/camp-dolphin/">
              Camp Dolphin{" "}
            </Anchor>{" "}
          </h3>

          <p>
            Camp Dolphin is a fun-filled club exclusively for kids. Located next
            to the health club on the lower level of the Dolphin, Camp Dolphin
            provides hours of non-stop fun and excitement with age-appropriate,
            supervised activities including arts, crafts, movies, board games,
            video games and nightly themed activities for children ages 5 - 12. 
            A delicious meal and a snack are also provided.
            <br />
            <br />
            Open nightly from 4:00pm to 11:00pm, (drop off time is from 4 pm to
            5 pm & pick-up time is from 9 pm – 11 pm)
            <i>
              <Anchor href="https://swandolphin.247activities.com/">
                *Reservations{" "}
              </Anchor>{" "}
              are required for Camp Dolphin’s evening program.
            </i>
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/activities/mandara-spa/">
              Mandara Spa{" "}
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={spa}
                alt={"spa"}
                className={styles.margin}
              />
            </div>
          </div>
          <br />

          <p>
            An asian-inspired retreat offering exotic spa services as well as a
            full-service hair and nail salon, the Manadara Spa is a
            10,500-square-foot sanctuary for the senses. Think of it as your
            personal oasis where you can relax, rejuvenate, and renew. Explore
            the interior gardens: the intimate Tea Garden, a unique sitting and
            sipping room, or the Meditation Garden. These exotic retreats
            provide a destination where mind, body and soul meet.
            <br />
            <i>
              *Receive $30 off spa services of $200 or more at The Mandara Spa
              during each day of your visit (1) offer per room per night.
            </i>
            <br />
            <br />
            <Anchor href="https://swandolphin.com/wp-pdf/spa/mandara_spa_brochure.pdf">
              Spa Brochure{" "}
            </Anchor>{" "}
            <br />
            <br />
            <Anchor href="http://www.mandaraspa.com/spa/Orlando-Walt-Disney-World-Swan-and-Dolphin.aspx">
              Make a Reservation{" "}
            </Anchor>{" "}
          </p>
          <br />
          <h3>
            {" "}
            <Anchor href="https://swandolphin.com/activities/disney-golf-courses/">
              Golf{" "}
            </Anchor>{" "}
          </h3>
          <div>
            <div style={{ minWidth: "290px", margin: "0px auto" }}>
              <img
                style={{ width: "100%", maxHeight: "500px" }}
                src={golf}
                alt={"golf"}
                className={styles.margin}
              />
            </div>
          </div>
          <br />

          <p>
            Disney World Resort was recognized by the PGA of America as the Best
            Golf Resort for Family Vacations. As a guest of the Walt Disney
            World Swan & Dolphin Resort you can take advantage of any of the
            three championship courses or the nine-hole walking course.
            <br /> <br />
            Magnolia Golf Course:
            <br /> Power your way down the fairways at Disney’s Magnolia Golf
            Course, designed in classic Tour style, this championship course is
            the longest of the Walt Disney World Resort golf courses.
            <br /> <br />
            Palm Golf Course: <br /> Disney’s Palm Golf Course features
            sparkling lakes and tropical sand, all in a gorgeous golf landscape
            populated with strategically placed palms.
            <br /> <br />
            Lake Buena Vista Golf Course:
            <br /> At Disney’s Lake Buena Vista Golf Course, enjoy a meandering
            course that winds its way through pastel villas, pine forests,
            palmettos and sparkling lakes.
            <br />
            <br />
            <Anchor href="https://swandolphin.com/activities/disney-golf-courses/">
              Book Tee Time{" "}
            </Anchor>{" "}
            or call 407-WDW-GOLF to reserve your tee time.
          </p>
          <br />
        </div>
      </div>
    </Layout>
  );
}
