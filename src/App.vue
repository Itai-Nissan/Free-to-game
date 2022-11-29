<template>
  <div class="game-app">
    <app-header />
    <user-msg />
    <RouterView class="router-view" />
    <app-footer />
  </div>
</template>

<script>
import appHeader from './components/app.header.vue'
import appFooter from './components/app.footer.vue'
import userMsg from './components/user.msg.vue';

export default {
  components: {
    appHeader,
    appFooter,
    userMsg,
  },
  data() {
    return {
      user: null,
      credentials: {
        username: '',
        password: ''
      },
      signupInfo: {
        fullname: '',
        username: '',
        password: ''
      },
      filterBy: {
        lable: 'All',
        sortBy: 'release',
      },
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    setFilter(filterBy) {
      console.log('set filterBy', filterBy);
      const copyFilter = JSON.parse(JSON.stringify(filterBy))
      this.$store.dispatch({
        type: "setStateFilter",
        filterBy: copyFilter,
      });
    },
  },
}
</script>


  
<style>

</style>
  