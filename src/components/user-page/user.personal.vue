<template>
    <section class="user-personal">
        <div class="personal-info">
            <h4>Personal recommendations</h4>
            <h5>Current recommendations is set to <span>{{ this.user.personal }}</span></h5>
        </div>
        <div class="personal-select">
            <el-scrollbar v-model="this.user.personal" class="infinite-list" height="400px">
                <el-button @click="onSetUserPersonal(label)" v-for="label in labels" :key="label"
                    class="infinite-list-item">{{ label }}</el-button>
            </el-scrollbar>
        </div>

    </section>
</template>
  

<script>
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus-service'
import { ref } from 'vue'

export default {
    name: 'order-list',
    data() {
        return {
            filterBy: {
                name: '',
                label: '',
                sortBy: '',
            },
            labels: [
                'All',
                'mmorpg',
                'shooter',
                'strategy',
                'moba',
                'racing',
                'sports',
                'social',
                'sandbox',
                'open- world',
                'survival',
                'pvp',
                'pve',
                'pixel',
                'voxel',
                'zombie',
                'turn - based',
                'first - person',
                'third - Person',
                'top - down',
                'tank',
                'space',
                'sailing',
                'side - scroller',
                'superhero',
                'permadeath',
                'card',
                'battle - royale',
                'mmo',
                'mmofps',
                'mmotps',
                '3d',
                '2d',
                'anime',
                'fantasy',
                'sci - fi',
                'fighting',
                'action - rpg',
                'action',
                'military',
                'martial - arts',
                'flight',
                'low - spec',
                'tower - defense',
                'horror',
                'mmorts'

            ],
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        onSetUserPersonal(updatedLabel) {
            this.user.personal = updatedLabel

            this.$store.dispatch({ type: "setUserPersonal", user: this.user })

            this.filterBy.label = this.user.personal

            this.$store.dispatch({ type: "setStateFilter", filterBy: this.filterBy, })

            showSuccessMsg(`personal recomendations changed to ${this.user.personal}`)
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

<style>

</style>
