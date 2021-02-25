import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

//logika routa
export const getPosts = async (req, res) => {
  //localhost:5000/posts
  try {
    //find() treba neko vrijeme da se izvrsi, to je asinkrono, pa je potreban await i async
    const postMessage = await PostMessage.find();

    //status 200 -- sve je dobro
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  //modelu saljemo vrijednosti koje smo dobili preko formi (a one su u varijabli post)
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    //status 201 -- good creation
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//naša ruta je /:id, pa ce zahtjev biti /posts/123, 123 je id

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  //ono sto dobivamo od fronteda
  const post = req.body;
  // provjera je li dobiveni id stvarno mongoose objekt
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  //stvara se novi post
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  // provjera je li dobiveni id stvarno mongoose objekt
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted sucessfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  // provjera user-a, preko middleware-a
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  // provjera je li dobiveni id stvarno mongoose objekt
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  // dohvat posta koji user lajka
  const post = await PostMessage.findById(id);
  // je li user već lajkao
  // u likes se nalaze id-jevi onih koji su lajkali post
  // findIndex vraća -1 ako ne pronađe
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    // like - pushanje userId-ja u listu tko je lajka
    post.likes.push(req.userId);
  } else {
    // dislike
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
