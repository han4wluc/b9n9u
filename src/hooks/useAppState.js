import { useState, useCallback, useMemo, useEffect } from "react";

import axios from "axios";

const PAGE_SIZE = 6;
const MAX_RECENTLY_PLAYED_GAMES = 6;

function useAppState() {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentGame, setCurrentGame] = useState();
  const [gameViewHidden, setGameViewHidden] = useState(true);
  const [recentlyPlayedGames, setRecentlyPlayedGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  const loadMore = useCallback(() => {
    setAllGames(data.slice(0, allGames.length + PAGE_SIZE));
  }, [allGames, setAllGames, data]);

  const fetchData = useCallback(async () => {
    const res = await axios.get(
      "https://api.h5.gamepix.com/v3/game/sid/110600"
    );
    setData(res.data.data);
    setAllGames(res.data.data.slice(0, PAGE_SIZE));
  }, [setData, loadMore]);

  useEffect(() => {
    fetchData();
  }, [0]);

  const updateSearchKeyword = useCallback(
    keyword => {
      if (keyword === "") {
        document.body.classList.remove("no-scroll");
      } else {
        document.body.classList.add("no-scroll");
      }
      setSearchKeyword(keyword);
    },
    [setSearchKeyword]
  );

  const resetKeyword = useCallback(() => {
    document.body.classList.remove("no-scroll");
    setSearchKeyword("");
  }, [setSearchKeyword]);

  const isSearchMode = useMemo(() => {
    return searchKeyword !== "";
  }, [searchKeyword]);

  const selectCurrentGame = useCallback(
    game => {
      document.body.classList.add("no-scroll");
      setCurrentGame(game);
      setGameViewHidden(false);
    },
    [setCurrentGame, setGameViewHidden]
  );

  const exitCurrentGame = useCallback(() => {
    document.body.classList.remove("no-scroll");
    setCurrentGame(undefined);
    setTimeout(() => {
      setGameViewHidden(true);
    }, 500);
  }, [setCurrentGame, setGameViewHidden]);

  const topGames = useMemo(() => {
    const sortedGames = data.concat([]).sort((prev, next) => {
      return next.features.rkScore - prev.features.rkScore;
    });
    return sortedGames.slice(0, 3);
  }, [data]);

  const addRecentlyPlayedGame = useCallback(
    game => {
      const tempArr = [].concat(recentlyPlayedGames);
      const index = tempArr.indexOf(game);
      if (index !== -1) {
        tempArr.splice(index, 1);
      }
      tempArr.unshift(game);
      setRecentlyPlayedGames(tempArr.slice(0, MAX_RECENTLY_PLAYED_GAMES));
    },
    [recentlyPlayedGames, setRecentlyPlayedGames]
  );

  const hasLoadedAllGames = useMemo(() => {
    return allGames.length === data.length;
  }, [allGames, data]);

  const searchResultGames = useMemo(() => {
    return data.filter(game => {
      return game.title.toLowerCase().startsWith(searchKeyword.toLowerCase());
    });
  }, [data, searchKeyword]);

  return {
    currentGame,
    searchKeyword,
    updateSearchKeyword,
    isSearchMode,
    resetKeyword,
    selectCurrentGame,
    exitCurrentGame,
    gameViewHidden,
    topGames,
    recentlyPlayedGames,
    addRecentlyPlayedGame,
    allGames,
    loadMore,
    hasLoadedAllGames,
    searchResultGames
  };

  return data;
}

export default useAppState;
