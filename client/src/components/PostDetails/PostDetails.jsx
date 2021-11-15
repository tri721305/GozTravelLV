import React, { useEffect } from "react";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { Paper, CircularProgress, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

// import CommentSection from "./CommentSection";

// import useStyles from "./styles.js";
import { getPost, getPostsBySearch } from "../../actions/posts";
const DestinatioDetails = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  //   const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  console.log(recommendedPosts);
  const openPost = (_id) => history.push(`/posts/${_id}`);
  return (
    <div>
      <div className="destinations-details-page mg-top--70">
        <div className="container">
          {/* destinations-details-main-slider start */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider">
                  <div className="d-details-main-slider-item">
                    <img
                      src={
                        post.selectedFile ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                      }
                      alt={post.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* destinations-details-main-slider End */}

          <div className="row destinations-details-location-name">
            <div className="col-lg-12">
              <h3>{post.title}</h3>
              <p>{moment(post.createAt).fromNow()}</p>
            </div>
            <div className="col-lg-6">
              <p>{post.message}</p>
            </div>
            <div className="col-lg-6">
              <p>{post.message}</p>
            </div>
          </div>
          {/* destinations-client-review-slider start */}
          {!!recommendedPosts.length && (
            <div>
              <h4 className="single-page-small-title">You might also like:</h4>
              {/* <Divider /> */}
              <div>
                {recommendedPosts.map(
                  ({ title, name, message, likes, selectedFile, _id }) => (
                    <div
                      onClick={() => openPost(_id)}
                      key={_id}
                      className="destinations-client-review-slider tp-common-slider-style"
                    >
                      <div
                        className="d-client-review-slider-item"
                        style={{ width: "30%" }}
                      >
                        <div className="single-destination-grid text-center">
                          <div className="thumb">
                            <img src={selectedFile} alt="img" />
                          </div>
                          <div className="details">
                            <h4 className="title">{title}</h4>
                            <p
                              className="content"
                              style={{ textAlign: "start" }}
                            >
                              Created by: {name}
                            </p>
                            <p
                              className="content"
                              style={{ textAlign: "start" }}
                            >
                              {/* {message} */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* End */}

          <Comments post={post} />
          {/* location-review-area start */}
        </div>
      </div>
      <div className="destination-area pd-top-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/8.png"}
                    alt="img"
                  />
                </div>
                <div className="details">
                  <h3 className="title">Sài Gòn</h3>
                  <p className="content">
                    Sài Gòn .. is the world's second largest and second most-
                    populous continent, being behind Asia in both categories. At
                    about 30.3 million km² including adjacent islands, it covers
                    6% Earth's total surface area and 20% land area.
                  </p>
                  <a className="btn btn-gray" href="#">
                    <span>
                      <Link to="/blogdetails">Explore</Link>{" "}
                      <i className="la la-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/9.png"}
                    alt="img"
                  />
                </div>
                <div className="details">
                  <h3 className="title">Hội An</h3>
                  <p className="content">
                    Hội An is the world's second largest and second most-
                    populous continent, being behind Asia in both categories. At
                    about 30.3 million km² including adjacent islands, it covers
                    6% Earth's total surface area and 20% land area.
                  </p>
                  <a className="btn btn-gray" href="#">
                    <span>
                      <Link to="/blogdetails">Explore</Link>{" "}
                      <i className="la la-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-destination-grid text-center">
                <div className="thumb">
                  <img
                    src={publicUrl + "assets/img/destination-list/10.png"}
                    alt="img"
                  />
                </div>
                <div className="details">
                  <h3 className="title">Bình Thuận</h3>
                  <p className="content">
                    Bình Thuận is the second most- populous continent, being
                    behind Asia in both categories. At about 30.3 million km²
                    including adjacent islands, it covers 6% Earth's total
                    surface area and 20% land area.
                  </p>
                  <a className="btn btn-gray" href="#">
                    <span>
                      <Link to="/blogdetails">Explore</Link>
                      <i className="la la-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinatioDetails;
