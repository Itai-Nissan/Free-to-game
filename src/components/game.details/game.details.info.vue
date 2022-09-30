<template>
    <section v-if="game" class="game-details-info">
        <h1>info</h1>
        <section class="details-info">
            <h3>{{game.title}}</h3>
        </section>
        <img v-bind:src="game.thumbnail" alt="">
        <h5>{{game.short_description}}</h5>
        <h5>Genre: {{game.genre}}</h5>
        <h5>By: {{game.publisher}}</h5>
        <a :href="game.game_url">{{game.game_url}}</a>
    </section>
    <div v-else class="loading"></div>
</template>
    
<script>
export default {
    name: 'game-details-info',
    props: {
        game: Object
    },
    components: {
    },
    data() {
        return {
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
}
</script>
    
    