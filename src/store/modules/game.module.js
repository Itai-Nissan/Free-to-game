// import gameService from '@/services/game-service.js';
import gameService from '../../services/game.service.js';

export default {
  state: {
    games: [],
    filterBy: null,
  },
  getters: {
    games(state) {
      return JSON.parse(JSON.stringify(state.games));
    },
    //   gamesToShow(state) {
    //     const gamesCopy = JSON.parse(JSON.stringify(state.games));
    //     return gamesCopy;
    //   },
  },
  mutations: {
    setGames(state, { games }) {
      state.games = games;
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
  },
  actions: {
    loadGames(context, state) {
      // console.log(state.filterBy); // with proxy , state.filterBy is undifend
      let filterBy = { ...context.state.filterBy }; // important use context.state.filterBy
      //server side filter
      return gameService
        .query(filterBy)
        .then((games) => {
          context.commit({ type: 'setGames', games });
        })
        .catch((err) => {
          console.log('Error: cannot get games', err);
          throw err;
        });
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
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadGames' });
    },
  },
};
