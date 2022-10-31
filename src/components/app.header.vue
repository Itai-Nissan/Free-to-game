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
        <RouterLink class="" v-if="!loggedInUser" to="/login">Log In</RouterLink>
        <RouterLink class="login-btn" v-if="!loggedInUser" to="/signup">Join Free</RouterLink>
        <router-link v-if="loggedInUser" :to="`/user/${loggedInUser._id}`">{{ loggedInUser.username }}</router-link>
        <button v-if="loggedInUser" @click="logout">Logout</button>
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
      filterBy: {
        lable: 'All',
        sortBy: 'release',
      },
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout", userId: this.userId })
      this.$store.dispatch({ type: "setStateFilter", filterBy: this.filterBy, })
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
  

  