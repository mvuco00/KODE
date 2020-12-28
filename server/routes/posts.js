import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
const router = express.Router();

//callback se izvodi kad neko posjeti navedenu rutu (odnosno onu koja se navodi u index.js)
//callback ima req i res
router.get("/", getPosts);

router.post("/", createPost);

export default router;
