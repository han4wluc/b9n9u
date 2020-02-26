import React from "react";
import "./Header.styles.css";
import FlexView from "../../primitives/FlexView";

function Header(props) {
  const { children } = props;
  return (
    <FlexView justifyContentCenter className="header">
      {children}
    </FlexView>
  );
}

export default Header;
