<template>
   <section class="game-filter container">
      <label>
         <input v-model="filterBy.name" placeholder="Search...." @input="setFilter" />
      </label>
      <label>Genre/Tag:
         <select class="filter-select" v-model="filterBy.lable" @change="setFilter">
            <option v-for="label in this.capLabels" :key="label" :label="label" :value="label"></option>
         </select>
      </label>
      <label>Sort By:
         <select class="filter-select" @change="setFilter" v-model="filterBy.sortBy" placeholder="Sort By">
            <option value="nameDsc" label="a - z"></option>
            <option value="nameAsc" label="z - a"></option>
            <option value="release" label="Release date"></option>
         </select>
      </label>
   </section>
</template>
 
<script>
import { capitalize, pushScopeId } from 'vue'

export default {
   name: 'GameFilter',
   data() {
      return {
         filterBy: {
            name: '',
            lable: 'All',
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
      setFilter() {
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
 
 