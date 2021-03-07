import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  MenuItem,
  MenuList,
  Avatar,
  Button,
  Grow,
  Paper,
  Popper,
} from "@material-ui/core";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../Logo/logo";
import classes from "./Header.css";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginRight: "10px",
  },
  paper: {
    marginRight: "10px",
  },
}));

const Header = () => {
  // user sadrzi token i result
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classesM = useStyles();
  const isMobile = useMediaQuery({ query: `(max-width: 660px)` });

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
    setOpen(false);
  };

  useEffect(() => {
    const token = user?.token;
    // je li token istekao
    if (token) {
      const decodedToken = decode(token);
      // logout ako token istekne
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token]);

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
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.header}>
      <Logo />
      {isMobile ? (
        <div className={classes.headerLinksM}>
          <Link to="/">HOME</Link>
          {user && <Link to="/favorites">FAVOURITES</Link>}
          <Link to="/about">ABOUT US</Link>
        </div>
      ) : (
        <div className={classes.headerLinks}>
          <Link to="/">HOME</Link>
          {user && <Link to="/favorites">FAVOURITES</Link>}
          <Link to="/about">ABOUT US</Link>
        </div>
      )}

      {user ? (
        <div>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Avatar
              className={classesM.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: 9980 }}
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
                      <MenuItem onClick={handleClose}>
                        <Link to="/profile">Profile</Link>
                      </MenuItem>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      ) : (
        <button className={classes.signinButton}>
          <Link to="/auth" className={classes.signin}>
            SIGN IN
          </Link>
        </button>
      )}
    </div>
  );
};

export default Header;
