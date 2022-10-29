<template>
    <div v-if="user" class="user-page container">
        <h1>User page</h1>
        <h2>Welcome {{user.username}}</h2>
        <h3>Your game list</h3>
        <h4>You have {{user.orders.length}} games on your list</h4>
        <section class="order-list">
            <h2 v-if="!user.orders || user.orders.length === 0">No games on list</h2>
            <section class="list-card" v-for="order, idx in user.orders">
                <RouterLink class="preview-container" :to="`/game-details/${order.id}`">
                    <img v-bind:src="order.thumbnail" alt="">
                </RouterLink>
                <div class="game-info">
                    <div class="info">
                        <h3>{{order.title}}</h3>
                    </div>
                    <button class="btn-basic-4" v-on:click="onRemoveFromList(order)">Remove from list</button>
                </div>
            </section>
        </section>
    </div>
</template>
  

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus-service'

export default {
    data() {
        return {
        }
    },
    async created() {
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
    methods: {
        async onRemoveFromList(order) {
            let shouldRemove = confirm('Remove game from list?')
            if (!shouldRemove) return
            else {
                const u = await this.$store.dispatch({ type: "removeFromList", order, })
                    .then((u) => {
                        showSuccessMsg(`${order.title} removed from your list`)
                    })
            }
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser
        },
        userId() {
            return this.$route.params._id
        },
    },
}
</script>
