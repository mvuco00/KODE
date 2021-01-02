import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux"; // sluzi za dispatchanje akcije
import { getPosts } from "../src/actions/posts";
import Header from "./components/Header";
import Form from "./components/Form";
import Posts from "./components/Posts";
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
        <Search />
        <img src={BcgImg} alt="Logo" className="home-image" />
      </div>

      <Posts />
      <Form />
    </div>
  );
};

export default App;
