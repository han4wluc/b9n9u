import React from "react";

function Image(props) {
  const {
    className,
    onClick,
    src = "https://games.assets.gamepix.com/40263/banner/small.png"
  } = props;
  return <img onClick={onClick} className={className} src={src} />;
}

export default Image;
