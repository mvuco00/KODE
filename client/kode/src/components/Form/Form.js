import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";
import classes from "./Form.css";

// dohvat id trenutnog posta

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    youtubeLink: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  //useEffect se izvrsi kad se post promijeni
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  };
  const handleClear = () => {};

  return (
    <div className={classes.form}>
      <h1>FORM</h1>
      <form
        autoComplete="off"
        className={classes.inputs}
        noValidate
        onSubmit={handleSubmit}
      >
        {/*trebamo spreadat state kako se ne bi stalno overwrite-a nego da samo pomini potrebnu vrijednost*/}
        <input
          type="text"
          placeholder="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="youtube url"
          value={postData.youtubeLink}
          onChange={(e) =>
            setPostData({ ...postData, youtubeLink: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
        <div className={classes.buttons}>
          <button className={classes.clear} onClick={handleClear}>
            CLEAR
          </button>
          <button className={classes.btn} type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
