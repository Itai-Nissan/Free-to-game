<template>
    <div v-if="user" class="user-page container">
        <h1>User page</h1>
        <h2>Welcome {{user.username}}</h2>
        <h3>Your game list</h3>
        <!-- <h4>{{user.email}}</h4> -->
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
        window.scrollTo(0, 0)

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

                    })
            }
            // this.user = this.$store.getters.loggedinUser
            // this.$router.push(`/user/${this.userId}`)
            // this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId })
        },
    },
    computed: {
        // orders() {
        //     return this.$store.getters.orders
        // },
        user() {
            return this.$store.getters.loggedInUser
        },
        userId() {
            return this.$route.params._id
        },
    },
}
</script>

<style>

</style>
  