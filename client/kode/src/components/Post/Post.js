import React from "react";
import moment from "moment";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { Button } from "@material-ui/core";
import classes from "./Post.css";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className={classes.post}>
      <img src={post.selectedFile} className={classes.postImage} />
      <div className={classes.tags}>
        {post.tags.map((el) => (
          <span key={el} className={classes.tag}>{`#${el}`}</span>
        ))}
      </div>
      <div className={classes.textInPost}>
        <h2 className={classes.title}>{post.title}</h2>
        <span className={classes.creator}>
          by <b>{post.creator}</b>{" "}
        </span>
        <p className={classes.message}>{post.message}</p>
        <div className={classes.dateButton}>
          <span className={classes.date}>
            added {moment(post.createdAt).fromNow()}
          </span>
          <Button size="small" color="primary">
            <StarBorderIcon fontSize="small" /> <b>{post.likeCount}</b>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
