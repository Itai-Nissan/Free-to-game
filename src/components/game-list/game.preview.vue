<template>
  <section class="game-preview">
    <RouterLink class="preview-container" :to="`/game-details/${game.id}`">
      <img v-bind:src="game.thumbnail" alt="">
      <div class="game-info">
        <long-text-header :text="game.title"></long-text-header>
        <long-text :text="game.short_description"></long-text>
      </div>
    </RouterLink>
    <div class="game-footer">
      <button @click="onAddToList">➕</button>
      <h5 class="genre">{{game.genre}}</h5>
    </div>
  </section>
</template>

<script>
import longText from '../long-text/long.text.vue'
import longTextHeader from '../long-text/long.text.header.vue'

export default {
  name: 'GamePreview',
  props: {
    game: {
      type: Object,
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
  methods: {
    onAddToList() {
      this.$store.dispatch('addToList', this.game)
    },
  },
  computed: {},
  unmounted() { },
};
</script>