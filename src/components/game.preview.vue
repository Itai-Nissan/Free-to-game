<template>
  <section class="game-preview">
    <RouterLink class="" :to="`/game-details/${game.id}`">
      <img v-bind:src="game.thumbnail" alt="">
      <div class="game-info">
        <long-text-header :text="game.title"></long-text-header>
        <long-text :text="game.short_description"></long-text>
      </div>
    </RouterLink>
    <div class="game-footer">
      <h5>+</h5>
      <h5 class="genre">{{game.genre}}</h5>
    </div>
    <!-- <h5>{{game.release_date}}</h5> -->
    <!-- <pre>{{game}}</pre> -->
  </section>
</template>

<script>
import longText from './long.text.vue'
import longTextHeader from './long.text.header.vue'

export default {
  name: 'GamePreview',
  props: {
    game: {
      type: Object,
      required: true,
      default: 12,
    },
  },
  components: {
    longText,
    longTextHeader,
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {},
  computed: {},
  unmounted() { },
};
</script>