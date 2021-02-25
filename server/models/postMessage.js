import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  youtubeLink: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//schemu treba pretvoriti u model
const postMessage = mongoose.model("PostMessage", postSchema);

export default postMessage;
