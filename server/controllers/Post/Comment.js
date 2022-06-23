import User from "../../models/user.js";
import Post from "../../models/Post.js";
import Comment from "../../models/comment.js";
import { FilterCommentData } from "../../utils/FilterCommentData.js";
import { sendDataToFriends } from "../../utils/socket/SendDataToFriend.js";

export const createComment = async (req, res) => {
  const { text, image } = req.body;
  if (!text || (text.trim().length === 0 && !image)) {
    return res.status(422).json({ error: "enter something or comment image" });
  }
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: "post not found" });
    }

    let body = {};
    if (image) {
      body.image = image;
    }

    if (text) {
      body.text = text;
    }

    const createComment = new Comment({
      user: req.userId,
      post: req.params.postId,
      body,
    });

    const saveComment = await createComment.save();
    const comment = await Comment.findById(saveComment.id).populate(
      "user",
      "_id name  profile_pic"
    );

    const filterComment = FilterCommentData(comment);
    res.status(201).json({
      message: "commented on post successfully",
      comment: filterComment,
    });
    await sendDataToFriends({ req, key: "post-comment", data: filterComment });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const fetchComments = async (req, res) => {
  let page = parseInt(req.query.page || 0);
  let limit = 3;

  try {
    const comments = await Comment.find({ post: req.params.postId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(page * limit)
      .populate("user", "_id name profile_pic");
    const filterComments = comments.map((comment) =>
      FilterCommentData(comment)
    );
    const totalCount = await Comment.countDocuments({
      post: req.params.postId,
    });

    const paginationData = {
      currentPage: page,
      totalPage: Math.ceil(totalCount / limit),
      totalComments: totalCount,
    };
    res
      .status(200)
      .json({ comments: filterComments, pagination: paginationData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const likeDislikeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId).populate(
      "user"
    );

    if (!comment) {
      return res.status(404).json({ error: "comment not found" });
    }

    let commentData;

    const index = comment.likes.indexOf(req.userId);
    if (index !== -1) {
      comment.likes.splice(index, 1);
      await comment.save();

      commentData = FilterCommentData(comment);

      res.status(200).json({ message: "removed likes", comment: commentData });

      await sendDataToFriends({
        req,
        key: "comment-like-change",
        data: commentData,
      });
      return;
    }

    comment.likes.push(req.userId);
    await comment.save();
    commentData = FilterCommentData(comment);
    res.status(200).json({ message: "add like", comment: commentData });
    await sendDataToFriends({
      req,
      key: "comment-like-change",
      data: commentData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
