import axios from "axios";

//taj url vraća sve postove koje imamo u bazi
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
