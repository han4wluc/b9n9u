import React, { useCallback } from "react";
import FlexView from "../../primitives/FlexView";
import "./SearchBar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props) {
  const { keyword, onChangeKeyword, resetKeyword, isSearchMode } = props;
  const handleOnChange = useCallback(
    e => {
      onChangeKeyword(e.target.value);
    },
    [onChangeKeyword]
  );

  const iconComp = isSearchMode ? (
    <FontAwesomeIcon
      className="search-bar-icon"
      icon={faTimes}
      onClick={resetKeyword}
    />
  ) : (
    <FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
  );

  return (
    <FlexView justifyContentCenter className="search-bar">
      <input
        className="search-bar-input"
        placeholder="Search"
        value={keyword}
        onChange={handleOnChange}
      />
      {iconComp}
    </FlexView>
  );
}

export default SearchBar;
