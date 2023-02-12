import React from "react";
import "./Input.css";
function Input(props) {
  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter Location..."
        onChange={(e) => props.setCity(e.target.value)}
        value={props.city}
        onKeyPress={props.getWeather}
      ></input>
    </div>
  );
}

export default Input;
