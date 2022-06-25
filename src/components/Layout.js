import React from "react";
import styles from "../scss/layout.module.scss";
import gus from "../scss/gus.module.scss";
import cx from "classnames";

export function Layout({ children, noMargin = false }) {
  return (
    <div
      className={cx(
        {
          [gus.noMargin]: noMargin,
        },
        styles.section
      )}
    >
      <div className={cx({ [gus.noMargin]: noMargin }, styles.content)}>
        {children}
      </div>
    </div>
  );
}
