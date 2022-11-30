<template>
  <section class="signup container">
    <div class="signup-image">
      <img src="../assets/img/ftg-signup2.png" alt="">
    </div>
    <div class="signup-wrapper">
      <form @submit.prevent="doSignup">
        <h2>Create My Account!</h2>
        <div class="signup-form-display">
          <input v-model="signupCred.username" type="text" placeholder="Username" />
          <input id="email" v-model="signupCred.email" type="email" placeholder="Email Adress" />
          <div class="form-password">
            <input id="pass" v-model="signupCred.password" type="password" placeholder="Password" />
            <input id="pass" v-model="signupCred.confirm" type="password" placeholder="Confirm Password" />
          </div>
          <button class="create-btn">Create Account</button>
        </div>
        <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        <div class="to-login">
          <span>Already a member?</span>
          <RouterLink class="to-login-link" to="/login">Log In ></RouterLink>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus-service.js'

export default {
  name: 'SignupPage',
  data() {
    return {
      msg: '',
      signupCred: { username: '', email: '', password: '', confirm: '' },
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
  },
  created() {
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    async doSignup() {
      if (!this.signupCred.email || !this.signupCred.password || !this.signupCred.confirm || !this.signupCred.username || (this.signupCred.password !== this.signupCred.confirm)) {
        showErrorMsg('Please fill up the form')
        return
      }
      await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
      this.$router.push('/')
      showSuccessMsg(`Congrats for signing as ${this.signupCred.username}`)
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" })
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