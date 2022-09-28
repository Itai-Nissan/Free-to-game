<template>
  <main class="home-page container">
    <game-hero :games="games" />
    <section class="home-list container">
      <h2>Recently added</h2>
      <ul v-if="recentGames" class="clean-list">
        <li v-for="game in recentGames" :key="game._id">
          <home-game-preview sign="$" :game="game" />
        </li>
      </ul>
    </section>
    <join-more />
  </main>
</template>

<script>
import gameHero from '../components/game.hero.vue'
import homeGamePreview from '../components/home.game.preview.vue'
import joinMore from '../components/join.more.vue'

export default {
  name: 'home-page',
  cerated() {
  },
  data() {
    return {
      filterBy: {
        sortBy: 'release',
      },
    }

  },
  mounted() {
    this.setFilter(this.filterBy)

  },
  components: {
    gameHero,
    homeGamePreview,
    joinMore,
  },
  methods: {
    setFilter(filterBy) {
      // this.filterBy = filterBy
      const copyFilter = JSON.parse(JSON.stringify(filterBy))
      this.$store.dispatch({
        type: "setFilterAct",
        filterBy: copyFilter,
      });
    },
  },
  computed: {
    games() {
      return this.$store.getters.games
    },
    recentGames() {
      return this.$store.getters.games.slice(0, 7)
    },

  }
}
</script>

