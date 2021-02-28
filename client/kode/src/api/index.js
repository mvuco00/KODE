import axios from "axios";
// dohvat podataka iz baze i vraćanje tih podataka

//taj url vraća sve postove koje imamo u bazi
const API = axios.create({ baseURL: "http://localhost:5000" });

// potrebno da dodamo dodatnu stvar u request
// izvede se za svaki request (dogodi se prije svih ostalih)
// treba nam jer token treba poslat backendu kako bi provjerio jesmo li logirani
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
