import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.css";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  // user sadrzi token i result
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <div className={classes.header}>
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.logo}
      >
        <path
          d="M8.30078 15.7344L5.55859 18.6875V26H0.285156V0.40625H5.55859V12.0078L7.87891 8.82617L14.4004 0.40625H20.8867L11.7988 11.7793L21.1504 26H14.875L8.30078 15.7344Z"
          fill="#FDF5F5"
        />
      </svg>

      <div className={classes.headerLinks}>
        <Link to="/">HOME</Link>
        <Link to="/favorites">FAVORITES</Link>
        <Link to="/about">ABOUT US</Link>
      </div>
      {user ? (
        <div>
          <AccountCircleIcon />
          <Button size="small" color="primary" onClick={() => {}}>
            <ExitToAppIcon />
          </Button>
        </div>
      ) : (
        <Button component={Link} to="/auth">
          SIGN IN
        </Button>
      )}
    </div>
  );
};

export default Header;
