import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    youtubeLink: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const handleClear = () => {};

  return (
    <div className="form">
      <h1>FORM</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
        <button type="submit">SUBMIT</button>
        <button onClick={handleClear}>CLEAR</button>
      </form>
    </div>
  );
};

export default Form;
