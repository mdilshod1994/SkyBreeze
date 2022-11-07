<template >
    <section class="promo">
        <div class="promo__bg">
            <img class="img-desctop" src="@/assets/img/main/promo/bg.svg" alt="">
            <img class="img-table" src="@/assets/img/main/promo/bg-table.svg" alt="">
            <img class="img-mobile" src="@/assets/img/main/promo/bg-mobile.svg" alt="">
        </div>
        <div class="wrapper">
            <div class="promo__wrap" v-if="translations.length > 0">
                <div class="promo__title">{{ translations[0].text }}</div>
                <div class="promo__subtitle">{{ translations[1].text }}</div>
                <choose-service-btn class="promo__btn" v-if="translationsSite.length > 0"> {{ translationsSite[2].text
                }}</choose-service-btn>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['translations'],
    computed: {
        translationsSite() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
    }
}
</script>
<style >

</style>