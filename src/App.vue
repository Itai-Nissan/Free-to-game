  
<script>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/app.header.vue';
// import UserMsg from '@/components/UserMsg.vue';

export default {
  components: {
    AppHeader,
    // UserMsg,
  },
  created() {
    this.$store.dispatch({ type: 'loadGames' })
  },
};
</script>

<template>
  <div class="game-app">
    <app-header />
    <RouterView />
    <!-- <user-msg /> -->
  </div>
</template>

  
<style>

</style>
  