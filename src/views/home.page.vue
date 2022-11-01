<template>
  <main class="homepage-container container">
    <game-hero :games="games" />
    <section class="home-list container">
      <h2 v-if="!this.user">Recently added games</h2>
      <h2 v-if="this.user">Recently added {{ this.user.personal }} games</h2>
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
import gameHero from '../components/hero/game.hero.vue'
import homeGamePreview from '../components/home-cmps/home.game.preview.vue'
import joinMore from '../components/home-cmps/join.more.vue'
import { userService } from '../services/user.service'


export default {
  name: 'home-page',
  cerated() {
  },
  data() {
    return {
      filterBy: {
        lable: 'All',
        sortBy: 'release',
      },
    }

  },
  created() {
    this.user = userService.getLoggedInUser()
    if (this.user) {
      userService.getLoggedInUser()
      this.filterBy.lable = this.user.personal
    }
    else this.filterBy.lable = 'All'
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
      const copyFilter = JSON.parse(JSON.stringify(filterBy))
      this.$store.dispatch({
        type: "setStateFilter",
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

