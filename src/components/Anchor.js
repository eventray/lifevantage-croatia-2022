import React from "react";

export function Anchor({ href, children, block = false, style = {} }) {
  return (
    <a
      style={{
        cursor: "pointer",
        textDecoration: "none",
        ...(block && { display: "block" }),
        ...style,
        color: "#2696D4",
      }}
      href={href}
      target={"__blank"}
      rel={"noreferrer noopener"}
    >
      {children}
    </a>
  );
}
