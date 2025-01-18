import React from 'react'
import "./Input.css"; 
import colornames from "colornames";


const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Color Name</label>
        <input
          className="input"
          type="text"
          name="colorName"
          placeholder="Add Color Name"
          value={colorValue}
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colornames(e.target.value));
          }}
        />
        <br />
        <button
          className="button"
          onClick={(e) => {
            isDarkText ? setIsDarkText(false) : setIsDarkText(true);
          }}
        >
          Toggle text color
        </button>
      </form>
    );
}

export default Input