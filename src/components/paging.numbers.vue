<template>
    <button :class="{ 'current-page': page.page === page.currentPage }"
        v-on:click="$emit('onChangePage', formatedNumbers)">{{formatedNumbers}}</button>

    <!-- <h2>{{formatedText}}<span v-if="!isMore && longText">...</span> -->
    <!-- <span :style="readStyle" v-if="longText" @click="isMore=!isMore">{{readText}} </span> -->
    <!-- </h2> -->

</template>

<script>
export default {
    name: 'paging-numbers',
    props: {
        page: Object
    },
    data() {
        return {
            // isMore: false,
            // longText: this.text > 4,
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
        formatedNumbers() {
            return this.page.page
        },
    },
}
</script>
