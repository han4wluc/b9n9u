import React from "react";
import FlexView from "../../primitives/FlexView";
import "./Layout.styles.css";

function Layout(props) {
  const { children } = props;
  return <FlexView className="layout">{children}</FlexView>;
}

export default Layout;
