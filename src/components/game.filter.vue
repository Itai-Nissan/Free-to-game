<template>
   <section class="game-filter container">
      <label>
         <input v-model="filterBy.name" placeholder="Search...." @input="setFilter" />
      </label>
      <!-- <label>
         <el-select @change="setFilter" v-model="filterBy.inStock" class="m-2" placeholder="Select Stock">
            <el-option value="" label="All">All</el-option>
            <el-option value="true" label="In stock">In stock</el-option>
            <el-option value="false" label="Not in stock">Not in stock</el-option>
         </el-select>
      </label> -->
      <label>Genre/Tag:
         <select class="filter-select" v-model="filterBy.lable" @change="setFilter">
            <option v-for="label in labels" :key="label" :label="label" :value="label"></option>
         </select>
      </label>
      <label>Sort By:
         <select class="filter-select" @change="setFilter" v-model="filterBy.sortBy" placeholder="Sort By">
            <option value="nameDsc" label="a - z"></option>
            <option value="nameAsc" label="z - a"></option>
            <option value="release" label="Release date"></option>
            <!-- <option value="price" label="Price">Price</option> -->
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
         ],
      }
   },
   created() {
      // this.setFilter = utilService.debounce(this.setFilter, 1000)
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
}
</script>
 
 