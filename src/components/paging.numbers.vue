<template>
    <button v-on:click="$emit('onChangePage', formatedNumbers)">{{formatedNumbers}}</button>
    <!-- <button v-on:click="$emit('onChangePage', formatedNumbers)">{{formatedNumbers}}<span v-if="!isMore && longText"></span></button> -->

    <!-- <h2>{{formatedText}}<span v-if="!isMore && longText">...</span> -->
    <!-- <span :style="readStyle" v-if="longText" @click="isMore=!isMore">{{readText}} </span> -->
    <!-- </h2> -->

</template>

<script>
export default {
    name: 'paging-numbers',
    props: {
        text: Number
    },
    data() {
        return {
            isMore: false,
            longText: this.text > 4,
        }
    },
    created() {
    },
    methods: {
    },
    computed: {
        // formatedText() {
        //     return this.isMore ? this.text : this.text.slice(0, 4)
        // },
        formatedNumbers() {
            return this.text
        },
        // readText() {
        //     return this.isMore ? ' Read Less' : ' Read more'
        // },
        // readStyle() {
        //     return {
        //         color: this.isMore ? 'red' : 'blue',
        //         cursor: 'pointer',
        //         'text-decoration': 'underline',
        //     }
        // },
    },
}
</script>
