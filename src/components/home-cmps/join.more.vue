<template>
    <div class="join-more container">
        <div class="join-more-logo">
            <img src="../../assets/img/ftg.jpg" alt="">
        </div>
        <div class="join-more-info">
            <div class="join-more-text">
                <h2>More Fun and More Rewarding!</h2>
                <p>We are FreeToGame, a new gaming platform that brings all the best Free-to-Play Multiplayer Games and
                    MMO
                    Games into one place while rewarding gamers with free premium loot and exlusive perks. Plus maintain
                    your own games library, track what you've played and search for what to play next!</p>
            </div>
            <div class="join-more-links">
                <RouterLink class="btn-basic" to="/signup">JOIN NOW</RouterLink>
                <RouterLink class="btn-basic-2" to="/learn">Learn More</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JoinMore',
    data() {
        return {
        }
    },
    computed: {
    },
    created() {
    },
    methods: {},
}
</script>
