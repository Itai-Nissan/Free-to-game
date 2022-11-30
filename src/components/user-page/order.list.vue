<template>
    <section class="order-list">
        <section v-for="order in user.orders" :key="order" class="list-card">
            <RouterLink class="preview-container" :to="`/game-details/${order.id}`">
                <img title="Game details" :src="order.thumbnail" alt="">
            </RouterLink>
            <div class="game-info">
                <div class="info">
                    <h3>{{ order.title }}</h3>
                    <p>{{ order.genre }}</p>
                </div>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-icon class="el-icon--right">
                            <more />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item> <a class="" :href="order.game_url" target="_blank">Play now</a>
                            </el-dropdown-item>
                            <el-dropdown-item @click="onRemoveFromList(order)">
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
import { showSuccessMsg } from '../../services/event-bus-service'

export default {
    name: 'OrderList',
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
    created() {
    },
    mounted() {
    },
    methods: {
        async onRemoveFromList(order) {
            let shouldRemove = confirm('Remove game from list?')
            if (!shouldRemove) return
            else {
                await this.$store.dispatch({ type: "removeFromList", order, })
                    .then(() => {
                        showSuccessMsg(`${order.title} removed from your list`)
                    })
            }
        },
    },
}
</script>
