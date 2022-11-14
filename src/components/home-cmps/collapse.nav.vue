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

                <el-dropdown-item class="" v-if="!loggedInUser">
                    <RouterLink to="/login">Login</RouterLink>
                </el-dropdown-item>

                <el-dropdown-item class="login-btn" v-if="!loggedInUser">
                    <RouterLink to="/signup">Join Free</RouterLink>
                </el-dropdown-item>

                <el-dropdown-item v-if="loggedInUser">
                    <router-link :to="`/user/${loggedInUser._id}`">
                        <el-icon><Setting /></el-icon>
                    <!-- <router-link :to="`/user/${loggedInUser._id}`">{{ loggedInUser.username }} -->
                    </router-link>
                </el-dropdown-item>

                <el-dropdown-item v-if="loggedInUser" @click="logout">Logout</el-dropdown-item>

            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
  
<script>
export default {
    name: "app-header",
    components: {
        // collapseNav,
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
    created() {
    },
    mounted() {
    },
    methods: {
        logout() {
            this.$store.dispatch({ type: "logout", userId: this.userId })
            this.$store.dispatch({ type: "setStateFilter", filterBy: this.filterBy, })
            this.$router.push('/login')
            showSuccessMsg(`${this.loggedInUser.username} logged out`)
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser
        },
    },
    unmounted() { },
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
  