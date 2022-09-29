<template>
    <section class="game-hero-list container">
        <div v-if="currPage === 'home'" class="home-hero">
            <h1>🤖 Personalized Recommendations</h1>
            <a href="" style="color: lightblue">Log in to view your personalized recommendations!</a>
            <!-- <a></a> -->
            <ul v-if="games" class="clean-list">
                <li v-for="game in sliceGames" :key="game._id" class="game-hero-preview">
                    <game-hero-preview sign="$" :game="game" />
                </li>
            </ul>
        </div>
        <div v-if="currPage === 'game'" class="game-hero">
            <h1>Best Free Games for PC and Browser In 2022!</h1>
            <h4>{{gamesCount}} free-to-play <span>games</span> found in our games list!</h4>
            <ul v-if="games" class="clean-list">
                <li v-for="game in sliceGames" :key="game._id" class="game-hero-preview">
                    <game-hero-preview sign="$" :game="game" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import gameHeroPreview from './game.hero.preview.vue';

export default {
    name: 'game-hero',
    props: {
        games: Array,
    },
    components: {
        gameHeroPreview,
    },
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        //   remove(id) {
        //     this.$emit('remove', id);
        //   },
    },
    computed: {
        gamesCount() {
            // return this.games.length
            return this.$store.getters.gamesLength
        },
        sliceGames() {
            return this.games.reverse().slice(0, 3)
        },
        currPage() {
            return this.$route.name
        },
    },
    unmounted() { },
};
</script>
  