<template>
    <p>{{formatedText}}<span v-if="!isMore && longText">...</span>
    </p>

</template>

<script>
export default {
    name: 'LongText',
    props: {
        text: String
    },
    data() {
        return {
            isMore: false,
            longText: this.text.length > 29,
        }
    },
    computed: {
        formatedText() {
            return this.isMore ? this.text : this.text.slice(0, 29)
        },
        readText() {
            return this.isMore ? ' Read Less' : ' Read more'
        },
        readStyle() {
            return {
                color: this.isMore ? 'red' : 'blue',
                cursor: 'pointer',
                'text-decoration': 'underline',
            }
        },
    },
    created() {
    },
    methods: {},
}
</script>
