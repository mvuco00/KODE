import React from "react";
import Header from "../Header/Header";
import classes from "./Layout.css";
const Layout = (props) => (
  <div className={classes.layout}>
    <Header />
    <div>{props.children}</div>
  </div>
);

export default Layout;
