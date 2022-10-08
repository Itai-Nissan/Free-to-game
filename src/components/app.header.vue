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
  methods: {},
  computed: {},
  unmounted() { },
};
</script>
  

  