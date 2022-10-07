  
<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app.header.vue'
import appFooter from './components/app.footer.vue'
// import UserMsg from '@/components/UserMsg.vue';

export default {
  components: {
    appHeader,
    appFooter,
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
    <app-footer />
    <!-- <user-msg /> -->
  </div>
</template>

  
<style>

</style>
  