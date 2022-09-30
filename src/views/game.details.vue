<template>
  <section v-if="game" class="game-details container">
    <game-details-info :game="game" />
    <game-details-play :game="game" />
  </section>
  <div v-else class="loading"></div>
</template>
  
<script>
import gameDetailsInfo from '../components/game.details/game.details.info.vue';
import gameDetailsPlay from '../components/game.details/game.details.play.vue';

export default {
  components: {
    gameDetailsInfo,
    gameDetailsPlay,
  },
  data() {
    return {
      game: null,
    };
  },
  created() {
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
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    onGetGameById() {
      this.$store
        .dispatch({
          type: 'getGameById',
          gameId: +id,
        })
        .then((game) => {
          this.game = game;
        })

    },

  },
  // watch: {
  //   '$route.params.id'(id) {
  //     console.log('Changed to', id);
  //     this.loadgame();
  //   },
  // },
};
</script>
  
  