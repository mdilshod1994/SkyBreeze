<template>
    <section class="scene service-packages bg-white">
        <div class="wrapper">
            <div class="service-packages__title title h2" v-if="translations.length > 0">{{ translations[6].text }}
            </div>
            <div class="service-packages__row swiper">
                <div class="swiper-wrapper">
                    <div class="service-packages__slide swiper-slide">
                        <div class="service-packages__coll service-packages__coll--1">
                            <div class="service-packages__top">
                                <div class="service-packages__top-box">
                                    <div class="service-packages__top-caption">Пакет 1</div>
                                    <div class="service-packages__top-price">137$</div>
                                </div>
                            </div>
                            <div class="service-packages__content">
                                <div class="service-packages__box">
                                    <div class="service-packages__items">
                                        <div class="service-packages__item">Грузовик + 2 грузчика</div>
                                        <div class="service-packages__item">Упаковочная пленка и упаковочные коробки
                                        </div>
                                        <div class="service-packages__item">Упаковочная лента </div>
                                        <div class="service-packages__item">Упаковочное одеяло </div>
                                        <div class="service-packages__item">Упаковочный материал для телевизора</div>
                                    </div>
                                </div>
                                <div class="service-packages__box">
                                    <div class="service-packages__caption">Опционально:</div>
                                    <div class="service-packages__items">
                                        <div class="service-packages__item">+1 грузчик - 50$/час</div>
                                        <div class="service-packages__item">Дополнительная промежуточная остановка -
                                            50$/час</div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-packages__bottom">
                                <a href="#" class="service-packages__btn btn">Заказать услугу</a>
                            </div>
                        </div>
                    </div>
                    <div class="service-packages__slide swiper-slide">
                        <div class="service-packages__coll service-packages__coll--2">
                            <div class="service-packages__top">
                                <div class="service-packages__top-box">
                                    <div class="service-packages__top-caption">Пакет 2</div>
                                    <div class="service-packages__top-price">137$</div>
                                </div>
                            </div>
                            <div class="service-packages__content">
                                <div class="service-packages__box">
                                    <div class="service-packages__items">
                                        <div class="service-packages__item">Грузовик + 2 грузчика</div>
                                        <div class="service-packages__item">Упаковочная пленка и упаковочные коробки
                                        </div>
                                        <div class="service-packages__item">Упаковочная лента </div>
                                        <div class="service-packages__item">Упаковочное одеяло </div>
                                        <div class="service-packages__item">Упаковочный материал для телевизора</div>
                                    </div>
                                </div>
                                <div class="service-packages__box">
                                    <div class="service-packages__caption">Опционально:</div>
                                    <div class="service-packages__items">
                                        <div class="service-packages__item">+1 грузчик - 50$/час</div>
                                        <div class="service-packages__item">Дополнительная промежуточная остановка -
                                            50$/час</div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-packages__bottom">
                                <a href="#" class="service-packages__btn btn">Заказать услугу</a>
                            </div>
                        </div>
                    </div>
                    <div class="service-packages__slide service-packages__slide--table-full swiper-slide">
                        <div
                            class="service-packages__coll service-packages__coll--3 service-packages__coll--table-full">
                            <div class="service-packages__top">
                                <div class="service-packages__top-box">
                                    <div class="service-packages__top-caption">Пакет 3</div>
                                    <div class="service-packages__top-price">137$</div>
                                </div>
                            </div>
                            <div class="service-packages__content">
                                <div class="service-packages__box">
                                    <div class="service-packages__items">
                                        <div class="service-packages__item">Грузовик + 2 грузчика</div>
                                        <div class="service-packages__item">Упаковочная пленка и упаковочные коробки
                                        </div>
                                        <div class="service-packages__item">Упаковочная лента </div>
                                        <div class="service-packages__item">Упаковочное одеяло </div>
                                        <div class="service-packages__item">Упаковочный материал для телевизора </div>
                                    </div>
                                </div>
                                <div class="service-packages__box">
                                    <div class="service-packages__caption">Опционально:</div>
                                    <div class="service-packages__items">
                                        <div class="service-packages__item">+1 грузчик - 50$/час</div>
                                        <div class="service-packages__item">Дополнительная промежуточная остановка -
                                            50$/час</div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-packages__bottom">
                                <a href="#" class="service-packages__btn btn">Заказать услугу</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-packages__arrows">
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
    </section>
</template>
<script>
import { Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props: ['translations'],

    mounted() {
        let $windowWidth = window.innerWidth;
        if ($windowWidth <= 760) {
            const swiper = new Swiper('.service-packages__row', {
                slidesPerView: 1,
                spaceBetween: 15,
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
                    }
                },
                navigation: {
                    nextEl: ".service-packages .arrow--next",
                    prevEl: ".service-packages .arrow--prew",
                },
            })
        }
    }
}
</script>
<style>

</style>