<template >
    <section class="scene cities">
        <div class="wrapper">
            <!-- <div class="cities__title title h2"  v-if="translations.length > 0">{{ translations[3].text }}</div> -->
            <div class="cities__title title h2">{{ translateTitle[0].title }}</div>
            <div class="cities__body">
                <div class="cities__map">
                    <img src="@/assets/img/main/cities/map.png" alt="">
                </div>
            </div>
        </div>
        <div class="cities__wraps">
            <div class="marquee">
                <div class="marquee__wrap">
                    <div class="marquee__title marquee__title--top">
                        <span v-for="iitem, i in 7" :key="i">
                            <div class="cities__slide swiper-slide custom-slide" v-for="(item, i) in cities" :key="i">
                                <div class="cities__name">
                                    <img src="@/assets/img/main/cities/location.svg" alt="">
                                    <p>
                                        {{ item.name }}
                                    </p>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div class="cities__line">
            </div>
            <div class="cities__slider">
                <div class="marquee">
                    <div class="marquee__wrap">
                        <div class="marquee__title">
                            <span v-for="iitem, i in 7" :key="i">
                                <div class="cities__slide swiper-slide custom-slide" v-for="(item, i) in citiesTwo"
                                    :key="i">
                                    <div class="cities__name">
                                        <img src="@/assets/img/main/cities/location.svg" alt="">
                                        <p>
                                            {{ item.name }}
                                        </p>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

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
            ],
            titles: [
                {
                    lang: 'ru',
                    title: 'Мы работаем в таких городах'
                },
                {
                    lang: 'en',
                    title: 'We work in such cities'
                },
                {
                    lang: 'es',
                    title: 'Trabajamos en tales ciudades.'
                },
            ]
        }
    },
    computed: {
        translateTitle() {
            return this.titles.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        }
    },
    mounted() {
    }
}
</script>
<style lang="scss">
.marquee {
    max-width: 100%;
    overflow: hidden;
    position: relative;
    padding: 18px 0;
    color: #ffffff;

    &__wrap {
        max-width: 100%;
        overflow: hidden;
    }

    &__title {
        white-space: nowrap;
        display: flex;
        flex-direction: row-reverse;
        animation: marquee 90s linear infinite;
        gap: 60px;

        &--top {
            animation: marquee 70s linear infinite;
        }

        @media screen and (max-width: 1010px) {
            gap: 50px;
        }

        @media screen and (max-width: 768px) {
            gap: 30px;
        }
    }

    span {
        line-height: 24px;
        margin-left: 8px;
        display: flex;
        gap: 60px;

        @media screen and (max-width: 1010px) {
            gap: 50px;
        }

        @media screen and (max-width: 768px) {
            gap: 30px;
        }
    }

    a {
        font-weight: 600;
        color: #ffffff;
    }

    &__closed {
        position: absolute;
        width: 24px;
        height: 24px;
        top: calc(50% - 12px);
        right: 24px;
        cursor: pointer;

        svg {
            & * {
                transition: all 0.3s;
            }
        }
    }
}

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(500%, 0, 0);
    }
}

.cities {

    &__slider {
        width: 100%;
        overflow: hidden;
    }

    .slider-wrapper {
        display: flex;
        gap: 60px;
        transition: 100s;
        transition-timing-function: linear;
    }

    &__title {
        margin-bottom: 54px;
    }

    &__wraps {
        position: relative;
        margin-top: 60px;

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
    }

    &__line {
        margin: 49px 0 48px;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, #28AECB 0%, rgba(40, 174, 203, 0) 51.51%, #28AECB 100%)
    }

    &__slide {
        width: max-content !important;
    }

    &__swiper-two,
    &__swiper {
        overflow: inherit !important;
    }

    &__swiper {
        margin: 81px 0 0;
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
        transition-timing-function: linear !important;
    }

    &__map,
    &__title {
        position: relative;
        z-index: 9;
    }
}

@media screen and (max-width: 992px) {
    .cities {
        &__swiper {
            margin: 51px 0 0;
        }

        &__line {
            margin: 32px 0 32px;
        }

        &__name {
            font-size: 20px;
            line-height: 24px;
        }

        &__wraps {

            &::before {
                width: 150px;
            }

            &::after {
                width: 150px;
            }
        }
    }
}

@media screen and (max-width: 540px) {
    .cities {
        &__line {
            margin: 25px 0 26px;
        }

        &__wraps {

            &::before {
                width: 60px;
            }

            &::after {
                width: 60px;
            }
        }

        &__title {
            margin-bottom: 30px;
            max-width: 245px;
        }

        &__swiper {
            margin: 90px 0 0;
        }

        &__name {
            font-size: 15px;
            line-height: 18px;
        }
    }
}
</style>