<template>
  <section id="sticky" :class="{ fixed: isFixed }" class="app-header">
    <div class="header-content container">
      <div class="logo">
        <RouterLink to="/">
          <img src="../assets/img/freetogame-logo.png" alt="">
        </RouterLink>
      </div>
      <!-- <pre>{{loggedInUser}}</pre> -->
      <nav class="nav">
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink to="/game">Free Games</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink class="" v-if="!loggedInUser" to="/login">Log In</RouterLink>
        <RouterLink class="login-btn" v-if="!loggedInUser" to="/signup">Join Free</RouterLink>
        <router-link v-if="loggedInUser" :to="`/user/${loggedInUser._id}`">{{ loggedInUser.username }}</router-link>
        <button v-if="loggedInUser" @click="logout">Logout</button>
        <!-- <span>{{ loggedInUser.score.toLocaleString() }}</span> -->
      </nav>
    </div>
  </section>
</template>
<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus-service.js'
export default {

  name: "app-header",
  components: {},
  data() {
    return {
      isFixed: true,

    };
  },
  created() {
    // this.$store.dispatch({ type: "loadAndWatchUser" })

  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout", userId: this.userId })
      this.$router.push('/login')
      showSuccessMsg(`${this.loggedInUser.username} logged out`)

    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser
    },
  },
  unmounted() { },
};
</script>
  

  