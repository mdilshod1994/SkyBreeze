<template>
    <section class="scene main-order">
        <div class="main-order__bg p-absolute">
            <img class="img-desctop" src="@/assets/img/main-order/bg.svg" alt="">
            <img class="img-table" src="@/assets/img/main-order/bg-table.svg" alt="">
            <img class="img-mobile" src="@/assets/img/main-order/bg-mobile.svg" alt="">
        </div>
        <div v-if="item" v-html="item">
        </div>
        <div class="wrapper" v-if="translations.length > 0">
            <div class="main-order__title h2">{{ translations[3].text }}</div>
            <choose-service-btn class="main-order__btn ">{{ translations[5].text }}</choose-service-btn>
        </div>
    </section>
</template>
<script>
export default {
    props: ['item'],
    computed: {
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
    }
}
</script>
<style>
.main-order__title {
    max-width: 750px;
}
</style>