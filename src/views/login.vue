<template>
  <section class="login container">
    <div class="login-image">
      <img src="../assets/img/ftg-login.png" alt="">
    </div>
    <div class="login-wrapper">
      <img src="../assets/img/logo-footer.png" alt="">
      <h2>Log in to FreeToGame</h2>
      <form class="login-form-display" @submit.prevent="doLogin">
        <input type="text" v-model="loginCred.username" placeholder="User name" />
        <input type="text" v-model="loginCred.password" placeholder="Password" />
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
import { eventBus } from '../services/event-bus-service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus-service.js'
// import userMsg from '../components/user.msg.vue'


// import {socketService} from '../services/socket.service'

export default {
  name: 'login-signup',
  data() {
    return {
      msg: '',
      loginCred: { username: '', password: '' },
    }
  },
  components: {
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
  },
  created() {
    // this.loadUsers()
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
    // doLogout() {
    //   this.$store.dispatch({ type: 'logout' })
    // },
    // async doSignup() {
    //   if (!this.signupCred.fullname || !this.signupCred.password || !this.signupCred.username) {
    //     this.msg = 'Please fill up the form'
    //     return
    //   }
    //   await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
    //   this.$router.push('/')

    // },
    async removeUser(userId) {
      try {
        await this.$store.dispatch({ type: "removeUser", userId })
        this.msg = 'User removed'
      } catch (err) {
        this.msg = 'Failed to remove user'
      }
    }
  }
}
</script>