<template>
  <section class="login container">
    <!-- <p>{{ msg }}</p> -->
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
        <RouterLink class="to-signup-link" to="/signup">Log In ></RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
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
    loggedinUser() {
      return this.$store.getters.loggedinUser
    },
  },
  created() {
    this.loadUsers()
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username) {
        this.msg = 'Please enter username/password'
        return
      }
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        this.$router.push(`/user/${this.loggedinUser._id}`)
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