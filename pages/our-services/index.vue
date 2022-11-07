<template>
    <div v-if="services.length > 0">
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <bread-crump-btn-home />
                        </li>
                        <li> {{ services[6].name_short }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="services">
            <div class="wrapper">
                <div class="services__title title h2" v-if="translationsMenu.length > 0"> {{ translationsMenu[1].text }}
                </div>
                <div class="services__wrap" v-if="translationsSite.length > 0">
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[5].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[5].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[5].icon.server}/${services[5].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[6].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[6].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[6].icon.server}/${services[6].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[3].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[3].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[3].icon.server}/${services[3].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[9].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[9].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[9].icon.server}/${services[9].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[2].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[2].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[2].icon.server}/${services[2].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[8].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[8].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[8].icon.server}/${services[8].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[4].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[4].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[4].icon.server}/${services[4].icon.path}`" alt="">
                            </div>
                        </nuxt-link>

                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[7].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[7].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[7].icon.server}/${services[7].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card"
                        @click="$router.push(localePath({ path: `/our-services/${services[0].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[0].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[0].icon.server}/${services[0].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card services__card--big"
                        @click="$router.push(localePath({ path: `/our-services/${services[1].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[1].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[1].icon.server}/${services[1].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="services__card services__card--big"
                        @click="$router.push(localePath({ path: `/our-services/${services[10].alias}` }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <div class="services__box">
                                <div class="services__caption">{{ services[10].name_short }}</div>
                                <div class="services__link">{{ translationsSite[4].text }}</div>
                            </div>
                            <div class="services__icon">
                                <img :src="`${services[10].icon.server}/${services[10].icon.path}`" alt="">
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import breadCrumpBtnHome from '../../components/UI/breadCrumpBtnHome.vue'
export default {
    name: 'our-services-page',
    components: { breadCrumpBtnHome },
    computed: {
        services() {
            return this.$store.getters['services/SERVICES']
        },
        translationsSite() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
        translationsMenu() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'top_menu')
            return topMenu
        }
    },
    mounted() {
        let titleHeads = [{ name: 'Our services', val: 'en' }, { name: 'Nuestros servicios', val: 'es' }, { name: 'Наши сервисы', val: 'ru' }, ''].filter(el => {
            if (el.val === this.$cookies.get('i18n_redirected')) {
                return el
            }
        })
        document.title = titleHeads[0].name
    }
}
</script>
<style>

</style>