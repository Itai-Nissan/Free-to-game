<template>
  <section v-if="game" class="game-details-play">
    <img v-bind:src="game.thumbnail" alt="">
    <div class="play-now-btn">
      <button class="btn-basic-4">FREE</button>
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
  },
}
</script>
    
    