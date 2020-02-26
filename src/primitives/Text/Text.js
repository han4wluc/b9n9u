import React from "react";
import cs from "classnames";
import "./Text.styles.css";

function Text(props) {
  const { children, className, oneLine, white, size } = props;
  const classNames = cs({
    [className]: true,
    "text-one-line": oneLine,
    "text-white": white,
    "text-small": size === "small"
  });
  return <div className={classNames}>{children}</div>;
}

export default Text;
