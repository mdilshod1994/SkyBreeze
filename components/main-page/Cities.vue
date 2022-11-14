<template lang="">
     <section class="scene cities">
        <div class="wrapper">
            <!-- <div class="cities__title title h2"  v-if="translations.length > 0">{{ translations[3].text }}</div> -->
            <div class="cities__title title h2" >Мы работаем в таких городах</div>
            <div class="cities__body">
                <div class="cities__map">
                    <img src="@/assets/img/main/cities/map.png" alt="">
                </div>
                <div class="swiper-wraps">
                    <div class="cities__swiper swiper">
                        <div class="swiper-wrapper">
                            <div class="cities__slide swiper-slide" v-for="(item, index) in cities" :key="index">
                                <div class="cities__name">
                                    <img src="@/assets/img/main/cities/location.svg" alt="">
                                    <p>
                                        {{ item.name }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cities__swiper-two swiper">
                        <div class="swiper-wrapper">
                            <div class="cities__slide swiper-slide" v-for="(item, index) in citiesTwo" :key="index">
                                <div class="cities__name">
                                    <img src="@/assets/img/main/cities/location.svg" alt="">
                                    <p>
                                        {{ item.name }}
                                    </p>
                                </div>
                            </div>
                        </div>
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
    props: [''],
    computed: {
    },
    data() {
        return {
            cities: [
                {
                    name: 'Santa Clara'
                },
                {
                    name: 'Los Gatos'
                },
                {
                    name: 'Saratoga'
                },
                {
                    name: 'Cupertino'
                },
                {
                    name: 'Sunnyvale'
                },
                {
                    name: 'Loyola'
                },
                {
                    name: 'Mountain View'
                },
                {
                    name: 'Los Altos Hills'
                },
                {
                    name: 'Portola Valley'
                },
                {
                    name: 'Stanford'
                },
                {
                    name: 'Palo Alto'
                },
                {
                    name: 'Menlo Park'
                },
                {
                    name: 'Redwood City'
                },
                {
                    name: 'Emerald Hills'
                },
                {
                    name: 'San Carlos'
                },
            ],
            citiesTwo: [
                {
                    name: 'Belmont'
                },
                {
                    name: 'Woodside'
                },
                {
                    name: 'Foster City'
                },
                {
                    name: 'San Mateo'
                },
                {
                    name: 'Hillsborough'
                },
                {
                    name: 'Burlingame'
                },
                {
                    name: 'Millbrae'
                },
                {
                    name: 'San Bruno'
                },
                {
                    name: 'Pacifica'
                },
                {
                    name: 'Daly City'
                },
                {
                    name: 'San Salito'
                },
                {
                    name: 'Manzanita'
                },
                {
                    name: 'Mill Valley'
                },
                {
                    name: 'San Rafael'
                },
            ]
        }
    },
    mounted() {
        Swiper.use([Autoplay])
        const swiper = new Swiper('.cities__swiper', {
            modules: [Autoplay],
            slidesPerView: "auto",
            spaceBetween: 60,
            loop: true,
            speed: 3000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: true,
            },
            breakpoints: {
                220: {
                    spaceBetween: 30,
                },
                680: {
                    spaceBetween: 45,
                },
                760: {
                    spaceBetween: 50,
                },
                1010: {
                    spaceBetween: 55,
                }
            },
        })
        const swiperr = new Swiper('.cities__swiper-two', {
            modules: [Autoplay],
            slidesPerView: "auto",
            spaceBetween: 60,
            loop: true,
            speed: 4000,
            allowTouchMove: false,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
                reverseDirection: true,
            },
            breakpoints: {
                220: {
                    spaceBetween: 30,
                },
                680: {
                    spaceBetween: 45,
                },
                760: {
                    spaceBetween: 50,
                },
                1010: {
                    spaceBetween: 55,
                }
            },
        })
    }
}
</script>
<style lang="scss">
.cities {
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 300px;
        height: 100%;
        background: linear-gradient(to right, rgba(15, 29, 50, 1), rgba(15, 29, 50, 0.9), rgba(15, 29, 50, 0.5), rgba(15, 29, 50, 0));
        z-index: 2;
    }

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 300px;
        height: 100%;
        background: linear-gradient(to left, rgba(15, 29, 50, 1), rgba(15, 29, 50, 0.9), rgba(15, 29, 50, 0.5), rgba(15, 29, 50, 0));
        z-index: 2;
    }

    &__title {
        margin-bottom: 54px;
    }

    &__slide {
        width: max-content !important;
    }

    &__swiper-two,
    &__swiper {
        overflow: inherit !important;
    }

    &__swiper {
        margin: 81px 0 97px;
    }

    &__name {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        gap: 7px;
    }

    .swiper-wrapper {
        transition-timing-function: linear;
    }

    &__map,
    &__title {
        position: relative;
        z-index: 9;
    }
}

@media screen and (max-width: 992px) {
    .cities {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 150px;
            height: 100%;
            background: linear-gradient(to right, rgba(15, 29, 50, 1), rgba(15, 29, 50, 0.9), rgba(15, 29, 50, 0.5), rgba(15, 29, 50, 0));
            z-index: 2;
        }

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 150px;
            height: 100%;
            background: linear-gradient(to left, rgba(15, 29, 50, 1), rgba(15, 29, 50, 0.9), rgba(15, 29, 50, 0.5), rgba(15, 29, 50, 0));
            z-index: 2;
        }

        &__swiper {
            margin: 51px 0 64px;
        }

        &__name {
            font-size: 20px;
            line-height: 24px;
        }
    }
}

@media screen and (max-width: 540px) {
    .cities {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 60px;
            height: 100%;
            background: linear-gradient(to right, rgba(15, 29, 50, 1), rgba(15, 29, 50, 0.9), rgba(15, 29, 50, 0.5), rgba(15, 29, 50, 0));
            z-index: 2;
        }

        &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 60px;
            height: 100%;
            background: linear-gradient(to left, rgba(15, 29, 50, 1), rgba(15, 29, 50, 0.9), rgba(15, 29, 50, 0.5), rgba(15, 29, 50, 0));
            z-index: 2;
        }

        &__title {
            margin-bottom: 30px;
        }

        &__swiper {
            margin: 115px 0 51px;
        }

        &__name {
            font-size: 15px;
            line-height: 18px;
        }
    }
}
</style>