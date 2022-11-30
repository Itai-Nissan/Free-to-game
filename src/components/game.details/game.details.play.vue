<template>
  <section v-if="game" class="game-details-play">
    <img :src="game.thumbnail" alt="">
    <div class="play-now-btn">
      <button class="btn-basic-4" @click="onAddToList">Add to list</button>
      <a class="btn-basic" :href="game.game_url" target="_blank">PLAY NOW</a>
    </div>
  </section>
  <div v-else class="loading"></div>
</template>
    
<script>
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus-service'

export default {
  name: 'GameDetailsPlay',
  components: {
  },
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser
    },
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
}
</script>
    
    