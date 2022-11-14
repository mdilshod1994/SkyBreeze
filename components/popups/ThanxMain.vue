<template>
    <div class="main-thank">
        <div class="main-thank-body">
            <div class="main-thank-thanks-title">
                Спасибо за заказ!
            </div>
            <p class="main-thank-thanks-text">
                В скором времени мы свяжемся с Вами
            </p>
            <!-- <nuxt-link to=""></nuxt-link> -->
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.main-thank {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 29, 50, 0.5);
    padding: 20px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-30px);
    transition: all 0.3s ease-in-out;
    z-index: -1
}

.main-thank.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    z-index: 99999;
}

.main-thank.active-us {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    z-index: 99999;
}

.main-thank-body {
    background: #FAFAFA;
    padding: 35px;
    color: #000000;
    border-radius: 10px;
}

.main-thank-thanks-title {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 15px;
}

.main-thank-thanks-text {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
}
</style>