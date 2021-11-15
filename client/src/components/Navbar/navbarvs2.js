import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Avatar, Button, Toolbar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import useStyles from "./styles";

const NavbarVS2 = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "logo";
  let anchor = "#";

  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();

  const history = useHistory();

  const location = useLocation;

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
      <div className="container nav-container">
        <div className="responsive-mobile-menu">
          <div className="mobile-logo">
            <Link to="/">
              <img
                src={publicUrl + "assets/img/sticky-logo.png"}
                alt={imgattr}
              />
            </Link>
          </div>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#tp_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </span>
          </button>
          <div className="nav-right-content">
            <ul className="pl-0">
              <li className="top-bar-btn-booking">
                <Link className="btn btn-yellow" to="/tour-details">
                  Sign InSS <i className="fa fa-paper-plane" />
                </Link>
              </li>
              <li className="tp-lang">
                <div className="tp-lang-wrap">
                  <select className="select single-select">
                    <option value={1}>ENG</option>
                    <option value={2}>VIET</option>
                    <option value={3}>Chinese</option>
                    <option value={3}>S</option>
                  </select>
                </div>
              </li>
              <li className="search">
                <i className="ti-search" />
              </li>
              <li className="notification">
                <a className="signUp-btn" href="#">
                  <i className="fa fa-user-o" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="tp_main_menu">
          <div className="logo-wrapper desktop-logo">
            <Link to="/" className="main-logo">
              <img
                src={publicUrl + "assets/img/logo.png"}
                alt="logo"
                style={{ height: "50px" }}
              />
            </Link>
            <Link to="/" className="sticky-logo">
              <img src={publicUrl + "assets/img/sticky-logo.png"} alt="logo" />
            </Link>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Plan</a>
              <ul className="sub-menu">
                <li>
                  <Link to="/plans">Create Plan</Link>
                </li>
                {/* <li><Link to="/tour-list">Tours List</Link></li> */}
                <li>
                  <Link to="/tour-list-v2">Plan List</Link>
                </li>

                <li>
                  <Link to="/destination-list">Destination List</Link>
                </li>

                <li>
                  <Link to="/error">404</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/user-profile">User Profile</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to="/posts">Blog</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/posts">Create Blog</Link>
                </li>

                <li>
                  <Link to="/posts">Blogs</Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
        <div className="nav-right-content">
          <ul>
            <li></li>

            {user ? (
              <li>
                <div className={classes.profile}>
                  <Avatar
                    className={classes.purple}
                    alt={user.result.name}
                    src={user.result.imageUrl}
                  >
                    {user.result.name.charAt(0)}
                  </Avatar>
                  <Typography className={classes.userName} variant="p">
                    {user.result.name}
                  </Typography>
                  <Button
                    variant="contained"
                    className={classes.logout}
                    style={{ backgroundColor: "#F39142", color: "white" }}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              </li>
            ) : (
              <li>
                <Button
                  component={Link}
                  to="/auth"
                  variant="contained"
                  style={{ backgroundColor: "#F3941E", color: "white" }}
                  className="btn "
                >
                  Sign in
                </Button>
              </li>
            )}
            <li className="tp-lang">
              <div className="tp-lang-wrap">
                <select className="select single-select">
                  <option value={1}>ENG</option>
                  <option value={2}>VIET</option>
                  <option value={3}>Chinese</option>
                  <option value={3}>S</option>
                </select>
              </div>
            </li>
            {/* <li className="search">
              <i className="ti-search" />
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarVS2;
