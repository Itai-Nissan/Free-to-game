<template>
  <section class="game-list container">
  <div class="next-btn" style="width:250px">
      <button class="btn-basic-2" v-on:click="onPrevPage">previous</button>
      <button class="btn-basic-2" v-on:click="onNextPage">Next</button>
    </div>
    <ul v-if="sortedGames" class="clean-list">
      <li v-for="game in sortedGames" :key="game._id">
        <game-preview sign="$" :game="game" />
      </li>
    </ul>
  </section>
</template>

<script>
import gamePreview from './game.preview.vue';

export default {
  name: 'gameList',
  props: {
    games: Array,
  },
  components: {
    gamePreview,
  },
  data() {
    return {};
  },
  created() { },
  methods: {
    onNextPage() {
      this.$store.dispatch('nextPage', 'next')
    },
    onPrevPage() {
      this.$store.dispatch('prevPage', 'prev')
    },
    remove(id) {
      this.$emit('remove', id);
    },
  },
  computed: {
    sortedGames(){
      return this.$store.getters.games.sort()
    },
  },
  unmounted() { },
};
</script>
