import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

// instanca routera
const router = express.Router();

// callback se izvodi kad neko posjeti navedenu rutu (odnosno onu koja se navodi u index.js)
// callback ima req i res
router.get("/", getPosts);

// kad se middlewate (auth) pozove prije akcije, u akciji imamo pristup requestu koji auth vrati (req.userId)
// odnostno, na req se nadoda taj property
router.post("/", auth, createPost);

// patch se koristi za update
router.patch("/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);

// prilikom lajkanje se radi update, pa ide patch
router.patch("/:id/likePost", auth, likePost);
export default router;
