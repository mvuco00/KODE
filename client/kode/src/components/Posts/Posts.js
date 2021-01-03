import React from "react";
import Post from "../Post/Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import classes from "./Posts.css";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className={classes.posts}>
      <h1>BEST TUTORIALS </h1>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <div className={classes.allPosts}>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
