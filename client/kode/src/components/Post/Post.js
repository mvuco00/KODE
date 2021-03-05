import React from "react";
import moment from "moment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";
import classes from "./Post.css";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {`${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <FavoriteBorderIcon fontSize="small" />
        &nbsp;Like
      </>
    );
  };
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
          by <b>{post.youtubeCreator}</b>{" "}
        </span>
        <p className={classes.message}>{post.message}</p>
        <div className={classes.dateButton}>
          <span className={classes.date}>
            added {moment(post.createdAt).fromNow()}
          </span>
        </div>
        <div className={classes.buttons}>
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                setCurrentId(post._id);
              }}
            >
              <MoreHorizIcon />
            </Button>
          )}
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteForeverIcon fontSize="small" /> Delete
            </Button>
          )}

          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Post);
