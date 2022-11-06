<template>
    <div class="main">
        <Header />
        <nuxt />
        <Footer />
        <call-to-action />
    </div>
</template>
<script>
import Footer from '../components/footer/Footer.vue'
import Header from '../components/headers/Header.vue'
import CallToAction from '../components/popups/CallToAction.vue'
export default {
    components: { Header, Footer, CallToAction },
    async mounted() {
        await this.$store.dispatch('lang/getAllInfo', this.$cookies.get('langId'))
    }
}
</script>
<style>

</style>