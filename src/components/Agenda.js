import React from "react";
import cx from "classnames";
import gus from "../scss/gus.module.scss";
import styles from "../scss/agenda.module.scss";

const list_schedule = [
  {
    p1: "",
    p2: "",
    label: "Wednesday, July 20",
    day: {
      allDay: {
        text: <>All Day</>,
        location: (
          <>
            Arrival
            <br />
            Check-in at Dolphin Hotel <br />
            Register with FCM{" "}
          </>
        ),
      },
      morning: {
        text: "",
        location: "",
      },
      afternoon: {
        text: <>7:30-9:00pm</>,
        location: (
          <>
            Welcome Reception / Firework Show (Terrace des Fleurs, EPCOT)
            <br />
            Heavy hors d’oeuvres and dessert will be served.
            <br />
            <i>
              *Please meet in the lobby by 7:15 to walk over to Epcot entry
              point.{" "}
            </i>
            <p>
              <ul style={{ textAlign: "left", padding: "0px 20px" }}>
                <li>We MUST all enter Epcot at the same time.</li>
                <li>
                  You MUST wear your wristband (provided during check in) to be
                  admitted.
                </li>{" "}
                <li>Dress Code: Casual </li>
              </ul>
            </p>
          </>
        ),
      },
      evening: {
        text: "",
        location: <></>,
      },
    },
  },
  {
    p1: "",
    p2: "",
    label: " Thursday, July 21st to Saturday, July 23rd",
    day: {
      allDay: {
        text: <>All Day</>,
        location: "Disney Parks at leisure",
      },
      morning: {
        text: "",
        location: "",
      },
      midmorning: {
        text: "",
        location: "",
      },
      afternoon: {
        text: "",
        location: "",
      },
      evening: {
        text: "",
        location: "",
      },
    },
  },
  {
    p1: "",
    p2: "",
    label: "Sunday, July 24 ",
    day: {
      allDay: {
        text: "All Day",
        location: (
          <>
            Departures <br />
            <p>
              <ul style={{ textAlign: "left", padding: "0px 20px" }}>
                <li>Check out time is 11:00am.</li>
                <li>
                  If you would like a late check-out, you may request that with
                  the hotel upon arrival at your own expense.
                </li>{" "}
                <li>
                  Your departure time back to the airport will be given to you
                  at registration.
                </li>
              </ul>
            </p>
          </>
        ),
      },
      morning: {
        text: "",
        location: "",
      },
      midmorning: {
        text: "",
        location: "",
      },
      afternoon: {
        text: "",
        location: "",
      },
      evening: {
        text: "",
        location: "",
      },
    },
  },
];

const table_schedule = {
  one: [
    {
      morning: "Arrivals in Ft. Lauderdale, Florida",
      afternoon: "Arrivals in Ft. Lauderdale, Florida",
      evening: "Arrivals in Ft. Lauderdale, Florida",
    },
    {
      morning: undefined,
      afternoon: undefined,
      evening: (
        <div>
          <p>Welcome reception</p>
          <p>Location: TBD</p>
        </div>
      ),
    },
  ],
  two: [
    {
      morning: (
        <div>
          <p>Breakfast</p>
        </div>
      ),
      afternoon: (
        <div>
          <p>Lunch</p>
        </div>
      ),
      evening: (
        <div>
          <p>Off-site activity and dinner</p>
        </div>
      ),
    },
    {
      morning: (
        <div>
          <p>Collaboration sessions and team meetings</p>
          <p>Location: TBD</p>
        </div>
      ),
      afternoon: (
        <div>
          <p>Team meetings and conference</p>
          <p>Location: TBD</p>
        </div>
      ),
      evening: (
        <div>
          <p>Chicago, IL</p>
        </div>
      ),
    },
  ],
  three: [
    {
      morning: (
        <div>
          <p>Breakfast</p>
        </div>
      ),
      afternoon: (
        <div>
          <p>Lunch</p>
        </div>
      ),
      evening: (
        <div>
          <p>FormFast Gala</p>
        </div>
      ),
    },
    {
      morning: (
        <div>
          <p>General session</p>
          <p>Chicago, IL</p>
        </div>
      ),
      afternoon: (
        <div>
          <p>General session</p>
          <p>Location: TBD</p>
        </div>
      ),
      evening: (
        <div>
          <p>Chicago, IL</p>
        </div>
      ),
    },
  ],
  four: [
    {
      morning: (
        <div>
          <p>Breakfast</p>
        </div>
      ),
      afternoon: (
        <div>
          <p>Lunch</p>
        </div>
      ),
      evening: undefined,
    },

    {
      morning: (
        <div>
          <p>Charity event and closing sessions</p>
          <p>Location: TBD</p>
        </div>
      ),
      afternoon: (
        <div>
          <p>Departure back to home city</p>
        </div>
      ),
      evening: undefined,
    },
  ],
};

const days = [
  { day: "one", text: "Day 1" },
  { day: "two", text: "Day 2" },
  { day: "three", text: "Day 3" },
  { day: "four", text: "Day 4" },
];

export default function Agenda({ layout, title }) {
  const [day, setDay] = React.useState("one");

  if (layout === "table") {
    return (
      <div className={cx(gus.textCenter)}>
        <h2>{title}</h2>
        <div className={cx(styles.toggle, gus.marginTop3, gus.marginBottom3)}>
          {days.map((d) => (
            <div className={day === d.day ? styles.selected : undefined}>
              <a href=" " onClick={() => setDay(d.day)}>
                {d.text}
              </a>
            </div>
          ))}
        </div>

        <div className={cx(styles.table, gus.marginTop2)}>
          <table cellSpacing="0" cellPadding="0">
            <thead>
              <tr>
                <th>Morning</th>
                <th>Afternoon</th>
                <th>Evening</th>
              </tr>
            </thead>
            <tbody>
              {table_schedule[day].map((schedule, index) => {
                return (
                  <tr key={index}>
                    <td>{schedule.morning}</td>
                    <td>{schedule.afternoon}</td>
                    <td>{schedule.evening}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className={gus.padding1}>
      <h2 className={cx(gus.textCenter)}>
        <br />
        SCHEDULE
      </h2>
      <div className={styles.container}>
        {list_schedule.map(function(obj) {
          return (
            <div className={cx(styles.agendaParent)}>
              <div className={cx(styles.agendaLabel)}>
                <span style={{ color: "#white" }}>{obj.label}</span>
              </div>
              <div className={cx(styles.agendaContent, gus.marginBottom2)}>
                <p>{obj.p1}</p>
                {React.isValidElement(obj.p2) ? (
                  (() => {
                    const Element = obj.p2;
                    return Element;
                  })()
                ) : (
                  <p className={cx(styles.italic, gus.marginBottom1)}>
                    {obj.p2}
                  </p>
                )}
                {obj.day.allDay.text && (
                  <p className={cx(styles.bold)}>{obj.day.allDay.text}</p>
                )}
                {obj.day.allDay.location && (
                  <span className={cx(gus.marginBottom1, gus.inlineBlock)}>
                    <span>{obj.day.allDay.location}</span>
                  </span>
                )}
                {obj.day.morning.text && (
                  <p className={cx(styles.bold)}>{obj.day.morning.text}</p>
                )}
                {obj.day.morning.location && (
                  <span className={cx(gus.marginBottom1, gus.inlineBlock)}>
                    <span>{obj.day.morning.location}</span>
                  </span>
                )}

                {obj.day.midmorning && obj.day.midmorning.text && (
                  <p className={cx(styles.bold)}>{obj.day.midmorning.text}</p>
                )}
                {obj.day.midmorning && obj.day.midmorning.location && (
                  <span className={cx(gus.marginBottom1, gus.inlineBlock)}>
                    <span>{obj.day.midmorning.location}</span>
                  </span>
                )}

                {/* ========================================================================== */}
                {obj.day.afternoon.text && (
                  <p className={cx(styles.bold)}>{obj.day.afternoon.text}</p>
                )}
                {obj.day.afternoon.location && (
                  <span className={cx(gus.marginBottom1, gus.inlineBlock)}>
                    <span>{obj.day.afternoon.location}</span>
                  </span>
                )}

                {/* ========================================================================== */}

                {obj.day.evening.text && (
                  <p className={cx(styles.bold)}>{obj.day.evening.text}</p>
                )}
                {obj.day.evening.location && (
                  <span className={cx(gus.marginBottom1, gus.inlineBlock)}>
                    <span>{obj.day.evening.location}</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
