<template>
    <div v-if="user" class="user-page container">
        <h1>User page</h1>
        <h2>Welcome {{user.username}}</h2>
        <h4>{{user.email}}</h4>
        <section class="order-list">
            <h2 v-if="!user.orders">No games on list</h2>
            <ul v-for="order in user.orders">
                <li>{{order.game.title}}</li>
                <li>Order date: {{order.orderDate}}</li>
                <li><img :src="order.game.thumbnail" alt=""></li>
            </ul>
        </section>
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

<style>
li {
    list-style: none;
}
</style>
  