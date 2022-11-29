<template>
  <main class="main-app container">
    <gameHero :games="games" />
    <gameFilter @set-filter="setFilter" />
    <gameList :games="games" />
  </main>
</template>

<script>
import gameList from "../components/game-list/game.list.vue";
import gameFilter from "../components/game.filter.vue";
import gameHero from "../components/hero/game.hero.vue";
export default {
  name: 'GamePage',
  components: {
    gameList,
    gameFilter,
    gameHero
  },
  computed: {
    games() {
      return this.$store.getters.games
    },
  },
  created() {

  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
      const copyFilter = JSON.parse(JSON.stringify(filterBy))
      this.$store.dispatch({
        type: "setStateFilter",
        filterBy: copyFilter,
      });
    },
  }
}
</script>
    
    