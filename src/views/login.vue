<template>
  <!-- <p>{{ msg }}</p> -->
  <section class="login container">
    <div class="login-image">
      <img src="../assets/img/ftg-login.png" alt="">
    </div>
    <div class="login-wrapper">
      <img src="../assets/img/logo-footer.png" alt="">
      <h2>Log in to FreeToGame</h2>
      <form class="login-form-display" @submit.prevent="doLogin">
        <!-- <select v-model="loginCred.username">
          <option value="">Select User</option>
          <option v-for="user in users" :key="user._id" :value="user.username">{{ user.fullname }}</option>
        </select> -->
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
import {socketService} from '../services/socket.service'

export default {
  name: 'login-signup',
  data() {
    return {
      msg: '',
      loginCred: { username: '', password: '' },
      // signupCred: { username: '', email: '', password: '', confirm: '' },
    }
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
    sendMsg() {
      console.log('Sending', this.msg)
      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      const user = userService.getLoggedinUser()
      const from = (user && user.fullname) || 'Guest'
      this.msg.from = from
      socketService.emit('chat newMsg', this.msg)
      this.msg = {from, txt: ''}
    },

    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = 'Please enter username/password'
        return
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        this.$router.push(`/user/${this.loggedInUser._id}`)
      } catch (err) {
        console.log(err)
        this.msg = 'Failed to login'
      }
    },
    doLogout() {
      this.$store.dispatch({ type: 'logout' })
    },
    async doSignup() {
      if (!this.signupCred.fullname || !this.signupCred.password || !this.signupCred.username) {
        this.msg = 'Please fill up the form'
        return
      }
      await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
      this.$router.push('/')

    },
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