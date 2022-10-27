  
<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app.header.vue'
import appFooter from './components/app.footer.vue'
import { userService } from './services/user.service.js'
// import loginSignupVue from './views/login-signup.vue'
import UserMsg from './components/user.msg.vue';

export default {
  components: {
    appHeader,
    appFooter,
    UserMsg,
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
    }
  },

  created() {
    // this.loggedUser()
    // this.user = userService.getLoggedInUser()
  },
  mounted() {
  },
  methods: {
    // async loggedUser() {
    //   this.user = await userService.getLoggedInUser()
    // }
  },
}
</script>

<template>
  <div class="game-app">
    <app-header />
    <RouterView class="router-view" />
    <app-footer />
    <!-- <user-msg /> -->
  </div>
</template>

  
<style>

</style>
  