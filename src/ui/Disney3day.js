import React from "react";
import styles from "../scss/faqs.module.scss";
import cx from "classnames";
import { Layout } from "../components/Layout";

import { Anchor } from "../components/Anchor";

export function Disney3day() {
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
            <br /> Disney 3-Day Hopper
          </h2>
          <br />
          <p>
            Each qualifier will receive up to 4 Walt Disney World 3-Day Park
            Hopper Passes. We will email you your pass information so you can
            make your park reservations starting 60 days in advance.{" "}
          </p>
          <br />
          <h3>3-DAY PARK HOPPER PASS</h3>
          <p>
            How it works:
            <br />
            Guests will be able to visit more than one park per day, with some
            new modifications as part of Disney’s ongoing focus on health and
            safety. These modifications are designed to help them continue
            managing attendance in a way that fosters physical distancing.
            <ul style={{ textAlign: "left", padding: "0px 30px" }}>
              <li>
                Park Hopper hours will start at 2 PM each day and end at the
                park’s scheduled close time. Guests are now able to check the{" "}
                <Anchor href="https://disneyworld.disney.go.com/calendars/">
                  Park Hours calendar {" "}
                </Anchor>
                and the My Disney Experience app for the most up-to-date Park
                Hopper hours , as they could start earlier at a later date,
                depending on the day and park.
              </li>
              <li>
                With the updated Park Hopper experience, Guests must make a
                Disney Park Pass reservation for the first park they plan to
                visit AND enter that first park prior to visiting another. At
                this time, a park reservation is not required after the first
                park, however, reservation requirements are subject to change.
              </li>{" "}
              <li>
                Reservations for{" "}
                <Anchor href="https://disneyworld.disney.go.com/dining/#/reservations-accepted">
                  dining experiences
                </Anchor>
                ,{" "}
                <Anchor
                  href={
                    "https://disneyworld.disney.go.com/shops/hollywood-studios/droid-depot/"
                  }
                >
                  Droid Depot
                </Anchor>
                ,{" "}
                <Anchor
                  href={
                    "https://disneyworld.disney.go.com/shops/hollywood-studios/savis-workshop-handbuilt-lightsabers/"
                  }
                >
                  Savi's Workshop
                </Anchor>{" "}
                and other pre-booked experiences do not guarantee access to a
                park, and Park Hopper availability may change daily. We
                recommend Guests book in-park dining and other experiences at
                the park where they have a Disney Park Pass reservation. Guests
                can make dining reservations or add their party to the{" "}
                <Anchor
                  href={
                    "https://disneyworld.disney.go.com/guest-services/mobile-dine-walk-up-availability/"
                  }
                >
                  walk-up
                </Anchor>{" "}
                list at select table-service restaurants via the My Disney
                Experience app after they enter the second park, subject to
                availability.
              </li>
            </ul>
            <i>
              {" "}
              *Please note
              that the ability to visit another park will be subject to the
              park’s capacity limitations. In the event that the Park Hopper
              option is unavailable at a theme park, Guests will be notified in
              real time via a push notification from the My Disney Experience
              app.
            </i>
            <br />
            <br />
            Virtual Queues:
            <br />
            From time to time, a virtual queue may be used for select
            attractions. Access to a boarding group is subject to availability
            and not guaranteed. Guests visiting from another theme park using
            the Park Hopper option may not be able to join the virtual queue in
            a park where they do not have a Disney Park Pass reservation.
            <br />
            <Anchor
              href={
                "https://disneyworld.disney.go.com/guest-services/virtual-queue/"
              }
            >
              Learn more about virtual queues—including attractions where Guests
              may be required to join the virtual queue.
            </Anchor>
            <br />
            <br />
            Transportation:
            <br />
            Park-to-park transportation is now available, with operations
            beginning each day shortly prior to the start of Park Hopper hours.
          </p>
          <br />
          <h3>Disney Account</h3>
          <p>
            Follow these steps to set up your account:
            <ol style={{ textAlign: "left", padding: "0px 30px" }}>
              <li>
                Visit a{" "}
                <Anchor
                  href={"https://disneyworld.disney.go.com/vacation-planning/"}
                >
                  Disney site
                </Anchor>{" "}
                and click "Create Account"
              </li>
              <li>Enter the requested info, including your email address</li>
              <li>
                Check the box to agree to the "Terms of Use" and "Privacy
                Policy" and then click "Create Account"
              </li>
            </ol>
            A message will appear to confirm that your account has been created.
          </p>
          <br />
          <h3>Park Reservations</h3>
          <p>
            Park attendance is managed via the{" "}
            <Anchor
              href={
                "https://disneyworld.disney.go.com/experience-updates/park-reservations/"
              }
            >
              {" "}
              Disney Park Pass reservation system
            </Anchor>
            —now available to Guests with valid admission. To enter a park, both
            a park reservation and valid admission for the same park on the same
            date are required for Guests ages 3 and up.
            <br />
            <br />
            Booking Your Park Reservations:
            <br /> The Disney Park Pass system is now open to Guests with valid
            admission. The number of theme park reservation days you can hold at
            one time varies based on your plans. Disney resort guests can make
            park reservations for dates during their stay for the number of days
            that they have valid theme park admission. Check Disney Theme Park{" "}
            <Anchor
              href={
                "https://disneyworld.disney.go.com/availability-calendar/?segments=tickets,resort,passholder&defaultSegment=tickets"
              }
            >
              Reservation Availability
            </Anchor>{" "}
            for Disney resort guests.
          </p>
          <br />
          <h3>Disney Mobile App</h3>
          <p>
            Make the most of the magic with the{" "}
            <Anchor
              href={
                "https://disneyworld.disney.go.com/plan/my-disney-experience/mobile-apps/"
              }
            >
              My Disney Experience mobile app
            </Anchor>
            . We strongly recommend that you have the latest version of the My
            Disney Experience app on your mobile device, with location services
            and notifications enabled.
            <br />
            Helpful features include:
            <ul style={{ textAlign: "left", padding: "0px 30px" }}>
              <li>
                <strong>
                  Online Check-In at the Hotels of Disneyland Resort:
                </strong>
                For convenience, use the online check-in service prior to your
                arrival. Once you arrive, if you have used the online check-in
                service and have agreed to receive text messages, you can
                receive a notification on your phone via text message when your
                room is ready. You may then stop at the Front Desk to pick up
                your room keys.{" "}
              </li>
              <li>
                <strong>Theme Park Entry:</strong>
                Use a MagicMobile pass for theme park entry.
              </li>
              <li>
                <strong>Access to Virtual Queue:</strong>
                Select attractions may require you to join a virtual queue in
                the app to experience them.{" "}
              </li>
              <li>
                <strong>Mobile Order Service for Dining: </strong>
                Please order ahead to save time when you order and pay for your
                food and beverages with our mobile order service, available at
                select locations in the parks.{" "}
              </li>
              <li>
                <strong>Food & Merchandise Guide:</strong>
                Use this handy guide to locate some of your favorite snacks and
                keepsakes.{" "}
              </li>
              <li>
                <strong>Details You Need:</strong>
                View hours of operation, schedules, and descriptions for shops,
                dining locations and more.{" "}
              </li>
              <li>
                <strong>Exploring Made Easy: </strong>
                Find what you’re looking for quickly with GPS-enabled maps that
                show your location and the restaurants, shops and more near you.
              </li>
              <li>
                <strong>Make Dining Reservations:</strong>
                Reserve a table at select dining locations in the Disneyland
                Resort directly from the app before your next visit. If your
                plans change, cancel them easily.{" "}
              </li>
              <li>
                <strong>Check in for Dining Reservations: </strong>
                Maximize your time by checking in for dining reservations at
                select table-service restaurants via the Disneyland app.{" "}
              </li>
              <li>
                <strong>Check in for Dining Reservations: </strong>
                Maximize your time by checking in for dining reservations at
                select table-service restaurants via the Disneyland app.{" "}
              </li>
              <li>
                <strong>Scannable Codes for Select Restaurant Menus: </strong>
                While at select table-service and quick-service restaurants, you
                can scan a code using your mobile device to access the digital
                menu.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
}
