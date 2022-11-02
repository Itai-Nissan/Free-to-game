<template>
<section class="game-list container">
    <div class="navigate-btn">
      <button class="btn-basic-2" v-on:click="onPrevPage">previous</button>
      <nav class="page-number" v-for="page in numberOfPages">
        <!-- <paging-numbers @onChangePage="changePage" :page="{ page, currentPage }">
        </paging-numbers> -->
      </nav>
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
import pagingNumbers from '../paging/paging.numbers.vue';

export default {
  name: 'gameList',
  props: {
    games: Array,
  },
  components: {
    gamePreview,
    pagingNumbers,
  },
  data() {
    return {
    }
  },
  created() { },
  methods: {
    changePage(e) {
      this.$store.dispatch('changePage', e)
    },
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
    currentPage() {
      return this.$store.getters.currentPage + 1
    },
    numberOfPages() {
      return Math.ceil(this.$store.getters.gamesLength / 24)
    },
    sortedGames() {
      return this.$store.getters.games.sort()
    },
  },
  unmounted() { },
};
</script>
