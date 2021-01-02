import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="posts">
      <h3>POSTS</h3>
      <div>
        {!posts.length ? (
          <CircularProgress />
        ) : (
          <Grid container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Posts;
