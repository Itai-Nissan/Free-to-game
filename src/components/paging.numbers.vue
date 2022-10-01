<template>
    <button :class="{ 'current-page': page.page === page.currentPage }"
        v-on:click="$emit('onChangePage', formatedNumbers)">{{formatedNumbers}}</button>
</template>

<script>
export default {
    name: 'paging-numbers',
    props: {
        page: Object
    },
    data() {
        return {
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
