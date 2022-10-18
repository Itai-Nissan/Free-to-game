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
  },
  mutations: {
    setGames(state, { gamesInfo }) {
      state.games = gamesInfo.games
    },
    setGamesLength(state, { gamesInfo }) {
      state.gamesLength = gamesInfo.gamesLength
    },
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
    getGameById(context, { gameId }) {
      return gameService
        .getById(gameId)
        .then((game) => {
          return game;
        })
        .catch((err) => {
          console.log('Error: cannot get game', err);
          throw err;
        });
    },
    setStateFilter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      commit({ type: 'setPageToZero' })
      dispatch({ type: 'loadGames' });
    },
  },
};
