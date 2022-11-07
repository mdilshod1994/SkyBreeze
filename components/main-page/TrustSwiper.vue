<template>
    <section class="scene we-trusted">
        <div class="wrapper">
            <div class="we-trusted__title title h2"  v-if="translations.length > 0">{{ translations[3].text }}</div>
            <div class="we-trusted__body">
                <div class="we-trusted__swiper swiper">
                    <div class="swiper-wrapper">
                        <div class="we-trusted__slide swiper-slide" v-for="partner in partners" :key="partner.id">
                            <div class="we-trusted__logo">
                                <img :src="`${partner.photo.server}/${partner.photo.path}`" alt="">
                            </div>
                        </div>
                        <!-- <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-2.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-3.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-4.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-5.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-6.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-1.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-2.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-3.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-4.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-5.png" alt="">
                            </div>
                        </div>
                        <div class="we-trusted__slide swiper-slide">
                            <div class="we-trusted__logo">
                                <img src="@/assets/img/main/we-trusted/icon-6.png" alt="">
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props: ['translations'],
    computed: {
        partners() {
            return this.$store.getters['partners/PARTNERS']
        }
    },
    async mounted() {
        await this.$store.dispatch('partners/getPartners')
        Swiper.use([Autoplay])
        const swiper = new Swiper('.we-trusted__swiper', {
            modules: [Autoplay],
            slidesPerView: "auto",
            spaceBetween: 88,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            speed: 5000,
            allowTouchMove: false,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            breakpoints: {
                220: {
                    slidesPerView: 3.4,
                    spaceBetween: 35,
                    slidesPerGroup: 1,
                },
                680: {
                    slidesPerView: 3,
                    spaceBetween: 65,
                    slidesPerGroup: 1,
                },
                760: {
                    slidesPerView: 4,
                    spaceBetween: 65,
                    slidesPerGroup: 1,
                },
                1010: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                }
            },
        })
    }
}
</script>
<style>

</style>