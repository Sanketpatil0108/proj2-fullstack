import React from "react";

export default function Footer(props) {
  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        fontSize: "20px",
        backgroundColor: "black",
        position: "fixed",   
        width: "100%",
        bottom: "0",
      }}
    >
      {props.title}
    </div>
  );
}
