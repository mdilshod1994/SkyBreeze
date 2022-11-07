<template>
    <section class="scene our-services bg-white">
        <div class="wrapper">
            <div class="our-services__title title h2" v-if="translations.length > 0">{{ translations[4].text }}</div>
            <div class="our-services__row" v-if="services.length > 0">
                <div class="our-services__coll"
                    @click="$router.push(localePath({ path: `/our-services/${services[2].alias}` }))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__box">
                        <div class="our-services__caption">{{ services[2].name_short }}</div>
                        <div class="our-services__link"> {{ translationsSite[4].text }} </div>
                    </nuxt-link>
                </div>
                <div class="our-services__coll"
                    @click="$router.push(localePath({ path: `/our-services/${services[3].alias}` }))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__box">
                        <div class="our-services__caption">{{ services[3].name_short }}</div>
                        <div class="our-services__link">{{ translationsSite[4].text }}</div>
                    </nuxt-link>
                </div>
                <div class="our-services__coll"
                    @click="$router.push(localePath({ path: `/our-services/${services[1].alias}` }))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__box">
                        <div class="our-services__caption">{{ services[1].name_short }}</div>
                        <div class="our-services__link">{{ translationsSite[4].text }}</div>
                    </nuxt-link>
                </div>
                <div class="our-services__coll our-services__coll--mini"
                    @click="$router.push(localePath({ path: `/our-services/${services[5].alias}` }))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__box">
                        <div class="our-services__caption">{{ services[5].name_short }}</div>
                        <div class="our-services__link">{{ translationsSite[4].text }}</div>
                    </nuxt-link>
                </div>
                <div class="our-services__coll our-services__coll--mini"
                    @click="$router.push(localePath({ path: `/our-services/${services[0].alias}` }))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__box">
                        <div class="our-services__caption">{{ services[0].name_short }}</div>
                        <div class="our-services__link">{{ translationsSite[4].text }}</div>
                    </nuxt-link>
                </div>
                <div class="our-services__coll our-services__coll--mini"
                    @click="$router.push(localePath({ path: `/our-services/${services[4].alias}` }))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__box">
                        <div class="our-services__caption">
                            {{ services[4].name_short }}
                        </div>
                        <div class="our-services__link">{{ translationsSite[4].text }}</div>
                    </nuxt-link>
                </div>
                <div class="our-services__coll our-services__coll--mini our-services__coll--mobile-big"
                    @click="$router.push(localePath(`/our-services`))">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="our-services__categories">
                        <div class="our-services__number">11+</div>
                        <div class="our-services__categories-caption" v-if="translations.length > 0">{{
                                translations[4].text
                        }}</div>
                        <div class="our-services__arrow">
                            <svg width="24" height="14" viewBox="0 0 24 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.7466 1.55146e-06L24 6.3L24 7.7L17.7466 14L16.357 12.6L20.9329 7.98995L-5.24537e-07 7.98995L3.04169e-06 6L20.9329 6.01005L16.357 1.4L17.7466 1.55146e-06Z"
                                    fill="#28AECB" />
                            </svg>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['translations'],
    computed: {
        services() {
            return this.$store.getters['services/SERVICES_SORTED_BOTTOM']
        },
        translationsSite() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
    }
}
</script>
<style>

</style>