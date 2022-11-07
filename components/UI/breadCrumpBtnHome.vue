<template>
    <div @click="$router.push(localePath(`/`))">
        <nuxt-link :to="switchLocalePath($i18n.locale)" v-if="translations.length > 0">{{ translations[1].text }}
        </nuxt-link>
    </div>
</template>
<script>
export default {
    name: 'bread-c-home-btn',
    computed: {
        translations() {
            let site = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return site
        }
    },
    methods: {
        openServicesModal() {
            this.$store.dispatch('choose-service-popup/openPopup')
        }
    }
}
</script>
<style>

</style>