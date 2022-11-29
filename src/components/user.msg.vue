<template>
  <div v-if="alive" class="alert container" :class="alertClass">
    {{ msg.txt }}
  </div>
</template>
  
  
<script>
import { eventBus, SHOW_MSG } from "../services/event-bus-service"

export default {
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
  created() {
    let myTimeout
    eventBus.on(SHOW_MSG, (msg) => {
      clearTimeout(myTimeout);
      this.alive = true
      this.msg = msg
      let delay = msg.delay || 3000
      myTimeout = setTimeout(() => {
        this.alive = false
      }, delay)
    })
  },
}
</script>