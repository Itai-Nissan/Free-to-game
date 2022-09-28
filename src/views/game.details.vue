<template>
  <section v-if="game" class="game-details container">
    <h3>Game Details</h3>
    <img v-bind:src="game.thumbnail" alt="">

    <h3>{{game.title}}</h3>
    <h5>{{game.short_description}}</h5>
    <h5>Genre: {{game.genre}}</h5>
    <h5>By: {{game.publisher}}</h5>
    <a :href="game.game_url">{{game.game_url}}</a>
  </section>
  <div v-else class="loading"></div>
</template>
  
<script>
// import gameService from '../services/game-service.js';

export default {
  components: {},
  data() {
    return {
      game: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.$store
      .dispatch({
        type: 'getGameById',
        gameId: +id,
      })
      .then((game) => {
        this.game = game;
      })
    // .catch(() => showMsg(`Cannot get game`, 'danger'));
  },
  methods: {},
  // watch: {
  //   '$route.params.id'(id) {
  //     console.log('Changed to', id);
  //     this.loadgame();
  //   },
  // },
};
</script>
  
  