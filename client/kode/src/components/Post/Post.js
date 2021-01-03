import React from "react";
import moment from "moment";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Button } from "@material-ui/core";
import classes from "./Post.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className={classes.post}>
      <img src={post.selectedFile} />
      <h1>{post.title}</h1>
      <h5>{post.message}</h5>
      <span>by: {post.creator}</span>

      <div>{moment(post.createdAt).fromNow()}</div>
      <div>
        {post.tags.map((el) => (
          <span key={el}>{`#${el}`}</span>
        ))}
      </div>
      <Button size="small" color="primary">
        <StarBorderIcon fontSize="small" /> Fav {post.likeCount}
      </Button>
    </div>
  );
};

export default Post;
