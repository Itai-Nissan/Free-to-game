<template>
  <section id="sticky" :class="{ fixed: isFixed }" class="app-header">
    <div class="header-content container">
      <div class="logo">
        <RouterLink to="/">
          <img title="Homepage" src="../assets/img/freetogame-logo.png" alt="">
        </RouterLink>
      </div>
      <nav class="nav">
        <RouterLink to="/game">Free Games</RouterLink>
        <RouterLink v-if="!loggedInUser" class="" to="/login">Log In</RouterLink>
        <RouterLink v-if="!loggedInUser" class="login-btn" to="/signup">Join Free</RouterLink>
        <router-link v-if="loggedInUser" :to="`/user/${loggedInUser._id}`">{{ loggedInUser.username }}</router-link>
        <button v-if="loggedInUser" @click="logout">Logout</button>
      </nav>
      <collapse-nav class="collapse-nav"></collapse-nav>
    </div>
  </section>
</template>
<script>
import { showSuccessMsg } from '../services/event-bus-service.js'
import collapseNav from './home-cmps/collapse.nav.vue'
export default {

  name: "AppHeader",
  components: {
    collapseNav,
  },
  data() {
    return {
      isFixed: true,
      filterBy: {
        lable: 'All',
        sortBy: 'release',
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
  },
  unmounted() { },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout", userId: this.userId })
      this.$store.dispatch({ type: "setStateFilter", filterBy: this.filterBy, })
      this.$router.push('/login')
      showSuccessMsg(`${this.loggedInUser.username} logged out`)
    }
  },
};
</script>
  

  