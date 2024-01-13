import Post from "../../models/Post.js";
import Comment from "../../models/comment.js";
import { FilterPostData } from "../../utils/FilterPostData.js";

export const fetchPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("user")
      .populate({ path: "body.with" });

    let postData = FilterPostData(post);

    res.status(200).json({ post: postData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
    return res
      .status(500)
      .json({ errorMessage: "Something went wrong, please check again!!" });
  }
};

export const fetchAllPosts = async (req, res) => {
  let page = parseInt(req.query.page || 0);
  let limit = 3;

  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(page * limit)
      .populate("user")
      .populate({ path: "body.with" });

    let postsData = posts.map((post) => FilterPostData(post));

    const totalCount = await Post.estimatedDocumentCount().exec();
    const paginationData = {
      currentPage: page,
      totalPage: Math.ceil(totalCount / limit),
      totalPost: totalCount,
    };
    res.status(200).json({ posts: postsData, pagination: paginationData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
