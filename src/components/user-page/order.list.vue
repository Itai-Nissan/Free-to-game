<template>
        <section class="order-list">
            <section class="list-card" v-for="order, idx in user.orders">
                <RouterLink class="preview-container" :to="`/game-details/${order.id}`">
                    <img title="Game details" v-bind:src="order.thumbnail" alt="">
                </RouterLink>
                <div class="game-info">
                    <div class="info">
                        <h3>{{ order.title }}</h3>
                        <p>{{ order.genre }}</p>
                    </div>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <el-icon class="el-icon--right">
                                <more />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item> <a class="" :href="order.game_url">Play now</a>
                                </el-dropdown-item>
                                <el-dropdown-item v-on:click="onRemoveFromList(order)">
                                    <el-icon class="el-icon--right">
                                        <Delete />
                                    </el-icon>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </section>
        </section>
</template>
  

<script>
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus-service'

export default {
    name: 'order-list',
    data() {
        return {
        }
    },
    created() {
    },
    mounted() {
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
