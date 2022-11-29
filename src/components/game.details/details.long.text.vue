<template>
    <section class="details-long-text">
        <p>{{formatedText}}<span v-if="!isMore && longText">...</span>
        </p>
        <span v-if="longText" :style="readStyle" @click="isMore=!isMore">{{readText}} </span>
    </section>
</template>

<script>
export default {
    name: 'DetailsLongText',
    props: {
        text: String
    },
    data() {
        return {
            isMore: false,
            longText: this.text.length > 500,
        }
    },
    computed: {
        formatedText() {
            return this.isMore ? this.text : this.text.slice(0, 500)
        },
        readText() {
            return this.isMore ? ' - Read Less' : ' + Read more'
        },
        readStyle() {
            return {
                color: this.isMore ? '#696969' : '#d4d3d3',
                cursor: 'pointer',
            }
        },
    },
    created() {
    },
    mounted() {
    },
    methods: {},
}
</script>
