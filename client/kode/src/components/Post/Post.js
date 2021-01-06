import React from "react";
import moment from "moment";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import classes from "./Post.css";

const Post = ({ post, setCurrentId }) => {
  console.log(post);
  return (
    <div className={classes.post}>
      <a href={post.youtubeLink} target="_blank" rel="noopener noreferrer">
        <img
          src={post.selectedFile}
          className={classes.postImage}
          alt="tutorials"
        />
      </a>

      <div className={classes.tags}>
        {post.tags.map((el) => (
          <span key={el} className={classes.tag}>{`#${el}`}</span>
        ))}
      </div>
      <div className={classes.textInPost}>
        <a href={post.youtubeLink} target="_blank" rel="noopener noreferrer">
          <h2 className={classes.title}>{post.title}</h2>
        </a>

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
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHorizIcon />
        </Button>
      </div>
    </div>
  );
};

export default Post;
