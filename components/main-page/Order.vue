<template>
    <section class="scene order">
        <div class="wrapper">
            <div class="order__title title h2" v-if="translation.length > 0">{{ translation[9].text }}</div>
            <div class="order__body">
                <div class="order__left" v-if="translations.length > 0">
                    <div class="order__caption">{{ translations[0].text }}</div>
                    <form action="#" class="order__form form form--white" @submit.prevent="postMessage">
                        <div class="order__form-body">
                            <div class="order__form-row">
                                <div class="order__form-coll">
                                    <label class="form__label">
                                        <input type="text"
                                            :class="`form__field field ${this.errName ? 'errorValid' : ''}`"
                                            :placeholder="translations[1].text" v-model="message.name">
                                    </label>
                                </div>
                                <div class="order__form-coll">
                                    <label class="form__label">
                                        <input type="text"
                                            :class="`form__field field ${this.errName ? 'errorValid' : ''}`"
                                            :placeholder="translations[2].text" v-model="message.lastname">
                                    </label>
                                </div>
                            </div>
                            <label class="form__label">
                                <input type="email" :class="`form__field field ${this.errEmail ? 'errorValid' : ''}`"
                                    :placeholder="translations[3].text" v-model="message.email">
                            </label>
                            <!-- <label class="form__label">
                                <input type="tel" class="form__field field" :placeholder="translations[3].text"
                                    v-model="message.phone">
                            </label> -->
                            <label class="form__label">
                                <textarea :class="`form__field field ${this.errMessage ? 'errorValid' : ''}`"
                                    :placeholder="translations[4].text" v-model="message.messages"></textarea>
                            </label>
                        </div>
                        <div class="order__form-bottom">
                            <button type="submit" :disabled='sending'
                                :class="`form__btn btn ${sending ? 'change-bg-btn' : ''}`">
                                <div v-if="!sending">
                                    {{ translations[5].text }}
                                </div>
                                <div v-else class="loading-dots">
                                    {{ translatedForm[0].btnText }}
                                </div>
                            </button>
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
                <div class="order__right">
                    <div class="map">
                        <img src="@/assets/img/main/map.png" alt="">
                        <!--iframe src="https://www.google.com/maps/d/u/0/embed?mid=1XJfXppO6cPHmLO35qZvbFvbGrSHAwuw&ehbc=2E312F" width="1300" height="480"></iframe-->
                    </div>
                </div>
            </div>
        </div>
        <thanx-main :class="`main-thanx ${showThanx ? 'active' : ''}`" />
    </section>
</template>
<script>
import ThanxMain from '../popups/ThanxMain.vue'

export default {
    components: { ThanxMain },
    props: ['translation'],
    computed: {
        translations() {
            let form = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'form')
            return form
        },
        translationsSite() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
        translatedForm() {
            return this.translationForm.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        },
    },
    data() {
        return {
            sending: false,
            translationForm: [
                {
                    text1: 'Соглашаюсь с',
                    text2: 'Политикой Конфиденциальности',
                    text3: 'и',
                    text4: 'Условия и Положения',
                    lang: 'ru',
                    btnText: 'Отправляем'

                },
                {
                    text1: 'I agree with',
                    text2: 'Privacy Policy',
                    text3: 'and',
                    text4: 'Terms and conditions',
                    lang: 'en',
                    btnText: 'Sending'
                },
                {
                    text1: 'Acepto la',
                    text2: 'Política de Privacidad',
                    text3: 'y los',
                    text4: 'Términos y condiciones',
                    lang: 'es',
                    btnText: 'Enviando'
                },
            ],
            message: {
                name: '',
                lastname: '',
                email: '',
                messages: '',
                phone: '0',
                type: 1
            },
            errEmail: false,
            errName: false,
            errMessage: false,
            showThanx: false,
        }
    },
    methods: {
        setDefault() {
            this.errEmail = false
            this.errName = false
            this.errMessage = false
        },
        async postMessage() {
            try {
                this.sending = true
                const message = await this.$axios.post('/messagesEmails', this.message)
                    .then(res => {
                        return res.data
                    })
                if (message) {
                    this.showThanx = true
                    this.sending = false
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
                    type: 1
                }
            } catch (error) {
                this.sending = false
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
    }
}
</script>
<style>
.form__btn.change-bg-btn {
    background-color: #273e60 !important;
}

.map img {
    height: 100%;
}

.checbox__caption {
    display: flex;
    flex-wrap: wrap;
    gap: 0px 6px;
}

.loading-dots {
    flex-shrink: 0;
}

.loading-dots:after {
    content: ' .';
    animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {

    0%,
    20% {
        color: rgba(0, 0, 0, 0);
        text-shadow:
            .25em 0 0 rgba(0, 0, 0, 0),
            .5em 0 0 rgba(0, 0, 0, 0);
    }

    40% {
        color: white;
        text-shadow:
            .25em 0 0 rgba(0, 0, 0, 0),
            .5em 0 0 rgba(0, 0, 0, 0);
    }

    60% {
        text-shadow:
            .25em 0 0 white,
            .5em 0 0 rgba(0, 0, 0, 0);
    }

    80%,
    100% {
        text-shadow:
            .25em 0 0 white,
            .5em 0 0 white;
    }
}
</style>