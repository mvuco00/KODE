import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";
import classes from "./Form.css";

// dohvat id trenutnog posta

const Form = ({ currentId, setCurrentId }) => {
  console.log("rendering-form");
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    youtubeCreator: "",
    title: "",
    youtubeLink: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  //useEffect se izvrsi kad se post promijeni
  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      handleClear();
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      handleClear();
    }
  };
  const handleClear = () => {
    setCurrentId(null);
    setPostData({
      youtubeCreator: "",
      title: "",
      youtubeLink: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <div id="form" className={classes.form}>
      <h1>{currentId ? "EDIT" : "ADD"}</h1>
      <form autoComplete="off" className={classes.inputs} noValidate>
        {/*trebamo spreadat state kako se ne bi stalno overwrite-a nego da samo pomini potrebnu vrijednost*/}
        <input
          type="text"
          placeholder="Youtube creator"
          value={postData.youtubeCreator}
          onChange={(e) =>
            setPostData({ ...postData, youtubeCreator: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Youtube link"
          value={postData.youtubeLink}
          onChange={(e) =>
            setPostData({ ...postData, youtubeLink: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tag"
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
          <button className={classes.btn} onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Form);
