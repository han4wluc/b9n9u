import React, { useMemo, useCallback } from "react";
import "./styles.css";
import cs from "classnames";

import Header from "./components/Header";
import Layout from "./components/Layout";
import CarouselBanner from "./components/CarouselBanner";
import Text from "./primitives/Text";
import RecentlyPlayedList from "./components/RecentlyPlayedList";
import AllGamesList from "./components/AllGamesList";
import Button from "./primitives/Button";
import SearchBar from "./components/SearchBar";
import SearchGameItems from "./components/SearchGameItems";
import FlexView from "./primitives/FlexView";
import useAppState from "./hooks/useAppState";
import GameView from "./components/GameView";

export default function App() {
  const {
    searchKeyword,
    updateSearchKeyword,
    isSearchMode,
    resetKeyword,
    currentGame,
    selectCurrentGame,
    exitCurrentGame,
    gameViewHidden,
    recentlyPlayedGames,
    addRecentlyPlayedGame,
    allGames,
    topGames,
    loadMore,
    hasLoadedAllGames,
    searchResultGames
  } = useAppState();

  const searchGameItemsContainerClassNames = cs({
    "search-game-items-container": true,
    hidden: !isSearchMode
  });

  const gameViewClassNames = useMemo(() => {
    return cs({
      slidein: !!currentGame,
      slideout: !currentGame
    });
  }, [currentGame]);

  const handleOnClickGame = useCallback(
    game => {
      selectCurrentGame(game);
      setTimeout(() => {
        addRecentlyPlayedGame(game);
      }, 500);
    },
    [addRecentlyPlayedGame, selectCurrentGame]
  );

  return (
    <Layout>
      <FlexView className="layout-body">
        <CarouselBanner onClickGame={handleOnClickGame} games={topGames} />

        {recentlyPlayedGames.length > 0 && (
          <React.Fragment>
            <Text className="recently-played-headline">Recently Played</Text>
            <RecentlyPlayedList
              onClickGame={handleOnClickGame}
              games={recentlyPlayedGames}
            />
          </React.Fragment>
        )}

        <FlexView className="all-games-container">
          <Text className="all-games-headline">All Games</Text>
          <AllGamesList games={allGames} onClickGame={handleOnClickGame} />
        </FlexView>

        {!hasLoadedAllGames && <Button onClick={loadMore}> Load More </Button>}
      </FlexView>

      <Header>
        <SearchBar
          keyword={searchKeyword}
          onChangeKeyword={updateSearchKeyword}
          isSearchMode={isSearchMode}
          resetKeyword={resetKeyword}
        />
      </Header>

      <FlexView className={searchGameItemsContainerClassNames}>
        <SearchGameItems
          onClickGame={handleOnClickGame}
          games={searchResultGames}
        />
      </FlexView>

      {!gameViewHidden && (
        <GameView
          game={currentGame}
          onClickBack={exitCurrentGame}
          className={gameViewClassNames}
        />
      )}
    </Layout>
  );
}
