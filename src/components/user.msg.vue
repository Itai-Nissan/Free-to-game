<template>
  <div v-if="alive" class="alert container" :class="alertClass">
    {{ msg.txt }}
  </div>
</template>
  
  
<script>
import { eventBus, SHOW_MSG } from "../services/event-bus-service"

export default {
  created() {
    eventBus.on(SHOW_MSG, (msg) => {
      this.alive = true
      this.msg = msg
      var delay = msg.delay || 2000
      setTimeout(() => {
        this.alive = false
      }, delay)
    })
  },
  data() {
    return {
      alive: false,
      msg: null,
    }
  },
  computed: {
    alertClass() {
      if (!this.msg) return
      return `alert-${this.msg.type}`
    },
  },
}
</script>