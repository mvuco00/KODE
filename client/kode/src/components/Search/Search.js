import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Search.css";
const Search = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="What are you looking for?" />
      <SearchIcon style={{ color: "green" }} />
    </div>
  );
};

export default Search;
