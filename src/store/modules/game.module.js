// import gameService from '@/services/game-service.js';
import gameService from '../../services/game.service.js';

export default {
  state: {
    games: [],
    filterBy: null,
    pageIdx: 0,
    gamesLength: 0
  },
  getters: {
    games(state) {
      return JSON.parse(JSON.stringify(state.games));
    },
    gamesLength(state) {
      return JSON.parse(JSON.stringify(state.gamesLength));
    },
    currentPage(state) {
      return JSON.parse(JSON.stringify(state.pageIdx));
    },
    //   gamesToShow(state) {
    //     const gamesCopy = JSON.parse(JSON.stringify(state.games));
    //     return gamesCopy;
    //   },
  },
  mutations: {
    setGames(state, { gamesInfo }) {
      state.games = gamesInfo.games
    },
    setGamesLength(state, { gamesInfo }) {
      state.gamesLength = gamesInfo.gamesLength
    },
    //   removeGame(state, { id }) {
    //     const idx = state.games.findIndex((game) => game._id === id);
    //     state.games.splice(idx, 1);
    //   },
    //   saveGame(state, { game }) {
    //     const idx = state.games.findIndex((currGame) => currGame._id === game._id);
    //     if (idx !== -1) {
    //       state.games.splice(idx, 1, game);
    //     } else {
    //       state.games.push(game);
    //     }
    //   },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    setPageToZero(state) {
      state.pageIdx = 0
    },
    setPage(state, pageDirection) {
      let pageNumber = pageDirection.pageNumber - 1
      let currDirection = pageDirection.pageWay

      if (pageNumber || pageNumber === 0) {
        state.pageIdx = pageNumber
      }
      if (currDirection === 'next') {
        if ((state.pageIdx + 1) * 24 >= state.gamesLength) return
        else state.pageIdx++
      }
      if (currDirection === 'prev') {
        if (state.pageIdx === 0) return
        else state.pageIdx--
      }
    },
  },
  actions: {
    loadGames(context, state) {
      let filterBy = { ...context.state.filterBy }
      let pageIdx = { ...context.state }
      let currPage = pageIdx.pageIdx
      //server side filter
      return gameService
        .query(filterBy, currPage)
        .then((gamesInfo) => {
          context.commit({ type: 'setGames', gamesInfo })
          context.commit({ type: 'setGamesLength', gamesInfo })
        })
        .catch((err) => {
          console.log('Error: cannot get games', err);
          throw err;
        });
    },
    changePage({ commit, dispatch }, pageNumber) {
      commit({ type: 'setPage', pageNumber })
      dispatch({ type: 'loadGames' })
    },
    nextPage({ commit, dispatch }, pageDirection) {
      commit({ type: 'setPage', pageWay: pageDirection })
      dispatch({ type: 'loadGames' })
    },
    prevPage({ commit, dispatch }, pageDirection) {
      commit({ type: 'setPage', pageWay: pageDirection })
      dispatch({ type: 'loadGames' })
    },
    // context.commit   payload.id
    // removeGame({ commit }, { id }) {
    //   return gameService
    //     .remove(id)
    //     .then(() => {
    //       commit({ type: 'removeGame', id });
    //     })
    //     .catch((err) => {
    //       console.log('Error: cannot remove game', err);
    //       throw err;
    //     });
    // },
    // saveGame({ commit }, { game }) {
    //   return gameService
    //     .save(game)
    //     .then((savedGame) => {
    //       commit({ type: 'saveGame', game: savedGame });
    //       console.log('savedGame', savedGame);
    //       return savedGame; // can return if you we want showMsg
    //     })
    //     .catch((err) => {
    //       console.log('Error: cannot save game', err);
    //       throw err;
    //     });
    // },
    getGameById(context, { gameId }) {
      return gameService
        .getById(gameId)
        .then((game) => {
          // console.log(game);
          //can add commit if needed
          return game;
        })
        .catch((err) => {
          console.log('Error: cannot get game', err);
          throw err;
        });
    },
    //set the filter and run the loadGames with the filter
    setFilterAct({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      commit({ type: 'setPageToZero' })
      dispatch({ type: 'loadGames' });
    },
  },
};
