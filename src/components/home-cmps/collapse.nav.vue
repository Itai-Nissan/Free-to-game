<template>
    <el-dropdown 
    trigger="click"
    :hide-on-click="true"
    >
        <span class="el-dropdown-link">
            <el-icon style="font-size:30px"><Menu /></el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>
                    <RouterLink to="/game"> Free Games
                    </RouterLink>
                </el-dropdown-item>

                <el-dropdown-item v-if="!loggedInUser" class="">
                    <RouterLink to="/login">Login</RouterLink>
                </el-dropdown-item>

                <el-dropdown-item v-if="!loggedInUser" class="login-btn">
                    <RouterLink to="/signup">Join Free</RouterLink>
                </el-dropdown-item>

                <el-dropdown-item v-if="loggedInUser">
                    <router-link :to="`/user/${loggedInUser._id}`">
                        <el-icon><Setting /></el-icon>
                    </router-link>
                </el-dropdown-item>

                <el-dropdown-item v-if="loggedInUser" @click="logout">Logout</el-dropdown-item>

            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
  
<script>
import { showSuccessMsg } from '../../services/event-bus-service.js'

export default {
    name: "AppHeader",
    components: {
    },
    data() {
        return {
            isFixed: true,
            filterBy: {
                lable: 'All',
                sortBy: 'release',
            },
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser
        },
    },
    created() {
    },
    mounted() {
    },
    unmounted() { },
    methods: {
        logout() {
            this.$store.dispatch({ type: "logout", userId: this.userId })
            this.$store.dispatch({ type: "setStateFilter", filterBy: this.filterBy, })
            this.$router.push('/login')
            showSuccessMsg(`${this.loggedInUser.username} logged out`)
        }
    },
};
</script>
<style scoped>
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}
</style>
  