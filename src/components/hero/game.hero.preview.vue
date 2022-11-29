<template>
    <section class="hero-preview-card">
        <RouterLink class="to-game-details" :to="`/game-details/${game.id}`">
                <img :src="game.thumbnail" alt="">
                <div class="game-hero-free">FREE</div>
        </RouterLink>
    </section>
</template>
  
<script>
export default {
    name: 'GameHeroPreview',
    components: {},
    props: {
        game: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        };
    },
    computed: {},
    created() {
    },
    unmounted() { },
    methods: {},
};
</script>