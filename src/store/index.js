import {createStore} from 'vuex';
import gameModule from './modules/game.module';
import {userModule} from './modules/user.module';

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {},
  modules: {
    gameModule,
    userModule,
  },
});

export default store;
