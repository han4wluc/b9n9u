import React from "react";
import "./RecentlyPlayed.styles.css";
import FlexView from "../../primitives/FlexView";
import Image from "../../primitives/Image";

function RecentlyPlayedList(props) {
  const { games, onClickGame } = props;

  const items = games.map(game => {
    const handleOnClckGame = () => {
      onClickGame(game);
    };
    return (
      <FlexView key={game.namespace} className="recently-played-item">
        <Image
          onClick={handleOnClckGame}
          src={game.assets.cover.small}
          className="recently-played-image"
        />
      </FlexView>
    );
  });

  return (
    <FlexView className="recently-played-list" column={false}>
      {items}
    </FlexView>
  );
}

export default RecentlyPlayedList;
