<template>
    <div v-if="translations.length > 0">
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
                    <form action="#" class="about-order__form form">
                        <div class="about-order__row">
                            <div class="about-order__coll">
                                <div class="about-order__row">
                                    <div class="about-order__coll">
                                        <label class="form__label">
                                            <input type="text" class="form__field field"
                                                :placeholder="translationForm[1].text">
                                        </label>
                                    </div>
                                    <div class="about-order__coll">
                                        <label class="form__label">
                                            <input type="text" class="form__field field"
                                                :placeholder="translationForm[2].text">
                                        </label>
                                    </div>
                                </div>
                                <label class="form__label">
                                    <input type="text" class="form__field field" :placeholder="translationForm[3].text">
                                </label>
                            </div>
                            <div class="about-order__coll">
                                <label class="form__label">
                                    <textarea class="form__field field"
                                        :placeholder="translationForm[4].text"></textarea>
                                </label>
                            </div>
                        </div>
                        <div class="about-order__bottom">
                            <button class="form__btn btn">{{ translationForm[5].text }}</button>
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
            </div>
        </section>
        <why-we />
    </div>
</template>
<script>
import WhyWe from '../components/reuse/WhyWe.vue'
import BreadCrumpBtnHome from '../components/UI/breadCrumpBtnHome.vue'
export default {
    components: { WhyWe, BreadCrumpBtnHome },
    computed: {
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'about')
            return topMenu
        },
        translationForm() {
            let form = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'form')
            return form
        },
        translationsSite() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
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