<template>
  <div class="game-app">
    <app-header />
    <user-msg />
    <RouterView class="router-view" />
    <app-footer />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app.header.vue'
import appFooter from './components/app.footer.vue'
import userMsg from './components/user.msg.vue';
import { userService } from './services/user.service';

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
    // this.user = userService.getLoggedInUser()
    // if (this.user) {
    //   userService.getLoggedInUser()
    //   this.filterBy.lable = this.user.personal
    // }
    // else this.filterBy.lable = 'All'
  },
  mounted() {
    // this.setFilter(this.filterBy)
  },
  methods: {
    // async loggedUser() {
    //   this.user = await userService.getLoggedInUser()
    // }
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
  