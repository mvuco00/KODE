import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Posts from "./components/Posts";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Posts />
      </div>
    );
  }
}

export default App;
