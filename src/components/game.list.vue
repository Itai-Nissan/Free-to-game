<template>
  <section class="game-list container">
    <ul v-if="games" class="clean-list">
      <li v-for="game in games" :key="game._id">
        <game-preview sign="$" :game="game" />
      </li>
    </ul>
  </section>
</template>

<script>
import gamePreview from './game.preview.vue';

export default {
  name: 'gameList',
  props: {
    games: Array,
  },
  components: {
    gamePreview,
  },
  data() {
    return {};
  },
  created() { },
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
  },
  computed: {},
  unmounted() { },
};
</script>
