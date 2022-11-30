<template>
    <button :class="{ 'current-page': page.page === page.currentPage }" @click="$emit('onChangePage', formatedNumbers)">{{ page.currentPage }}</button>
</template>

<script>
export default {
    name: 'PagingNumbers',
    props: {
        page: {
            type: Object,
            required: true
        }
    },
    emits: ['onChangePage'],
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
