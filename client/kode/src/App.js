import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux"; // sluzi za dispatchanje akcije
import { getPosts } from "../src/actions/posts";
import Header from "./components/Header";
import Form from "./components/Form";
import Posts from "./components/Posts";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Form />
      <Posts />
    </div>
  );
};

export default App;
