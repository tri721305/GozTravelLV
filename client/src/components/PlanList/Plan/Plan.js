import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
// import Modal from "../Modal/testModal";
import Modal from "../Modal/testModal";
import moment from "moment";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../../../actions/posts";
const Plan = ({ post, setCurrentId }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-destination-grid text-center">
        <div className="thumb">
          <img src={post.selectedFile} />
        </div>
        <div className="details">
          {/* <div className="tp-review-meta">
            <i className="ic-yellow fa fa-star" />
            <i className="ic-yellow fa fa-star" />
            <i className="ic-yellow fa fa-star" />
            <i className="ic-yellow fa fa-star" />
            <i className="fa fa-star" />
            <span>4.0</span>
          </div> */}
          <h3 className="title">
            {post.title}
            {/* {post.id} */}
          </h3>
          <h5>{post.createAt}</h5>
          <p className="content">{post.message}</p>
          <Link className="btn btn-gray" to="/destination-details">
            <span>
              Explore
              <i className="la la-arrow-right" />
            </span>
          </Link>

          <Link className="btn btn-gray" to="/tourlist">
            <span>
              Add your activities
              <i className="la la-arrow-right" />
            </span>
          </Link>
          {/* <div clasName="app-container">
            <Modal />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Plan;
