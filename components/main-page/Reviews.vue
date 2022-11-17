<template>
    <section class="scene reviews">
        <div class="wrapper">
            <div class="reviews__title title h2" v-if="translations.length > 0">{{ translations[7].text }}</div>
            <div class="reviews__body">
                <div class="reviews__swiper swiper">
                    <div class="swiper-wrapper">
                        <div class="reviews__slide swiper-slide" v-for="review in sortedReviews" :key="review.id">
                            <div class="reviews__box">
                                <div class="reviews__top">
                                    <div class="reviews__avatar">
                                        <img :src="review.img" alt="">
                                    </div>
                                    <div class="reviews__name">{{ review.name }}</div>
                                </div>
                                <div class="reviews__desc">{{ review.text }}</div>
                                <div class="rating">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" v-for="s, i in  review.stars" :key="i"
                                        class="active">
                                        <path
                                            d="M10.7564 1.08251C11.1306 -0.145738 12.8694 -0.145736 13.2436 1.08252L15.0871 7.13454C15.2538 7.68177 15.7586 8.05573 16.3307 8.05573H22.4661C23.7051 8.05573 24.2418 9.62435 23.2625 10.3833L18.1575 14.3395C17.731 14.6701 17.553 15.2297 17.7102 15.7459L19.6256 22.0339C19.995 23.2465 18.5877 24.2168 17.5857 23.4403L12.7963 19.7286C12.3276 19.3653 11.6724 19.3653 11.2037 19.7286L6.41428 23.4403C5.41231 24.2168 4.00498 23.2465 4.37437 22.0339L6.28977 15.7459C6.447 15.2297 6.26902 14.6701 5.84252 14.3395L0.737523 10.3833C-0.241768 9.62435 0.294909 8.05573 1.53385 8.05573H7.66931C8.24137 8.05573 8.7462 7.68177 8.9129 7.13454L10.7564 1.08251Z"
                                            fill="#28AECB" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" v-for="e, ind in  5 - review.stars"
                                        :key="ind + 100">
                                        <path
                                            d="M10.7564 1.08251C11.1306 -0.145738 12.8694 -0.145736 13.2436 1.08252L15.0871 7.13454C15.2538 7.68177 15.7586 8.05573 16.3307 8.05573H22.4661C23.7051 8.05573 24.2418 9.62435 23.2625 10.3833L18.1575 14.3395C17.731 14.6701 17.553 15.2297 17.7102 15.7459L19.6256 22.0339C19.995 23.2465 18.5877 24.2168 17.5857 23.4403L12.7963 19.7286C12.3276 19.3653 11.6724 19.3653 11.2037 19.7286L6.41428 23.4403C5.41231 24.2168 4.00498 23.2465 4.37437 22.0339L6.28977 15.7459C6.447 15.2297 6.26902 14.6701 5.84252 14.3395L0.737523 10.3833C-0.241768 9.62435 0.294909 8.05573 1.53385 8.05573H7.66931C8.24137 8.05573 8.7462 7.68177 8.9129 7.13454L10.7564 1.08251Z"
                                            fill="#28AECB" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="reviews__arrows">
                    <div class="arrow arrow--prew">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="24.5" stroke="#28AECB" />
                            <path
                                d="M20.2929 25.7071C19.9024 25.3166 19.9024 24.6834 20.2929 24.2929L26.6569 17.9289C27.0474 17.5384 27.6805 17.5384 28.0711 17.9289C28.4616 18.3195 28.4616 18.9526 28.0711 19.3431L22.4142 25L28.0711 30.6569C28.4616 31.0474 28.4616 31.6805 28.0711 32.0711C27.6805 32.4616 27.0474 32.4616 26.6569 32.0711L20.2929 25.7071ZM23 26H21V24H23V26Z"
                                fill="#28AECB" />
                        </svg>
                    </div>
                    <div class="arrow arrow--next">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="25" r="24.5" stroke="#28AECB" />
                            <path
                                d="M28.7071 25.7071C29.0976 25.3166 29.0976 24.6834 28.7071 24.2929L22.3431 17.9289C21.9526 17.5384 21.3195 17.5384 20.9289 17.9289C20.5384 18.3195 20.5384 18.9526 20.9289 19.3431L26.5858 25L20.9289 30.6569C20.5384 31.0474 20.5384 31.6805 20.9289 32.0711C21.3195 32.4616 21.9526 32.4616 22.3431 32.0711L28.7071 25.7071ZM26 26H28V24H26V26Z"
                                fill="#28AECB" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    props: ['translations'],
    data() {
        return {
            reviews: [
                {
                    text: 'Я нанял компанию SkyBreeze для перевозки моих вещей из моего нынешнего дома в новый дом. Они были пунктуальны, профессиональны и очень полезны. Я бы определенно рекомендовал их всем, кто ищет компанию для переезда.',
                    lang: 'ru',
                    name: 'John Culverru',
                    img: require('@/assets/img/reviews/avatar-1.jpg'),
                    stars: 5,
                    id: 1
                },
                {
                    text: 'I hired SkyBreeze to move my belongings from my current home to my new home. They were punctual, professional and very helpful. I would definitely recommend them to anyone looking for a moving company.',
                    lang: 'en',
                    name: 'John Culver',
                    img: require('@/assets/img/reviews/avatar-1.jpg'),
                    stars: 5,
                    id: 2
                },
                {
                    text: 'Contraté a SkyBreeze para trasladar mis pertenencias de mi casa actual a mi nueva casa. Fueron puntuales, profesionales y muy serviciales. Definitivamente los recomendaría a cualquiera que busque una empresa de mudanzas.',
                    lang: 'es',
                    name: 'John Culver',
                    img: require('@/assets/img/reviews/avatar-1.jpg'),
                    stars: 5,
                    id: 3
                },
                {
                    text: 'Отличная компания, с которой можно работать.',
                    lang: 'ru',
                    name: 'Jeri Foster',
                    img: require('@/assets/img/reviews/avatar-2.jpg'),
                    stars: 4,
                    id: 4
                },
                {
                    text: 'A great company to work with.',
                    lang: 'en',
                    name: 'Jeri Foster',
                    img: require('@/assets/img/reviews/avatar-2.jpg'),
                    stars: 4,
                    id: 5
                },
                {
                    text: 'Una gran empresa con la que trabajar.',
                    lang: 'es',
                    name: 'Jeri Foster',
                    img: require('@/assets/img/reviews/avatar-2.jpg'),
                    stars: 4,
                    id: 6
                },
                {
                    text: 'В прошлом я пользовался услугами двух мувинговых компаний. Это была лучшая из них. Они были очень профессиональны. Оборудование было упаковано и перевезено без заминок. Я очень рекомендую их.   ',
                    lang: 'ru',
                    name: 'Elvin Carter',
                    img: require('@/assets/img/reviews/avatar-3.png'),
                    stars: 5,
                    id: 7
                },
                {
                    text: 'I have used 2 moving companies in the past. This was the best of the two. They were very professional. The equipment was packed and moved without a hitch. I highly recommend them.  ',
                    lang: 'en',
                    name: 'Elvin Carter',
                    img: require('@/assets/img/reviews/avatar-3.png'),
                    stars: 5,
                    id: 8
                },
                {
                    text: 'He utilizado dos empresas de mudanzas en el pasado. Esta fue la mejor de las dos. Fueron muy profesionales. El equipo fue embalado y trasladado sin problemas. Los recomiendo encarecidamente.  ',
                    lang: 'es',
                    name: 'Elvin Carter',
                    img: require('@/assets/img/reviews/avatar-3.png'),
                    stars: 5,
                    id: 9
                },
            ]
        }
    },
    computed: {
        sortedReviews() {
            return this.reviews.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        }
    },
    mounted() {
        Swiper.use([Navigation])
        const swiper = new Swiper('.reviews__swiper', {
            modules: [Navigation],
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            loopFillGroupWithBlank: false,
            speed: 300,
            iOSEdgeSwipeDetection: true,
            breakpoints: {
                220: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                680: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                760: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1010: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
            // pagination: {
            //     el: ".swiper-pagination",
            //     clickable: true,
            // },
            navigation: {
                nextEl: ".reviews .arrow--next",
                prevEl: ".reviews .arrow--prew",
            },
        })
    }
}
</script>
<style>
.rating svg {
    opacity: 0.3;
}

.rating svg.active {
    opacity: 1;
}
</style>