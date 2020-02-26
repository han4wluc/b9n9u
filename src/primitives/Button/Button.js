import React from "react";
import FlexView from "../FlexView";
import "./Button.styles.css";

function Button(props) {
  const { children, onClick } = props;
  return (
    <FlexView onClick={onClick} className="button" center>
      {children}
    </FlexView>
  );
}

export default Button;
