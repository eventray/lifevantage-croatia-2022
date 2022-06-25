import React from "react";
import styles from "../scss/grid.module.scss";
import cx from "classnames";
import { Anchor } from "./Anchor";

export function Grid({
  images = [],
  title,
  subTitle,
  imagesStyles = {},
  titleStyles = {},
  descriptionStyles = {},
  contentStyles = {},
  detailStyles = {},
  gridStyles = {},
}) {
  return (
    <div className={cx(styles.container)}>
      {title ? <h2 className={styles.header}>{title}</h2> : null}
      {subTitle ? <p className={styles.subheader}>{subTitle}</p> : null}
      <div className={cx(styles.grid)} style={gridStyles}>
        {images.map((img, index) => (
          <div
            key={!img.alt ? index : img.alt.concat(`_${index}`)}
            className={cx(contentStyles)}
            style={{ marginTop: "30px" }}
          >
            {img.title ? <h2 style={{ ...titleStyles }}>{img.title}</h2> : null}
            <div
              className={cx({
                [styles.flex]: img.description,
                [styles.hover]: !img.description,
              })}
            >
              {img.url ? (
                <Anchor href={img.url}>
                  <img src={img.src} alt={img.alt} style={imagesStyles} />
                </Anchor>
              ) : (
                <img src={img.src} alt={img.alt} style={imagesStyles} />
              )}
              {img.description ? (
                <div
                  style={{ ...descriptionStyles }}
                  className={styles.description}
                >
                  <span
                    style={{
                      color: "#023365",
                    }}
                  >
                    {img.description}
                  </span>
                </div>
              ) : null}
            </div>
            {!img.details ? null : (
              <div style={detailStyles}>{img.details}</div>
            )}
            {img.data ? (
              <div style={{ textAlign: "left", padding: "0 10px" }}>
                {img.data}
              </div>
            ) : (
              ""
            )}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
