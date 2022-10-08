<template>
    <section class="">
        <RouterLink class="to-game-details" :to="`/game-details/${game.id}`">
                <img v-bind:src="game.thumbnail" alt="">
                <div class="game-hero-free">FREE</div>
        </RouterLink>
    </section>
</template>
  
<script>
export default {
    name: 'GameHeroPreview',
    props: {
        game: {
            type: Object,
            required: true,
        },
    },
    components: {},
    data() {
        return {
        };
    },
    created() {
    },
    methods: {},
    computed: {},
    unmounted() { },
};
</script>