import React from "react";
import "./SearchGameItems.styles.css";
import FlexView from "../../primitives/FlexView";
import Image from "../../primitives/Image";
import Text from "../../primitives/Text";

function SearchGameItems(props) {
  const { games, onClickGame } = props;
  const items = games.map(game => {
    const handleClick = () => {
      onClickGame(game);
    };
    return (
      <FlexView
        key={game.namespace}
        onClick={handleClick}
        className="search-game-item"
        column={false}
        alignItemsCenter={true}
      >
        <Image
          src={game.assets.cover.small}
          className="search-game-item-image"
        />
        <Text size="small" oneLine white>
          {game.title}
        </Text>
      </FlexView>
    );
  });
  return <FlexView className="search-game-list">{items}</FlexView>;
}

export default SearchGameItems;
