import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "../Post/Post";
import classes from "./Favorites.css";

const Favorites = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const posts = useSelector((state) => state.posts);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    let arr = [];
    posts.map((post) => {
      return post.likes.includes(user?.result?._id) && arr.push(post);
    });
    setLikedPosts(arr);
  }, [posts, user?.result?._id]);

  return (
    <div className={classes.posts}>
      <h1>Favourite tutorials</h1>
      <div className={classes.allPosts}>
        {likedPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
