import React from "react";
import "./GameIframe.styles.css";

function GameIframe(props) {
  const { src } = props;
  return <iframe className="game-iframe" src={src} />;
}

export default GameIframe;
