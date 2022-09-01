import React from "react";
import styles from "../scss/overlay.module.scss";
import { useLocation } from "react-router-dom";
import cx from "classnames";

import accomodation from "../img/Accommodations_original.jpg";
import activities from "../img/Activities_original.jpg";
import dining from "../img/Dining_original.jpg";
import legacy from "../img/legacy.jpg";
import faqs from "../img/FAQ_original.jpg";
import schedule from "../img/Schedule_original.jpg";
import terms from "../img/TandC_original.jpg";
import rooms from "../img/Rooms.jpg";

export function Overlay({ title }) {
  const { pathname } = useLocation();
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    const images = {
      "/schedule": { src: schedule, position: "center" },
      "/accomodation": { src: accomodation, position: "center" },
      "/rooms": { src: rooms, position: "center" },
      "/activities": { src: activities, position: "center" },
      "/dining": { src: dining, position: "center" },
      "/legacy": { src: legacy, position: "center" },
      "/faqs": { src: faqs, position: "center" },
      "/terms": { src: terms, position: "center" },
    };

    setImage(images[pathname]);
  }, [pathname]);

  if (!image) return null;

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.landingBackground}
          style={{
            backgroundImage: `url(${image.src})`,
            marginTop: "68px",
          }}
        />
        <div className={cx(styles.negativeMargin, styles.landingOverlay)} />
        <div className={styles.landingContent}>
          <div className={styles.header}>
            <h2 style={{ color: "white", textAlign: "center" }}>
              {/* {pathname.replace("/", "").toUpperCase()} */}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
