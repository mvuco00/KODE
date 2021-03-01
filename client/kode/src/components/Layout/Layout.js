import React from "react";
import Header from "../Header/Header";
import classes from "./Layout.css";
import Footer from "../Footer/Footer";
const Layout = (props) => (
  <div className={classes.layout}>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
