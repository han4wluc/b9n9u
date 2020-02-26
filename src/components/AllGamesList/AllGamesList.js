import React, { useCallback } from "react";
import Image from "../../primitives/Image";
import "./AllGamesList.styles.css";
import FlexView from "../../primitives/FlexView";
import Text from "../../primitives/Text";

function RecentlyPlayedList(props) {
  const { games, onClickGame } = props;

  const items = games.map(game => {
    const handleClickGame = () => {
      onClickGame(game);
    };
    return (
      <FlexView
        key={game.namespace}
        onClick={handleClickGame}
        className="all-games-item"
      >
        <FlexView className="all-games-item-image-container">
          <Image
            src={game.assets.thumbnail.small}
            className="all-games-item-image"
          />
        </FlexView>
        <FlexView className="all-games-item-body">
          <Text oneLine>{game.title}</Text>
          <Text size="small" className="all-games-item-gendre">
            Hello
          </Text>
        </FlexView>
      </FlexView>
    );
  });
  return (
    <FlexView className="all-games-list" column={false}>
      {items}
    </FlexView>
  );
}

export default RecentlyPlayedList;
