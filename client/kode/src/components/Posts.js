import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="posts">
      <h3>POSTS</h3>
      <div>
        <Post />
      </div>
    </div>
  );
};

export default Posts;
