import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/AboutUs/About";
import Auth from "./components/Auth/Auth";
import User from "./components/UserPage/User";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/about" exact component={About} />
      <Route path="/profile" exact component={User} />
      <Route path="/favorites" exact component={Favorites} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  );
};

export default App;
