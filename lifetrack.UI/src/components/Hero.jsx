import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" sx={{ backgroundColor: "#2c4147" }}>
      <img
        src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
        alt="hero img"
      ></img>
      <h1 className="intro">Life Tracker</h1>
      <p>Helping you take back control of your world</p>
    </div>
  );
}
