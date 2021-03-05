import React from "react";
import classes from "./About.css";

const About = () => {
  console.log("rendering-aboutus");
  return (
    <div className={classes.about}>
      <h1>Who are we?</h1>
    </div>
  );
};

export default About;
