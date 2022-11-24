<template>
    <div>
        <footer class="footer">
            <div class="wrapper footer__wrap">
                <div class="footer__first" v-if="translations.length > 0">
                    <!-- <a href="/" >

                    </a> -->
                    <div @click="$router.push(localePath(`/`))" class="footer__logo">
                        <nuxt-link :to="switchLocalePath($i18n.locale)">
                            <img src="@/assets/img/icons/logo-footer.svg" alt="">
                        </nuxt-link>
                    </div>
                    <div class="footer__first-items">
                        <div class="footer__first-item">
                            <div class="footer__caption">{{ translations[0].text }}</div>
                            <div class="footer__first-desc">{{ translations[2].text }}</div>
                        </div>
                        <div class="footer__first-item">
                            <div class="footer__caption">{{ translations[1].text }}</div>
                            <div class="footer__first-desc">{{ translations[5].text }}</div>
                        </div>
                        <div class="footer__first-item">
                            <div class="footer__caption">{{ translations[3].text }}</div>
                            <a :href="`tel:${translations[4].text}`" class="footer__tel">{{ translations[4].text }}</a>
                        </div>
                    </div>
                    <!-- <a href="#" class="footer__btn btn">{{ translations[6].text }}</a> -->
                </div>
                <div class="footer__center">
                    <div class="footer__caption" v-if="translations.length > 0">{{ translations[7].text }}</div>
                    <div class="footer__menu">
                        <ul>
                            <li v-for="link in services" :key="link.id">
                                <div @click="$router.push(localePath(`/our-services/${link.alias}`))">
                                    <nuxt-link :to="switchLocalePath($i18n.locale)">
                                        {{ link.name_short }}
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__last" v-if="translations.length > 0">
                    <!-- <div class="footer__last-box">
                        <div class="footer__caption">{{ translations[8].text }}</div>
                        <div class="footer__menu">
                            <ul>
                                <li>
                                    <a href="#">ссылканаправило1</a>
                                </li>
                                <li>
                                    <a href="#">ссылканаправило2</a>
                                </li>
                                <li>
                                    <a href="#">ссылканаправило3</a>
                                </li>
                            </ul>
                        </div>
                    </div> -->
                    <div class="footer__last-box">
                        <div class="footer__caption">{{ translations[9].text }}</div>
                        <div class="footer__social">
                            <a href="https://www.instagram.com/skybreezego/" target="_blank"
                                class="footer__social-link">
                                <img src="@/assets/img/footer/instagram.svg" alt="">
                            </a>
                            <a href="https://www.snapchat.com/add/14086393202" class="footer__social-link"
                                target="_blank">
                                <img src="@/assets/img/footer/snapchat.svg" alt="">
                            </a>
                            <a href="https://www.facebook.com/SkyBreezeGO" target="_blank" class="footer__social-link">
                                <img src="@/assets/img/footer/fb.svg" alt="">
                            </a>
                            <a href="https://t.me/skybreezego" class="footer__social-link" target="_blank">
                                <img src="@/assets/img/footer/telegram.svg" alt="">
                            </a>
                            <a href="https://www.linkedin.com/company/sky-breeze-go" class="footer__social-link"
                                target="_blank">
                                <img src="@/assets/img/footer/linkedin.svg" alt="">
                            </a>
                            <a href="https://twitter.com/skybreezego" class="footer__social-link" target="_blank">
                                <img src="@/assets/img/footer/twitter.svg" alt="">
                            </a>
                            <a href="https://m.yelp.com/biz/sky-breeze-santa-clara-3" class="footer__social-link"
                                target="_blank">
                                <img src="@/assets/img/footer/icon-1.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="bottom">
            <div class="wrapper bottom__wrap flex" v-if="translations.length > 0">
                <div class="bottom__copiright">{{ translations[10].text }} </div>
                <div class="bottom__buttons flex">
                    <div @click="$router.push(localePath(`/privacy-notice`))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)" class="bottom__link">{{ translations[12].text }}
                        </nuxt-link>
                    </div>
                    <div @click="$router.push(localePath(`/terms-and-conditions`))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)" class="bottom__link">{{ translations[11].text }}
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        services() {
            return this.$store.getters['services/SERVICES']
        },
        translations() {
            let footer = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'footer')
            return footer
        }
    },
}
</script>
<style>
.bottom__buttons {
    gap: 10px;
}
</style>