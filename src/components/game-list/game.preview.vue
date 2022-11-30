<template>
  <section class="game-preview">
    <RouterLink title="Game details" class="preview-container" :to="`/game-details/${game.id}`">
      <img :src="game.thumbnail" alt="">
      <div class="game-info">
        <long-text-header :text="game.title"></long-text-header>
        <long-text :text="game.short_description"></long-text>
      </div>
    </RouterLink>
    <div class="game-footer">
      <div class="footer-add">
        <button title="Add game to list" @click="onAddToList">
          <el-icon>
            <CirclePlus />
          </el-icon>
        </button>
      </div>
      <div class="footer-genre">
        <h5 class="genre">{{ game.genre }}</h5>
      </div>
    </div>
  </section>
</template>

<script>
import longText from '../long-text/long.text.vue'
import longTextHeader from '../long-text/long.text.header.vue'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus-service'


export default {
  name: 'GamePreview',
  components: {
    longText,
    longTextHeader,
  },
  props: {
    game: {
      type: Object,
      required:true
    },
  },
  data() {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.getters.loggedInUser
    },
  },
  created() {
  },
  unmounted() { },
  methods: {
    onAddToList() {
      if (!this.user) {
        showErrorMsg('Please log in')
        return
      }
      else {
        this.$store.dispatch('addToList', this.game)
        showSuccessMsg(`${this.game.title} added to your list`)
      }
    },
  },
};
</script>