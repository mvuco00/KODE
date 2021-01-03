import React from "react";
import classes from "./Post.css";
const Post = ({ post }) => {
  console.log(post);
  return (
    <div className={classes.post}>
      <h1>{post.title}</h1>
      <h5>{post.message}</h5>
      <span>by: {post.creator}</span>
      <span>likes: {post.likes}</span>
    </div>
  );
};

export default Post;
