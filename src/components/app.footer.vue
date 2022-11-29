<template>
    <section class="app-footer">
        <div class="footer-contain container">
            <div class="footer-links">
                <ul v-for="link in links" :key=link class="">
                    <a href="footer-link">{{link}}</a>
                </ul>
            </div>
            <div class="logo">
                <img src="../assets/img/logo-footer.png" alt="">
            </div>
        </div>
        <div class="rights-wrapper container">
            <hr>
            <div class="rights-icons">
                <div class="rights">
                    <p>© 2022 Itai Nissan, all rights reserved. All trademarks are property of their respective owners.
                    </p>
                </div>
                <div class="icon-links">
                    <a href="">facebook</a>
                    <a href="">twitter</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AppFooter",
    components: {},
    data() {
        return {
            links: [
                'About Us',
                'Help/FAQ',
                'Privacy Policy',
                'API',
                'Support & Bugs',
                'Cookies Policy',
                'Contact Us',
                'Feature Request',
                'Terms of Use',
            ]
        }
    },
    computed: {},
    created() {

    },
    mounted() {
    },
    unmounted() { },
    methods: {},
};
</script>
    
  
    