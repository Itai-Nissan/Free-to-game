<template>
    <section class="game-hero-list container">
        <div v-if="currPage === 'home'" class="home-hero">
            <h1>🤖 Personalized Recommendations</h1>
            <RouterLink v-if="!loggedInUser" class="" style="color: lightblue" to="/login">Log in to view your
                personalized recommendations!
            </RouterLink>

            <section v-if="loggedInUser">
                <p> Logged in as {{ loggedInUser.username }}</p>
                <p>You have {{ loggedInUser.orders.length }} games on your list</p>
                <RouterLink class="" style="color: lightblue" to="/user/:_id">
                    Go to profile
                </RouterLink>
            </section>
            <ul v-if="games" class="sliced-games clean-list">
                <li v-for="game in sliceGames" :key="game._id" class="game-hero-preview">
                    <game-hero-preview sign="$" :game="game" />
                </li>
            </ul>
        </div>
        <div v-if="currPage === 'game'" class="game-hero">
            <h1>Best Free Games for PC and Browser In 2022!</h1>
            <p>{{ gamesCount }} free-to-play <span>games</span> found in our games list!</p>
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
    name: 'GameHero',
    components: {
        gameHeroPreview,
    },
    props: {
        games: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
        }
    },
    computed: {
        loggedInUser() {
            return this.$store.getters.loggedInUser
        },
        gamesCount() {
            return this.$store.getters.gamesLength
        },
        sliceGames() {
            return this.games.slice(this.games.length - 3, this.games.length).reverse()
        },
        currPage() {
            return this.$route.name
        },
    },
    created() {
    },
    mounted() {
    },
    unmounted() { },
    methods: {
    },
};
</script>
  