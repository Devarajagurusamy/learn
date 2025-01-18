import React from "react";
import "./Square.css";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "black" : "white",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}
        <br />
      {hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty color value",
};

export default Square;
