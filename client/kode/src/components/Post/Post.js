import React from "react";
import moment from "moment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";
import classes from "./Post.css";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  console.log(post);
  const dispatch = useDispatch();
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
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteForeverIcon />
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likePost(post._id))}
        >
          <FavoriteBorderIcon fontSize="small" />{" "}
          <b>&nbsp; {post.likeCount} &nbsp;</b>
        </Button>
      </div>
    </div>
  );
};

export default Post;
