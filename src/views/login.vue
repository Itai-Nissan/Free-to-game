<template>
  <section class="login container">
    <div class="login-image">
      <img src="../assets/img/ftg-login.png" alt="">
    </div>
    <div class="login-wrapper">
      <img src="../assets/img/logo-footer.png" alt="">
      <h2>Log in to FreeToGame</h2>
      <form class="login-form-display" @submit.prevent="doLogin">
        <input v-model="loginCred.username" type="text" placeholder="User name" />
        <input id="pass" v-model="loginCred.password" type="password" placeholder="Password" />
        <button class="create-btn">Login</button>
      </form>
      <div class="to-signup">
        <span>Not a member yet?</span>
        <RouterLink class="to-signup-link" to="/signup">Sign up ></RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus-service.js'

// import {socketService} from '../services/socket.service'

export default {
  name: 'LoginSignup',
  components: {
  },
  data() {
    return {
      msg: '',
      loginCred: { username: '', password: '' },
      filterBy: {
        lable: '',
      },

    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
  },
  created() {
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username) {
        showErrorMsg('Please enter username/password')
        this.msg = 'Please enter username/password'
        return
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        this.filterBy.lable = this.loggedInUser.personal
        this.$store.dispatch({ type: "setStateFilter", filterBy: this.filterBy, })
        this.$router.push('/')
        // this.$router.push(`/user/${this.loggedInUser._id}`)
        showSuccessMsg(`Logged in as ${this.loginCred.username}`)
      }
      catch (err) {
        console.log(err)
        showErrorMsg('Failed to login')
        this.msg = 'Failed to login'
      }
    },
  }
}
</script>