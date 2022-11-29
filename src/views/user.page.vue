<template>
    <section v-if="user" class="user-page container">
        <div class="user-info">
            <h2>Welcome {{ user.username }}</h2>
            <h4>You have {{ user.orders.length }} games on your list</h4>
        </div>
        <div class="user-details">
            <order-list :user="user" />
            <user-personal :user="user"/>
        </div>
    </section>
</template>
  

<script>
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus-service'
import orderList from '../components/user-page/order.list.vue'
import userPersonal from '../components/user-page/user.personal.vue'

export default {
    name: 'UserPage',
    components: {
        orderList,
        userPersonal,
    },
    data() {
        return {
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedInUser
        },
        userId() {
            return this.$route.params._id
        },
    },
    watch: {
        userId: {
            handler() {
                this.$store.dispatch({ type: "loadAndWatchUser", userId: this.userId })
            },
            immediate: true,
        },
    },
    created() {
    },
    mounted() {
    window.scrollTo(0, 0)
  },
    methods: {
        // async onRemoveFromList(order) {
        //     let shouldRemove = confirm('Remove game from list?')
        //     if (!shouldRemove) return
        //     else {
        //         const u = await this.$store.dispatch({ type: "removeFromList", order, })
        //             .then((u) => {
        //                 showSuccessMsg(`${order.title} removed from your list`)
        //             })
        //     }
        // },
    },
}
</script>
