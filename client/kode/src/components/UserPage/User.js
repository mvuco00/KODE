import React from "react";
import classes from "./User.css";
const User = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div className={classes.userPage}>
      <h1>{user?.result?.name}</h1>
      <h3>{user?.result?.email}</h3>
    </div>
  );
};

export default User;
