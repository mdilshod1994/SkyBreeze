<template>
    <section class="scene reviews">
        <div class="wrapper">
            <div class="reviews__title title h2">Отзывы наших клиентов</div>
            <div class="reviews__body">
                <div class="reviews__swiper swiper">
                    <div class="swiper-wrapper">
                        <div class="reviews__slide swiper-slide">
                            <div class="reviews__box">
                                <div class="reviews__top">
                                    <div class="reviews__avatar">
                                        <img src="@/assets/img/reviews/avatar-1.jpg" alt="">
                                    </div>
                                    <div class="reviews__name">Джон Калвер</div>
                                </div>
                                <div class="reviews__desc">Contrary to popular belief, Lorem Ipsum is not simply random
                                    text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                    over 2000 years old.</div>
                                <div class="rating">
                                    <div class="rating__normal"></div>
                                    <div class="rating__active"></div>
                                </div>
                            </div>
                        </div>
                        <div class="reviews__slide swiper-slide">
                            <div class="reviews__box">
                                <div class="reviews__top">
                                    <div class="reviews__avatar">
                                        <img src="@/assets/img/reviews/avatar-2.jpg" alt="">
                                    </div>
                                    <div class="reviews__name">Джери Фостер</div>
                                </div>
                                <div class="reviews__desc">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly believable.</div>
                                <div class="rating">
                                    <div class="rating__normal"></div>
                                    <div class="rating__active"></div>
                                </div>
                            </div>
                        </div>
                        <div class="reviews__slide swiper-slide">
                            <div class="reviews__box">
                                <div class="reviews__top">
                                    <div class="reviews__avatar">
                                        <img src="@/assets/img/reviews/avatar-3.jpg" alt="">
                                    </div>
                                    <div class="reviews__name">Мари Льюис</div>
                                </div>
                                <div class="reviews__desc">Many desktop publishing packages and web page editors now use
                                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                                    many web sites.</div>
                                <div class="rating">
                                    <div class="rating__normal"></div>
                                    <div class="rating__active"></div>
                                </div>
                            </div>
                        </div>
                        <div class="reviews__slide swiper-slide">
                            <div class="reviews__box">
                                <div class="reviews__top">
                                    <div class="reviews__avatar">
                                        <img src="@/assets/img/reviews/avatar-1.jpg" alt="">
                                    </div>
                                    <div class="reviews__name">Джон Калвер</div>
                                </div>
                                <div class="reviews__desc">Contrary to popular belief, Lorem Ipsum is not simply random
                                    text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                    over 2000 years old.</div>
                                <div class="rating">
                                    <div class="rating__normal"></div>
                                    <div class="rating__active"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
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
import { Swiper, Pagination, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    mounted() {
        Swiper.use([Pagination, Navigation])
        const swiper = new Swiper('.reviews__swiper', {
            modules: [Pagination, Navigation],
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            speed: 300,
            iOSEdgeSwipeDetection: true,
            breakpoints: {
                220: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 15,
                },
                680: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                },
                760: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                },
                1010: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".reviews .arrow--next",
                prevEl: ".reviews .arrow--prew",
            },
        })
    }
}
</script>
<style>

</style>