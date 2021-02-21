import React from "react";
import Header from '../Header/Header'
const Layout = (props) => (
  <div>
    <Header />
    <div>{props.children}</div>
  </div>
);

export default Layout;