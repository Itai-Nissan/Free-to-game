<template>
  <RouterLink class="" :to="`/game-details/${game.id}`">
    <section class="home-game-preview container">
      <img :src="game.thumbnail" alt="">
      <div class="game-info">
        <h3>{{game.title}}</h3>
        <h5>{{game.short_description}}</h5>
        <div class="game-footer">
          <h5 class="genre">{{game.genre}}</h5>
          <!-- <h5 class="genre">{{game.release_date}}</h5> -->
        </div>
      </div>
    </section>
  </RouterLink>
</template>

<script>
import longText from '../long-text/long.text.vue'
import longTextHeader from '../long-text/long.text.header.vue'

export default {
  name: 'GamePreview',
  components: {
    longText,
    longTextHeader,
  },
  props: {
    game: {
      type: Object,
      required: true,
      default: 12,
    },
  },
  data() {
    return {
    };
  },
  computed: {},
  created() {
  },
  unmounted() { },
  methods: {},
};
</script>