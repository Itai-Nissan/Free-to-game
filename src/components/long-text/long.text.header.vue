<template>
    <h2>{{ formatedText }}<span v-if="!isMore && longText">...</span>
    </h2>
</template>

<script>
export default {
    name: 'LongTextHeader',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isMore: false,
            longText: this.text.length > 16,
        }
    },
    computed: {
        formatedText() {
            return this.isMore ? this.text : this.text.slice(0, 16)
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
