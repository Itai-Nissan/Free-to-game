<template>
    <button
:class="{ 'current-page': page.page === page.currentPage }"
        @click="$emit('onChangePage', formatedNumbers)">{{page.currentPage}}</button>
        <!-- v-on:click="$emit('onChangePage', formatedNumbers)">{{formatedNumbers}}</button> -->
</template>

<script>
export default {
    name: 'PagingNumbers',
    props: {
        page: Object
    },
    data() {
        return {
        }
    },
    computed: {
        formatedNumbers() {
            return this.page.page
        },
    },
    created() {
    },
    methods: {
    },
}
</script>
