<template>
    <section>
        <h4>Personal recommendations</h4>
        <h5>Current recommendations is set to <span style="font-style: italic">{{this.user.personal}}</span></h5>
        <!-- <el-select theme="dark" placeholder="Select"> -->
        <el-select theme="dark" @change="onSetUserPersonal(this.user.personal)" v-model="this.user.personal" placeholder="Select">
         <el-option v-for="label in labels" :key="label" :label="label" :value="label">
         </el-option>
      </el-select>
    </section>
</template>
  

<script>
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus-service'

export default {
    name: 'order-list',
    data() {
        return {
            filterBy: {
            name: '',
            lable: '',
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
        onSetUserPersonal(){
            this.$store.dispatch({ type: "setUserPersonal", user: this.user })
            this.filterBy.lable = this.user.personal
            this.$store.dispatch({type: "setStateFilter",filterBy: this.filterBy,})
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
