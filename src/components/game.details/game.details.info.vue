<template>
    <section v-if="game" class="game-details-info">
        <!-- <pre>{{game}}</pre> -->
        <section class="game-info">
            <h1>{{game.title}}</h1>
        </section>
        <section class="game-about">
            <h2>About {{game.title}}</h2>
            <hr>
            <p>{{game.description}}</p>
        </section>
        <section class="game-additional">
            <div class="header">
                <h2>Additional Information</h2>
                <hr>
            </div>
            <div class="additional-table">
                <span class="text-muted">Title <br> {{game.title}}</span>
                <span class="text-muted">Developer <br> {{game.developer}}</span>
                <span class="text-muted">Publisher <br> {{game.publisher}}</span>
            </div>
            <div class="additional-table">
                <span class="text-muted">Release Date <br> {{game.release_date}}</span>
                <span class="text-muted">Genre <br> {{game.genre}}</span>
                <span class="text-muted">Platform <br> {{game.platform}}</span>
            </div>
        </section>
        <section v-if="game.screenshots" class="screenshots">
            <h2>{{game.title}} Screenshots</h2>
            <hr>
            <div class="images">
                <!-- <a :href="game.screenshots[0].image">testing</a> -->
                <a :href="game.screenshots[0].image">
                    <img v-bind:src="game.screenshots[0].image" alt="">
                </a>
                <a :href="game.screenshots[0].image">
                    <img v-bind:src="game.screenshots[1].image" alt="">
                </a>
                <a :href="game.screenshots[0].image">
                    <img v-bind:src="game.screenshots[2].image" alt="">
                </a>
            </div>
        </section>
        <!-- <img v-bind:src="game.thumbnail" alt=""> -->
        <!-- <h5>{{game.short_description}}</h5> -->
        <!-- <h5>Genre: {{game.genre}}</h5> -->
        <!-- <h5>By: {{game.publisher}}</h5> -->
        <!-- <a :href="game.game_url">{{game.game_url}}</a> -->
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
    
    