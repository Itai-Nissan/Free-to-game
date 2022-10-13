<template>
    <div class="user-page container">
        <h1>User page</h1>
        <h1>Welcome {{user.username}}</h1>
    </div>
</template>
  

<script>
import { userService } from '../services/user.service'

export default {
    data() {
        return {
        }
    },
    async created() {
        // const user = await userService.getById(this.userId)
        // this.user = user
    },
    mounted() {
    },
    watch: {
        userId: {
            handler() {
                this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId })
            },
            immediate: true,
        },
    },
    computed: {
        user() {
            return this.$store.getters.watchedUser
        },
        userId() {
            return this.$route.params._id
        },
    },
}
</script>
  