<template>
    <div>
        <loading-bar :style="[loaderIs ? { 'width': width + '%', 'transition': '1s', } : { 'width': width + '%', }]"
            v-if="toHideLoader" />
        <div :class="`main ${isLoaded ? 'show' : ''}`">
            <Header />
            <nuxt />
            <Footer :class="` ${loaderIs ? 'loading' : ''}`" />
            <call-to-action />
        </div>
        <div>
            <div class="elfsight-app-8c6542de-dfa4-4f51-a333-b11356fdcd59"></div>
            <div class="elfsight-app-53d7e99d-d3fa-4107-aee7-71e403442970"></div>

            <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </div>
    </div>
</template>
<script>
import Footer from '../components/footer/Footer.vue'
import Header from '../components/headers/Header.vue'
import CallToAction from '../components/popups/CallToAction.vue'
import LoadingBar from '../components/UI/LoadingBar.vue'
export default {
    components: { Header, Footer, CallToAction, LoadingBar },
    data() {
        return {
            isLoaded: false,
            width: 0,
            toHideLoader: true
        }
    },
    computed: {
        loaderIs() {
            return this.$store.getters['loader/LOADER']
        },
    },
    methods: {
        encreseWidth() {
            this.width++
        }
    },
    async mounted() {
        const langVal = this.$cookies.get('i18n_redirected')
        if (langVal == 'en') {
            this.$cookies.set('langId', 2)
        } else if (langVal == 'ru') {
            this.$cookies.set('langId', 1)
        } else {
            this.$cookies.set('langId', 3)
        }
        this.isLoaded = await this.$store.dispatch('lang/getAllInfo', this.$cookies.get('langId'))
    },
    watch: {
        loaderIs(newValue) {
            this.toHideLoader = true
            if (newValue) {
                setInterval(() => {
                    this.width++
                }, 950)
            } else {
                this.width = +window.screen.width
                setTimeout(() => {
                    this.toHideLoader = false
                    this.width = 0
                }, 2000);
            }
        }
    }
}
</script>
<style>
.loading {
    opacity: 0;
    visibility: hidden;
}

.main {
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    overflow: hidden;
}

.show {
    opacity: 1;
    visibility: visible;
    transition: 0.3s;
}
</style>