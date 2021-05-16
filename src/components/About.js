import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <div id = "about">
      <h2>About Me</h2>
      <p>I will be a very good web developer</p>
      <img src = {image} alt = "I made this lol"></img>
    </div>
  </div>;
}

export default About;
