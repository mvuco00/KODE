import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
const router = express.Router();

// callback se izvodi kad neko posjeti navedenu rutu (odnosno onu koja se navodi u index.js)
// callback ima req i res
router.get("/", getPosts);

router.post("/", createPost);

// patch se koristi za update
router.patch("/:id", updatePost);

router.delete("/:id", deletePost);

// prilikom lajkanje se radi update, pa ide patch
router.patch("/:id/likePost", likePost);
export default router;
