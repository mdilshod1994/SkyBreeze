<template>
    <section class="scene main-order">
        <div class="main-order__bg p-absolute">
            <img class="img-desctop" src="@/assets/img/main-order/bg.svg" alt="">
            <img class="img-table" src="@/assets/img/main-order/bg-table.svg" alt="">
            <img class="img-mobile" src="@/assets/img/main-order/bg-mobile.svg" alt="">
        </div>
        <div v-if="item" v-html="item">
        </div>
        <div class="wrapper">
            <div class="main-order__title h2">Оформите заявку и&nbsp;все остальное<br> мы сделаем это за&nbsp;вас</div>
            <div class="main-order__desc"
                v-if="$route.path === '/our-services/elderly-moving' || $route.path === '/our-services/local-moving'">
                Наш мувинг-сервис
                поможет организовать переезд пожилого человека таким
                образом, чтобы этот процесс прошел с максимальным комфортом, и ваш родственник остался доволен.</div>
            <choose-service-btn class="main-order__btn ">Оформить заявку</choose-service-btn>
        </div>
    </section>
</template>
<script>
export default {
    props: ['item']
}
</script>
<style>

</style>