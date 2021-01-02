import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux"; // sluzi za dispatchanje akcije
import { getPosts } from "../src/actions/posts";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import Posts from "./components/Posts";
import Favorites from "./components/Favorites";
import About from "./components/About";
import BcgImg from "./bcgimg.jpg";
import Search from "./components/Search";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="containter">
        <Header />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/favorites" exact component={Favorites} />

          <Redirect to="/" />
        </Switch>
        <Search />
        <img src={BcgImg} alt="Logo" className="home-image" />
      </div>

      <Posts />
      <Form />
    </div>
  );
};

export default App;
