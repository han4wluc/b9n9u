import React from "react";
import "./FlexView.styles.css";
import cs from "classnames";

function FlexView(props) {
  const {
    children,
    className,
    onClick,
    center,
    column = true,
    justifyContentCenter,
    alignItemsCenter
  } = props;
  const classNames = cs({
    "flex-view": true,
    "flex-column": column,
    [className]: true,
    "flex-center": center,
    "flex-justify-content-center": justifyContentCenter,
    "flex-align-items-center": alignItemsCenter
  });
  return (
    <div onClick={onClick} className={classNames}>
      {children}
    </div>
  );
}

export default FlexView;
