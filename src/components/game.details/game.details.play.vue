<template>
  <section v-if="game" class="game-details-play">
    <img v-bind:src="game.thumbnail" alt="">
    <div class="play-now-btn">
      <button @click="onAddToList" class="btn-basic-4">Add to list</button>
      <!-- <button class="btn-basic-4">FREE</button> -->
      <a class="btn-basic" :href="game.game_url">PLAY NOW</a>
    </div>
    <!-- <div class="play-rate">
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div> -->
  </section>
  <div v-else class="loading"></div>
</template>
    
<script>
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus-service'

export default {
  name: 'game-details-play',
  props: {
    game: Object
  },
  components: {
  },
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onAddToList() {
      if (!this.user) {
        showErrorMsg('Please log in')
        return
      }
      else {
        this.$store.dispatch('addToList', this.game)
        showSuccessMsg(`${this.game.title} added to your list`)
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser
    },
  },
}
</script>
    
    