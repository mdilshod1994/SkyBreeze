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
                            <button class="form__btn btn" type="submit">{{ translations[5].text }}</button>
                            <div class="form__checbox">
                                <label class="checbox">
                                    <input type="checkbox" name="value" value="active" checked>
                                    <div class="checbox__icon"></div>
                                    <div class="checbox__caption" v-html="translationsSite[6].text"></div>
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
    },
    data() {
        return {
            message: {
                name: '',
                lastname: '',
                email: '',
                messages: '',
                phone: '0'
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
                    phone: '0'
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
    }
}
</script>
<style>
.map img {
    height: 100%;
}
</style>