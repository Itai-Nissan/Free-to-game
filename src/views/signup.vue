<template>
  <!-- <p>{{ msg }}</p> -->
  <!-- <div v-if="loggedinUser">
      <h3>
        Loggedin User:
        {{ loggedinUser.username }}
        <button @click="doLogout">Logout</button>
      </h3>
    </div> -->
  <section class="signup container">
    <div class="signup-image">
      <img src="../assets/img/ftg-signup2.png" alt="">
    </div>
    <div class="signup-wrapper">
      <form @submit.prevent="doSignup">
        <h2>Create My Account!</h2>
        <div class="signup-form-display">
          <input type="text" v-model="signupCred.username" placeholder="Username" />
          <input type="text" v-model="signupCred.email" placeholder="Email Adress" />
          <div class="form-password">
            <input type="text" v-model="signupCred.password" placeholder="Password" />
            <input type="text" v-model="signupCred.confirm" placeholder="Confirm Password" />
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
  <!-- <details>
      <summary>
        Admin Section
      </summary>
      <ul>
        <li v-for="user in users" :key="user._id">
          <pre>{{ user }}</pre>
          <button @click="removeUser(user._id)">x</button>
        </li>
      </ul>
    </details> -->
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      msg: '',
      // loginCred: { username: '', password: '' },
      signupCred: { username: '', email: '', password: '', confirm: '' },
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
    // doLogout() {
    //   this.$store.dispatch({ type: 'logout' })
    // },
    async doSignup() {
      console.log(this.signupCred);
      if (!this.signupCred.email || !this.signupCred.password || !this.signupCred.confirm || !this.signupCred.username || (this.signupCred.password !== this.signupCred.confirm)) {
        this.msg = 'Please fill up the form'
        return
      }
      console.log(this.signupCred);
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