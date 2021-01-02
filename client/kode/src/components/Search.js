import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="What are you looking for?" />
      <SearchIcon style={{ color: "green" }} />
    </div>
  );
};

export default Search;
