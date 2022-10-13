<template>
  <section id="sticky" :class="{fixed: isFixed}" class="app-header">
    <div class="header-content container">
      <div class="logo">
        <RouterLink to="/">
          <img src="../assets/img/freetogame-logo.png" alt="">
        </RouterLink>
      </div>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/game">Games</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <section class="loggedin-user">
          <RouterLink class="login-btn" v-if="!loggedInUser" to="/login">Login</RouterLink>
          <div v-else class="loggedin">
            <router-link :to="`/user/${loggedInUser._id}`">
              Hi {{ loggedInUser.username }}
            </router-link>
            <button @click="logout">Logout</button>
            <!-- <span>{{ loggedInUser.score.toLocaleString() }}</span> -->
          </div>
        </section>
      </nav>
    </div>
  </section>
</template>
<script>
export default {
  name: "app-header",
  components: {},
  data() {
    return {
      isFixed: true,
    };
  },
  created() {

  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch({ type: "logout", userId: this.userId })
      this.$router.push('/login')
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  unmounted() { },
};
</script>
  

  