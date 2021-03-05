import React from "react";
import classes from "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
function Footer() {
  console.log("rendering-footer");
  return (
    <div className={classes.footer}>
      <div className={classes.credit}>
        <div>@2021 KODE</div>
        <div>github.com/mvuco00</div>
      </div>

      <div className={classes.socialMedia}>
        <a href="https://github.com/mvuco00/KODE">
          <GitHubIcon style={{ fill: "white" }} />
        </a>
        <a href="https://facebook.com/">
          <FacebookIcon style={{ fill: "white" }} />
        </a>
        <a href="https://twitter.com/">
          <TwitterIcon style={{ fill: "white" }} />
        </a>
        <a href="https://linkedin.com/">
          <LinkedInIcon style={{ fill: "white" }} />
        </a>
      </div>
    </div>
  );
}

export default React.memo(Footer);
