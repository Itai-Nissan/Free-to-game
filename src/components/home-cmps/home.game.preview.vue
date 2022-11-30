<template>
  <RouterLink class="" :to="`/game-details/${game.id}`">
    <section class="home-game-preview container">
      <img :src="game.thumbnail" alt="">
      <div class="game-info">
        <h3>{{game.title}}</h3>
        <h5>{{game.short_description}}</h5>
        <div class="game-footer">
          <h5 class="genre">{{game.genre}}</h5>
        </div>
      </div>
    </section>
  </RouterLink>
</template>

<script>
export default {
  name: 'GamePreview',
  components: {
  },
  props: {
    game: {
      type: Object,
      required: true,
      // default: 12,
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