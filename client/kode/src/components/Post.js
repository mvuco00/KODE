import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <h5>{post.message}</h5>
      <span>by: {post.creator}</span>
      <span>likes: {post.likes}</span>
    </div>
  );
};

export default Post;
