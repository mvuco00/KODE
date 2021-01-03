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
        <div className="text-on-photo">
          <svg
            width="176"
            height="53"
            viewBox="0 0 176 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6016 31.4688L11.1172 37.375V52H0.570312V0.8125H11.1172V24.0156L15.7578 17.6523L28.8008 0.8125H41.7734L23.5977 23.5586L42.3008 52H29.75L16.6016 31.4688ZM87.1953 27.5664C87.1953 32.6055 86.3047 37.0234 84.5234 40.8203C82.7422 44.6172 80.1875 47.5469 76.8594 49.6094C73.5547 51.6719 69.7578 52.7031 65.4688 52.7031C61.2266 52.7031 57.4414 51.6836 54.1133 49.6445C50.7852 47.6055 48.207 44.6992 46.3789 40.9258C44.5508 37.1289 43.625 32.7695 43.6016 27.8477V25.3164C43.6016 20.2773 44.5039 15.8477 46.3086 12.0273C48.1367 8.18359 50.7031 5.24219 54.0078 3.20312C57.3359 1.14062 61.1328 0.109375 65.3984 0.109375C69.6641 0.109375 73.4492 1.14062 76.7539 3.20312C80.082 5.24219 82.6484 8.18359 84.4531 12.0273C86.2812 15.8477 87.1953 20.2656 87.1953 25.2812V27.5664ZM76.5078 25.2461C76.5078 19.8789 75.5469 15.8008 73.625 13.0117C71.7031 10.2227 68.9609 8.82812 65.3984 8.82812C61.8594 8.82812 59.1289 10.2109 57.207 12.9766C55.2852 15.7188 54.3125 19.75 54.2891 25.0703V27.5664C54.2891 32.793 55.25 36.8477 57.1719 39.7305C59.0938 42.6133 61.8594 44.0547 65.4688 44.0547C69.0078 44.0547 71.7266 42.6719 73.625 39.9062C75.5234 37.1172 76.4844 33.0625 76.5078 27.7422V25.2461ZM94.8594 52V0.8125H110.609C115.109 0.8125 119.129 1.83203 122.668 3.87109C126.23 5.88672 129.008 8.76953 131 12.5195C132.992 16.2461 133.988 20.4883 133.988 25.2461V27.6016C133.988 32.3594 133.004 36.5898 131.035 40.293C129.09 43.9961 126.336 46.8672 122.773 48.9062C119.211 50.9453 115.191 51.9766 110.715 52H94.8594ZM105.406 9.35547V43.5273H110.504C114.629 43.5273 117.781 42.1797 119.961 39.4844C122.141 36.7891 123.254 32.9336 123.301 27.918V25.2109C123.301 20.0078 122.223 16.0703 120.066 13.3984C117.91 10.7031 114.758 9.35547 110.609 9.35547H105.406ZM172.484 29.8164H152.234V43.5273H176V52H141.688V0.8125H175.93V9.35547H152.234V21.5547H172.484V29.8164Z"
              fill="white"
            />
          </svg>

          <div>start your programming journey</div>
        </div>
        <Search />
        <img src={BcgImg} alt="Logo" className="home-image" />
      </div>

      <Posts />
      <Form />
    </div>
  );
};

export default App;
