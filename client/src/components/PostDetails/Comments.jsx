import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import useStyles from "./styles";
import { commentPost } from "../../actions/posts";
const Comments = ({ post }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const commentsRef = useRef();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment} `;

    const newComments = await dispatch(commentPost(finalComment, post._id));

    setComments(newComments);
    setComment("");

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="blog-details-area pd-top-120 viaje-go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* comments-area-start */}
            <div className="comments-area">
              <h4 className="comments-title">Comments</h4>
              <ul className="comment-list">
                {comments.map((c, i) => (
                  <li key={i}>
                    <div className="single-comment-wrap">
                      <div className="thumb">
                        <img
                          src={publicUrl + "assets/img/blog-details/9.png"}
                          alt="img"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">{c.split(":")[0]}</h4>
                        <span className="date">17 SEP 2020</span>
                        <p>{c.split(":")[1]}</p>
                        <a href="#" className="reply btn btn-yellow">
                          <span>
                            <i className="fa fa-reply" />
                            Reply
                          </span>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
                <div ref={commentsRef} />
              </ul>
            </div>
            {/* comments-area-end */}
            {/* blog-comment-area start */}
            {/* {user?result?.name && ()} */}
            {user?.result?.name && (
              <div className="blog-comment-area">
                <h4 className="single-page-small-title">Write A Coment.</h4>
                <div className="row">
                  <div className="col-lg-12">
                    <label className="single-input-wrap">
                      <span className="single-input-title">comments</span>
                      <textarea
                        value={comment}
                        defaultValue={""}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col-12">
                    <a
                      onClick={handleClick}
                      className="btn btn-yellow"
                      href="#"
                    >
                      Send Comment
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
