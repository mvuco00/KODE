import React from "react";
import Photo from "./Photo";
import classes from "./About.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.photo}>
        <Photo />
      </div>
      <div className={classes.aboutUsText}>
        <div className={classes.title}>Our idea</div>
        <div className={classes.paragraph}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={classes.title}>The team</div>
        <div className={classes.paragraph}>
          Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Nunc
          aliquet bibendum enim facilisis gravida neque convallis. Dui accumsan
          sit amet nulla facilisi morbi tempus.
        </div>
        <div className={classes.title}>Contact</div>
        <div className={classes.paragraph}>kode@gmail.com</div>
      </div>
    </div>
  );
};

export default About;
