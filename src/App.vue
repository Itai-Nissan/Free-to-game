  
<script>
import { RouterLink, RouterView } from 'vue-router'
import appHeader from './components/app.header.vue'
import appFooter from './components/app.footer.vue'
import { userService } from './services/user.service.js'
// import loginSignupVue from './views/login-signup.vue'
// import UserMsg from '@/components/UserMsg.vue';

export default {
  components: {
    appHeader,
    appFooter,
    // UserMsg,
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
    this.user = userService.getLoggedinUser()

  },
  mounted(){
    console.log(this.user);
  },
  methods: {
  },
}
</script>

<template>
  <div class="game-app">
    <app-header />
    <RouterView class="router-view"/>
    <app-footer />
    <!-- <user-msg /> -->
  </div>
</template>

  
<style>

</style>
  