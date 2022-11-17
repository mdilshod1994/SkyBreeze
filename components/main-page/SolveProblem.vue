<template>
    <section class="why-we why-we--solve-problem">
        <div class="wrapper">
            <div class="why-we__top">
                <div class="why-we__title title h2">{{ sortedTitle[0].text }}</div>
                <!-- <div @click="$router.push(localePath('/about-us'))" class="why-we__link">
                    <nuxt-link :to="switchLocalePath($i18n.locale)" class="why-we__link"
                        v-if="translationsSite.length > 0">
                        {{ translationsSite[0].text }}
                    </nuxt-link>
                </div> -->
            </div>
            <div class="why-we__body">
                <div class="why-we__swiper swiper">
                    <div class="swiper-wrapper">
                        <div class="why-we__slide swiper-slide" v-for="item in sortedSolvedProblems" :key="item.id">
                            <div class="why-we__item">
                                <div class="why-we__icon">
                                    <img :src="item.icon" alt="">
                                </div>
                                <!-- <div class="why-we__caption">{{ item.name }}</div> -->
                                <div class="why-we__desc" v-html="item.text"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="why-we__arrows">
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
    data() {
        return {
            solveProblems: [
                {
                    text: 'Мы комплектуем собственный автопарк надежным транспортом, разрабатываем оптимальные маршруты следования, оказываем расширенный спектр сопутствующих услуг (грузчики, такелажные работы, упаковка и распаковка) и не используем услуги сторонних организаций. «SkyBreeze GO» – это всегда быстро, легко и безопасно.',
                    lang: 'ru',
                    icon: require('@/assets/img/main/solve-problem/car.svg')
                },
                {
                    text: 'We complete our own truck park with reliable transport, develop optimal routes, provide an expanded range of related services (movers, rigging, packing and unpacking) and do not use third party services. “SkybreezeGO” is fast, easy and safe.',
                    lang: 'en',
                    icon: require('@/assets/img/main/solve-problem/car.svg')
                },
                {
                    text: 'Completamos nuestro propio parque automotor con transporte confiable, elaboramos rutas óptimas, proporcionamos una amplia gama de servicios relacionados (cargadores, trabajos de jarcia, embalaje y desembalaje) y no usamos servicios de organizaciones externos."SkyBreeze GO" siempre es rápido, fácil y seguro.',
                    lang: 'es',
                    icon: require('@/assets/img/main/solve-problem/car.svg')
                },
                {
                    text: 'Осуществим релокацию в Сакраменто и прилегающие районы, а также локальный переезд в районе залива Бэйрия. Поможем с услугами переезда в Южную Калифорнию (Лос-Анджелес, Сан-Диего, Санта-Барбара), а также в области городов от Сан-Франциско до Сан-Хосе.',
                    lang: 'ru',
                    icon: require('@/assets/img/main/solve-problem/list.svg')
                },
                {
                    text: 'We carry out relocation to Sacramento and surrounding areas as well as a local move in The San Francisco Bay Area. We help to move to Southern California (Los Angeles, San Diego, Santa Barbara). There is also a moving area around cities from San Francisco to San Jose.',
                    lang: 'en',
                    icon: require('@/assets/img/main/solve-problem/list.svg')
                },
                {
                    text: 'Nos realizaremos una mudanza en Sacramento y en los barrios cercanos y también una mudanza local en el barrio del golfo Béiria. Ayudaremos con moving-home en el Sur de California( Los Angeles, San Diego, Santa Bárbara) y también en el área de ciudades de San Francisco a San José.',
                    lang: 'es',
                    icon: require('@/assets/img/main/solve-problem/list.svg')
                },
            ],
            solveProblemsTitle: [
                {
                    text: 'Решение транспортных проблем',
                    lang: 'ru',
                },
                {
                    text: 'Solve transportation problems',
                    lang: 'en',
                },
                {
                    text: 'Resolver los problemas de transporte',
                    lang: 'es',
                },
            ]
        }
    },
    computed: {
        sortedSolvedProblems() {
            return this.solveProblems.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        },
        sortedTitle() {
            return this.solveProblemsTitle.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        }
        // whyWe() {
        //     return this.$store.getters['why-we/WHY_WE']
        // },
        // translationsSite() {
        //     let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
        //     return topMenu
        // },
        // translations() {
        //     let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'home_page')
        //     return topMenu
        // },
    },

    mounted() {
        const swiper = new Swiper('.why-we__swiper', {
            modules: [Navigation],
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            speed: 300,
            iOSEdgeSwipeDetection: true,
            breakpoints: {
                220: {
                    slidesPerView: "auto",
                    slidesPerGroup: 1,
                    spaceBetween: 24,
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
                    spaceBetween: 24,
                    slidesPerGroup: 1,
                }
            },
            navigation: {
                nextEl: ".why-we .arrow--next",
                prevEl: ".why-we .arrow--prew",
            },
        })
    }
}
</script>
<style >
.why-we__swiper {
    overflow: inherit !important;
}

.why-we--solve-problem {
    margin-bottom: 120px;
    position: relative;
}

.why-we--solve-problem::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -120px;
    width: 100%;
    height: 120px;
    background: #fff;
}

@media (max-width: 1010px) {
    .why-we--solve-problem {
        margin-bottom: 110px;
    }

    .why-we--solve-problem::after {
        bottom: -110px;
        height: 110px;
    }
}

@media (max-width: 760px) {
    .why-we--solve-problem {
        margin-bottom: 88px;
    }

    .why-we--solve-problem::after {
        bottom: -88px;
        height: 88px;
    }
}
</style>