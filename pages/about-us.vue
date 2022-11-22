<template>
    <div v-if="translations.length">
        <section class="about-promo">
            <div class="about-promo__bg p-absolute img-cover">
                <img class="img-desctop" src="@/assets/img/about/about-promo/bg.svg" alt="">
                <img class="img-table" src="@/assets/img/about/about-promo/bg-table.svg" alt="">
                <img class="img-mobile" src="@/assets/img/about/about-promo/bg-mobile.svg" alt="">
            </div>
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <bread-crump-btn-home />
                        </li>
                        <li> {{ translations[0].text }}
                        </li>
                    </ul>
                </div>
                <div class="about-promo__wrap">
                    <div class="about-promo__title title-big h1">{{ translations[0].text }}</div>
                    <div class="about-promo__subtitle">{{ translations[1].text }}</div>
                </div>
            </div>
        </section>

        <section class="scene about-story about-info bg-white">
            <div class="wrapper">
                <div class="about-title title h2">{{ translations[2].text }}</div>
                <div class="about-info__row">
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p v-html="translations[9].text"></p>
                        </div>
                    </div>
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p v-html="translations[10].text"></p>
                        </div>
                        <div class="about-story__info">
                            <div class="about-story__caption"> {{ translations[11].text }} </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="scene about-story about-info">
            <div class="wrapper">
                <div class="about-title title h2">{{ translations[3].text }}</div>
                <div class="about-info__row">
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p v-html="translations[7].text"></p>
                        </div>
                    </div>
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p v-html="translations[8].text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="scene about-team about-info bg-white">
            <div class="wrapper">
                <div class="about-title title h2">{{ translations[4].text }}</div>
                <div class="about-info__row">
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p v-html="translations[5].text"></p>
                        </div>
                    </div>
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p v-html="translations[6].text"></p>
                        </div>
                    </div>
                </div>
                <div class="about-order" v-if="translationForm.length > 0">
                    <div class="about-order__title">{{ translationForm[0].text }}
                    </div>
                    <form action="#" class="about-order__form form" @submit.prevent="postMessage">
                        <div class="about-order__row">
                            <div class="about-order__coll">
                                <div class="about-order__row">
                                    <div class="about-order__coll">
                                        <label class="form__label">
                                            <input type="text"
                                                :class="`form__field field ${this.errName ? 'errorValid' : ''}`"
                                                :placeholder="translationForm[1].text" v-model="message.name">
                                        </label>
                                    </div>
                                    <div class="about-order__coll">
                                        <label class="form__label">
                                            <input type="text"
                                                :class="`form__field field ${this.errName ? 'errorValid' : ''}`"
                                                :placeholder="translationForm[2].text" v-model="message.lastname">
                                        </label>
                                    </div>
                                </div>
                                <label class="form__label">
                                    <input type="text" :class="`form__field field ${this.errEmail ? 'errorValid' : ''}`"
                                        :placeholder="translationForm[3].text" v-model="message.email">
                                </label>
                            </div>
                            <div class="about-order__coll">
                                <label class="form__label">
                                    <textarea :class="`form__field field ${this.errMessage ? 'errorValid' : ''}`"
                                        :placeholder="translationForm[4].text" v-model="message.messages"></textarea>
                                </label>
                            </div>
                        </div>
                        <div class="about-order__bottom">
                            <button class="form__btn btn" type="submit">{{ translationForm[5].text }}</button>
                            <div class="form__checbox">
                                <label class="checbox">
                                    <input type="checkbox" name="value" value="active" checked>
                                    <div class="checbox__icon"></div>
                                    <div class="checbox__caption">
                                        {{ translatedForm[0].text1 }}
                                        <div @click="$router.push(localePath(`/privacy-notice`))">
                                            <nuxt-link :to="switchLocalePath($i18n.locale)">{{ translatedForm[0].text2
                                            }}</nuxt-link>
                                        </div>
                                        {{ translatedForm[0].text3 }}
                                        <div @click="$router.push(localePath(`/terms-and-conditions`))">
                                            <nuxt-link :to="switchLocalePath($i18n.locale)">
                                                {{ translatedForm[0].text4 }}
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <why-we />
        <thanx-main :class="`main-thanx ${showThanx ? 'active-us' : ''}`" />
    </div>
</template>
<script>
import ThanxMain from '../components/popups/ThanxMain.vue'
import WhyWe from '../components/reuse/WhyWe.vue'
import BreadCrumpBtnHome from '../components/UI/breadCrumpBtnHome.vue'
export default {
    components: { WhyWe, BreadCrumpBtnHome, ThanxMain },
    data() {
        return {
            message: {
                name: '',
                lastname: '',
                email: '',
                messages: '',
                phone: '0',
                type: 2
            },
            errEmail: false,
            errName: false,
            errMessage: false,
            showThanx: false,
            translationFormAbout: [
                {
                    text1: 'Соглашаюсь с',
                    text2: 'Политикой Конфиденциальности',
                    text3: 'и',
                    text4: 'Условия и Положения',
                    lang: 'ru',
                },
                {
                    text1: 'I agree with',
                    text2: 'Privacy Policy',
                    text3: 'and',
                    text4: 'Terms and conditions',
                    lang: 'en',
                },
                {
                    text1: 'Acepto la',
                    text2: 'Política de Privacidad',
                    text3: 'y los',
                    text4: 'Términos y condiciones',
                    lang: 'es',
                },
            ],
        }
    },
    computed: {
        translatedForm() {
            return this.translationFormAbout.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        },
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'about')
            return topMenu
        },
        translationForm() {
            let form = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'form')
            return form
        },
    },
    methods: {
        setDefault() {
            this.errEmail = false
            this.errName = false
            this.errMessage = false
        },
        async postMessage() {
            try {
                const message = await this.$axios.post('/messagesEmails', this.message)
                    .then(res => {
                        return res.data
                    })
                if (message) {
                    this.showThanx = true
                    setTimeout(() => {
                        this.showThanx = false
                    }, 2000);
                }
                this.message = {
                    name: '',
                    lastname: '',
                    email: '',
                    messages: '',
                    phone: '0',
                    type: 2
                }
            } catch (error) {
                if (error?.response?.data) {
                    this.errEmail = !!error?.response?.data.errors.email
                    this.errName = !!error?.response?.data.errors.name
                    this.errMessage = !!error?.response?.data.errors.messages
                    setTimeout(() => {
                        this.setDefault()
                    }, 5000)
                }
            }

        }
    },
    mounted() {
        let titleHeads = [{ name: 'About Us', val: 'en' }, { name: 'Sobre nosotros', val: 'es' }, { name: 'О нас', val: 'ru' }, ''].filter(el => {
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