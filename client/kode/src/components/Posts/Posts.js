import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import classes from "./Posts.css";

const Posts = ({ setCurrentId, search }) => {
  const posts = useSelector((state) => state.posts);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    search !== ""
      ? setFilteredData(
          posts.filter((post) =>
            post.message.toLowerCase().includes(search.toLowerCase())
          )
        )
      : setFilteredData(posts);
  }, [search, posts]);

  return (
    <div className={classes.posts}>
      <h1>BEST TUTORIALS </h1>

      {!posts.length ? (
        <CircularProgress />
      ) : (
        <div className={classes.allPosts}>
          {filteredData !== undefined
            ? filteredData.map((post) => (
                <Post key={post._id} post={post} setCurrentId={setCurrentId} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Posts;
