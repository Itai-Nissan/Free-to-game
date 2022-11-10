<template>
   <section class="game-filter container">
      <label>
         <el-input v-model="filterBy.name" placeholder="Search...." @input="setFilter" />
      </label>
      <el-select theme="dark" @change="setFilter(this.filterBy.sortBy)" v-model="filterBy.lable" placeholder="All">
         <el-option v-for="label in labels" :key="label" :label="label" :value="label">
         </el-option>
      </el-select>
      <label>
         <el-select class="filter-select" @change="setFilter" v-model="filterBy.sortBy" placeholder="Sort By">
            <el-option value="nameDsc" label="a - z"></el-option>
            <el-option value="nameAsc" label="z - a"></el-option>
            <el-option value="release" label="Release date"></el-option>
         </el-select>
      </label>
   </section>
</template>
 
<script>
import { ref } from 'vue';

export default {
   name: 'GameFilter',
   components: {
   },

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
         capLabels: [],
      }
   },
   created() {
      this.filterBy.name = ''

   },
   mounted() {
      this.setFilter()
      this.sortedLabels()
   },
   methods: {
      sortedLabels() {
         return this.labels.sort().forEach((label) => {
            this.capLabels.push(
               label =
               label.charAt(0).toUpperCase() + label.slice(1)
            )
         })
      },
      setFilter(filter) {
         this.filterBy.name = this.filterBy.name.toLocaleLowerCase()
         this.$emit('set-filter', this.filterBy)
      },
      setSort() {
         this.$emit('sorted', this.sortBy);
      },
   },
   computed: {
   },
}
</script>
 