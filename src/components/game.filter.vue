<template>
   <section class="game-filter container">
      <label>
         <input v-model="filterBy.name" placeholder="Search...." @input="setFilter" />
      </label>
      <label>Genre/Tag:
         <select class="filter-select" v-model="filterBy.lable" @change="setFilter">
            <option v-for="label in sortedLabels" :key="label" :label="label" :value="label"></option>
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
            'MMO',
            'MMORPG',
            'Shooter',
            'Strategy',
            'Moba',
            'Battle Royale',
            'Fantasy',
            'Sci-Fi',
            'Card Games',
            'Racing',
            'Fighting',
            'Social',
            'Sports'
         ],
      }
   },
   created() {
      this.filterBy.name = ''
      this.filterBy.sortBy = ''
   },
   mounted() {
      this.setFilter()
   },
   unmounted(){

   },
   methods: {
      setFilter() {
         this.$emit('set-filter', this.filterBy)
      },
      setSort() {
        this.$emit('sorted', this.sortBy);
      },
   },
   computed:{
      sortedLabels(){
         return this.labels.sort()
      },
   },
}
</script>
 
 