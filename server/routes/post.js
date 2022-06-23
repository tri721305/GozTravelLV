import express from "express";

// const router = require("express").Router();
import {
  createComment,
  fetchComments,
  likeDislikeComment,
  //   createReply,
} from "../controllers/Post/Comment.js";
import { fetchAllPosts, fetchPostById } from "../controllers/Post/FetchPost.js";
import { createPost, likeDislikePost } from "../controllers/Post/postAction.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/", auth, createPost);
router.get("/", auth, fetchAllPosts);
router.get("/:postId", auth, fetchPostById);

router.get("/comment/:commentId/like_dislike", auth, likeDislikeComment);

router.get("/:postId/like_dislike", auth, likeDislikePost);
router.get("/:postId/comment", auth, fetchComments);
router.post("/:postId/comment", auth, createComment);

export default router;
