import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import classes from "./Posts.css";

const Posts = ({ setCurrentId, search }) => {
  const posts = useSelector((state) => state.posts);
  const [filteredData, setFilteredData] = useState();
  console.log(posts);

  useEffect(() => {
    search !== ""
      ? setFilteredData(
          posts.filter((post) =>
            post.message.toLowerCase().includes(search.toLowerCase())
          )
        )
      : setFilteredData(posts);
  }, [search, posts]);
  console.log("SEARCH", filteredData);
  return (
    <div className={classes.posts}>
      <h1>BEST TUTORIALS </h1>

      {!posts.length ? (
        <CircularProgress />
      ) : (
        <div className={classes.allPosts}>
          {filteredData.map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
