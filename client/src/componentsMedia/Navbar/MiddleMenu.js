import React, { Fragment, useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Button,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Grow,
  ClickAwayListener,
} from "@material-ui/core";

import useStyles from "./styles";

import { Home, HomeOutlined, Person, PersonOutlined } from "@material-ui/icons";

function MiddleMenu() {
  const classes = useStyles();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Fragment>
      <Button
        component={NavLink}
        activeClassName={classes.activeBtn}
        to="/home"
        className={classes.buttonItemMiddle}
      >
        {location.pathname == "/home" ? (
          <Home
            fontSize="large"
            style={{
              color: "rgb(0,133,243)",
            }}
          />
        ) : (
          <HomeOutlined style={{ color: "white" }} />
        )}
      </Button>
      <Button
        component={NavLink}
        activeClassName={classes.activeBtn}
        to="/friends"
        className={classes.buttonItemMiddle}
      >
        {location.pathname == "/friends" ? (
          <Person fontSize="large" style={{ color: "rgb(0,133,243)" }} />
        ) : (
          <PersonOutlined style={{ color: "white" }} />
        )}
      </Button>

      <div>
        {/* <Paper className={classes.paper}>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Paper> */}
        <div>
          <Button
            component={NavLink}
            to="/about"
            style={{ color: "white", textTransform: "none" }}
          >
            About Us
          </Button>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ color: "white", textTransform: "none" }}
          >
            Plans
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem component={NavLink} to="/plans">
                        Hihi
                      </MenuItem>
                      <MenuItem onClick={handleClose}>CreatePlan</MenuItem>
                      <MenuItem onClick={handleClose}>My Plans</MenuItem>
                      <MenuItem onClick={handleClose}>Shared Plans</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </Fragment>
  );
}

export default MiddleMenu;
