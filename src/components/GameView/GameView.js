import React from "react";
import cs from "classnames";

import "./GameView.styles.css";

import FlexView from "../../primitives/FlexView";
import Navigator from "./components/Navigator";
import GameIframe from "./components/GameIframe";

function GameView(props) {
  const { className, onClickBack, game } = props;
  return (
    <FlexView className={cs([className, "game-view-container"])}>
      <Navigator leftOnClick={onClickBack} />
      <GameIframe src={game?.playUrl} />
    </FlexView>
  );
}

export default GameView;
