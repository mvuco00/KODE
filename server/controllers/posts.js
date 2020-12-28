import PostMessage from "../models/postMessage.js";

//logika routa
export const getPosts = async (req, res) => {
  //localhost:5000/posts
  try {
    //find() treba neko vrijeme da se izvrsi, to je asinkrono, pa je potreban await i async
    const postMessage = await PostMessage.find();
    console.log(postMessage);

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
