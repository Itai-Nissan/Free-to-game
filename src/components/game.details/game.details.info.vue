<template>
    <section v-if="game" class="game-details-info">
        <section class="game-info">
            <h1>{{game.title}}</h1>
        </section>
        <section class="game-about">
            <h2>About {{game.title}}</h2>
            <hr>
            <details-long-text :text="game.description" />
        </section>
        <section class="game-additional">
            <div class="header">
                <h2>Additional Information</h2>
                <hr>
            </div>
            <div class="additional-table">
                <div class="table-text">
                    <span class="">Title</span>
                    <br>
                    <span class="">{{game.title}}</span>
                </div>
                <div class="table-text">
                    <span class="">Developer</span>
                    <br>
                    <span class="">{{game.developer}}</span>
                </div>
                <div class="table-text">
                    <span class="">Publisher</span>
                    <br>
                    <span class="">{{game.publisher}}</span>
                </div>
            </div>
            <div class="additional-table">
                <div class="table-text">
                    <span class="">Release Date</span>
                    <br>
                    <span class="">{{game.release_date}}</span>
                </div>
                <div class="table-text">
                    <span class="">Genre</span>
                    <br>
                    <span class="">{{game.genre}}</span>
                </div>
                <div class="table-text">
                    <span class="">Platform</span>
                    <br>
                    <span class="">{{game.platform}}</span>
                </div>
            </div>
        </section>
        <section v-if="game.screenshots" class="screenshots">
            <h2>{{game.title}} Screenshots</h2>
            <hr>
            <div class="images">
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
        <section class="system-req-container">
            <h1>System requirements</h1>
            <hr>
            <div class="system-req">
                <div v-for="(gameReq, idx) in game.minimum_system_requirements">
                    <div class="additional-table">
                        <div class="table-text">
                            <span>{{idx}}</span>
                            <br>
                            <span>{{gameReq}}</span>
                        </div>
                    </div>
                </div>
                <div class="additional-table">
                    <div class="table-text">
                        <span>Additional Notes</span>
                        <br>
                        <span>Specifications may change during development</span>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <div v-else class="loading"></div>
</template>
    
<script>
import detailsLongText from './details.long.text.vue'

export default {
    name: 'game-details-info',
    props: {
        game: Object
    },
    components: {
        detailsLongText,
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
    
    