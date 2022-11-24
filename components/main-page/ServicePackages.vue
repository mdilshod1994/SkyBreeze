<template>
    <section class="scene service-packages bg-white">
        <div class="wrapper">
            <div class="service-packages__title title h2" v-if="translations.length > 0">{{ translations[6].text }}
            </div>
            <div class="service-packages__row swiper ">
                <div class="swiper-wrapper">
                    <div v-for="(item, index) in packages" :key="index"
                        :class="`service-packages__slide swiper-slide ${index === 0 ? 'first' : ''} ${index === 1 ? 'second' : ''} ${index === 2 ? 'service-packages__slide--table-full  third' : ''}`">
                        <div :class="`service-packages__coll service-packages__coll--${index + 1}`">
                            <div class="service-packages__top">
                                <div class="service-packages__top-box">
                                    <div class="service-packages__top-caption" style="font-size:20px">{{ item.name }}
                                    </div>
                                    <div class="service-packages__top-price" style="font-size:20px">{{ item.price }}$/{{
                                            item.time
                                    }}</div>
                                </div>
                            </div>
                            <div class="service-packages__content">
                                <div class="service-packages__box">
                                    <div class="service-packages__items">
                                        <div class="service-packages__item item-bold" v-for="t, i in  item.packages"
                                            :key="i">
                                            {{
                                                    t.text
                                            }}
                                        </div>
                                    </div>
                                </div>
                                <div class="service-packages__box">
                                    <div class="service-packages__caption">{{ item.optionalTitle }}:</div>
                                    <div class="service-packages__items">
                                        <div class="service-packages__item" v-for="e, ind in item.optionalPackage"
                                            :key="ind">
                                            {{ e.text }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="service-packages__bottom">
                                <div class="service-packages__btn btn" @click="openServicesModal(item.name)">
                                    {{
                                            item.btnText
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-packages__row--desctop">
                <div v-for="(item, index) in packages" :key="index"
                    :class="`service-packages__slide swiper-slide ${index === 0 ? 'first' : ''} ${index === 1 ? 'second' : ''} ${index === 2 ? 'service-packages__slide--table-full  third' : ''}`">
                    <div :class="`service-packages__coll service-packages__coll--${index + 1}`">
                        <div class="service-packages__top">
                            <div class="service-packages__top-box">
                                <div class="service-packages__top-caption" style="font-size:20px">{{ item.name }}</div>
                                <div class="service-packages__top-price" style="font-size:20px">{{ item.price
                                }}$/{{ item.time }}</div>
                            </div>
                        </div>
                        <div class="service-packages__content">
                            <div class="service-packages__box">
                                <div class="service-packages__items">
                                    <div class="service-packages__item item-bold" v-for="t, i in  item.packages"
                                        :key="i">
                                        {{
                                                t.text
                                        }}
                                    </div>
                                </div>
                            </div>
                            <div class="service-packages__box">
                                <div class="service-packages__caption">{{ item.optionalTitle }}:</div>
                                <div class="service-packages__items">
                                    <div class="service-packages__item" v-for="e, ind in item.optionalPackage"
                                        :key="ind">
                                        {{ e.text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="service-packages__bottom">
                            <div class="service-packages__btn btn" @click="openServicesModal(item.name)">
                                {{
        item.btnText
                                }}
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
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props: ['translations'],
    computed: {
        packages() {
            const arr = [
                {
                    lang: 'ru',
                    name: 'Dynamic Amigos',
                    price: 145,
                    time: 'ч',
                    packages: [
                        {
                            text: 'Грузовик + 2 грузчика'
                        },
                        {
                            text: 'Бесплатно - гардеробная коробка'
                        },
                        {
                            text: 'Бесплатно - скочь и защитная плёнка'
                        },
                        {
                            text: 'Бесплатно - использование упаковочного одьяла'
                        },
                        {
                            text: 'Бесплатно - упаковка телевизоров и компьютеров'
                        },


                        {
                            text: 'Бесплатно - разборка и сборка перевозимой мебели'
                        },

                        {
                            text: 'Бесплатно - защита половых покрытий (паркет, кавролин)'
                        },

                        {
                            text: 'Бесплатно - минимальная страховка мебели и вещей'
                        },

                    ],
                    optionalTitle: 'Опционально',
                    optionalPackage: [
                        {
                            text: '+1 грузчик - 55$/час'
                        },
                        {
                            text: 'Дополнительная промежуточная остановка - 55$/час'
                        },
                        {
                            text: 'Опция “Full Packing”, если требуется  (Оплата отдельно)'
                        },
                        {
                            text: 'Коробки  (оплата по прайс листу)'
                        }
                    ],
                    btnText: 'Заказать услугу'
                },
                {
                    lang: 'ru',
                    name: 'The Supremes',
                    price: 200,
                    time: 'ч',
                    packages: [
                        {
                            text: 'Грузовик + 3 грузчика'
                        },
                        {
                            text: 'Бесплатно - гардеробная коробка'
                        },
                        {
                            text: 'Бесплатно - скочь и защитная плёнка'
                        },
                        {
                            text: 'Бесплатно - использование упаковочного одьяла'
                        },
                        {
                            text: 'Бесплатно - упаковка телевизоров и компьютеров'
                        },


                        {
                            text: 'Бесплатно - разборка и сборка перевозимой мебели'
                        },

                        {
                            text: 'Бесплатно - защита половых покрытий (паркет, кавролин)'
                        },

                        {
                            text: 'Бесплатно - минимальная страховка мебели и вещей'
                        },

                    ],
                    optionalTitle: 'Опционально',
                    optionalPackage: [
                        {
                            text: '+1 грузчик - 55$/час'
                        },
                        {
                            text: 'Дополнительная промежуточная остановка - 55$/час'
                        },
                        {
                            text: 'Опция “Full Packing”, если требуется  (Оплата отдельно)'
                        },
                        {
                            text: 'Коробки  (оплата по прайс листу)'
                        }
                    ],
                    btnText: 'Заказать услугу'
                },
                {
                    lang: 'ru',
                    name: 'SkyBreeze Gang',
                    price: 255,
                    time: 'ч',
                    packages: [
                        {
                            text: 'Грузовик + 4 грузчика'
                        },
                        {
                            text: 'Бесплатно - гардеробная коробка'
                        },
                        {
                            text: 'Бесплатно - скочь и защитная плёнка'
                        },
                        {
                            text: 'Бесплатно - использование упаковочного одьяла'
                        },
                        {
                            text: 'Бесплатно - упаковка телевизоров и компьютеров'
                        },


                        {
                            text: 'Бесплатно - разборка и сборка перевозимой мебели'
                        },

                        {
                            text: 'Бесплатно - защита половых покрытий (паркет, кавролин)'
                        },

                        {
                            text: 'Бесплатно - минимальная страховка мебели и вещей'
                        },

                    ],
                    optionalTitle: 'Опционально',
                    optionalPackage: [
                        {
                            text: '+1 грузчик - 55$/час'
                        },
                        {
                            text: 'Дополнительная промежуточная остановка - 55$/час'
                        },
                        {
                            text: 'Опция “Full Packing”, если требуется  (Оплата отдельно)'
                        },
                        {
                            text: 'Коробки  (оплата по прайс листу)'
                        }
                    ],
                    btnText: 'Заказать услугу'
                },
                {
                    lang: 'en',
                    name: 'Dynamic Amigos',
                    price: 145,
                    time: 'hr',
                    packages: [
                        {
                            text: '1 truck 2 movers'
                        },
                        {
                            text: 'Free wardrobe boxes'
                        },
                        {
                            text: 'Free shrink wrap & tape'
                        },
                        {
                            text: 'Free slip and protective film'
                        },
                        {
                            text: 'Free use of moving blankets'
                        },
                        {
                            text: 'Free computers/TV crating'
                        },
                        {
                            text: 'Free disassembly and reassembly of transported furniture'
                        },

                        {
                            text: 'Free protection of floor coverings (parquet, carpet)'
                        },


                        {
                            text: 'Free basic insurance for furniture and things'
                        },

                    ],
                    optionalTitle: 'Optional',
                    optionalPackage: [
                        {
                            text: 'Every additional mover - 55$/hour'
                        },
                        {
                            text: 'Extra stop - 55$/hour'
                        },
                        {
                            text: '“Full Packing” option if required  (Paid separately)'
                        },
                        {
                            text: 'Boxes  (payment according to the price list)'
                        }
                    ],
                    btnText: 'Order package'
                },
                {
                    lang: 'en',
                    name: 'The Supremes',
                    price: 200,
                    time: 'hr',
                    packages: [
                        {
                            text: '1 truck 3 movers'
                        },
                        {
                            text: 'Free wardrobe boxes'
                        },
                        {
                            text: 'Free shrink wrap & tape'
                        },
                        {
                            text: 'Free slip and protective film'
                        },
                        {
                            text: 'Free use of moving blankets'
                        },
                        {
                            text: 'Free computers/TV crating'
                        },


                        {
                            text: 'Free disassembly and reassembly of transported furniture'
                        },

                        {
                            text: 'Free protection of floor coverings (parquet, carpet)'
                        },


                        {
                            text: 'Free basic insurance for furniture and things'
                        },

                    ],
                    optionalTitle: 'Optional',
                    optionalPackage: [
                        {
                            text: 'Every additional mover - 55$/hour'
                        },
                        {
                            text: 'Extra stop - 55$/hour'
                        },
                        {
                            text: '“Full Packing” option if required  (Paid separately)'
                        },
                        {
                            text: 'Boxes  (payment according to the price list)'
                        }
                    ],
                    btnText: 'Order package'
                },
                {
                    lang: 'en',
                    name: 'SkyBreeze Gang',
                    price: 255,
                    time: 'hr',
                    packages: [
                        {
                            text: '1 truck 4 movers'
                        },
                        {
                            text: 'Free wardrobe boxes'
                        },
                        {
                            text: 'Free shrink wrap & tape'
                        },
                        {
                            text: 'Free slip and protective film'
                        },
                        {
                            text: 'Free use of moving blankets'
                        },
                        {
                            text: 'Free computers/TV crating'
                        },


                        {
                            text: 'Free disassembly and reassembly of transported furniture'
                        },

                        {
                            text: 'Free protection of floor coverings (parquet, carpet)'
                        },


                        {
                            text: 'Free basic insurance for furniture and things'
                        },

                    ],
                    optionalTitle: 'Optional',
                    optionalPackage: [
                        {
                            text: 'Every additional mover - 55$/hour'
                        },
                        {
                            text: 'Extra stop - 55$/hour'
                        },
                        {
                            text: '“Full Packing” option if required  (Paid separately)'
                        },
                        {
                            text: 'Boxes  (payment according to the price list)'
                        }
                    ],
                    btnText: 'Order package'
                },
                {
                    lang: 'es',
                    name: 'Dynamic Amigos',
                    price: 145,
                    time: 'hora',
                    packages: [
                        {
                            text: 'Camión + 2 mudanzas'
                        },
                        {
                            text: 'Libre - Caja de Armario'
                        },
                        {
                            text: 'Libre - deslizamiento y película protectora'
                        },
                        {
                            text: 'Libre - uso de una manta de embalaje'
                        },
                        {
                            text: 'Libre - embalaje de televisores y ordenadores'
                        },


                        {
                            text: 'Libre - desmontaje y montaje de muebles transportados'
                        },

                        {
                            text: 'Libre - protección de revestimientos de suelos (parquet, moqueta)'
                        },


                        {
                            text: 'Libre - seguro mínimo para muebles y cosas'
                        },

                    ],
                    optionalTitle: 'Opcional',
                    optionalPackage: [
                        {
                            text: '+1 cargador - 55$/hora'
                        },
                        {
                            text: 'Parada intermedia adicional - 55$/hora'
                        },
                        {
                            text: 'Opción de "Embalaje completo" si se requiere  (Pagado por separado)'
                        },
                        {
                            text: 'Cajas  (pago según lista de precios)'
                        }
                    ],
                    btnText: 'Ordenar paquete'
                },
                {
                    lang: 'es',
                    name: 'The Supremes',
                    price: 200,
                    time: 'hora',
                    packages: [
                        {
                            text: 'Camión + 3 mudanzas'
                        },
                        {
                            text: 'Libre - Caja de Armario'
                        },
                        {
                            text: 'Libre - deslizamiento y película protectora'
                        },
                        {
                            text: 'Libre - uso de una manta de embalaje'
                        },
                        {
                            text: 'Libre - embalaje de televisores y ordenadores'
                        },


                        {
                            text: 'Libre - desmontaje y montaje de muebles transportados'
                        },

                        {
                            text: 'Libre - protección de revestimientos de suelos (parquet, moqueta)'
                        },


                        {
                            text: 'Libre - seguro mínimo para muebles y cosas'
                        },

                    ],
                    optionalTitle: 'Opcional',
                    optionalPackage: [
                        {
                            text: '+1 cargador - 55$/hora'
                        },
                        {
                            text: 'Parada intermedia adicional - 55$/hora'
                        },
                        {
                            text: 'Opción de "Embalaje completo" si se requiere  (Pagado por separado)'
                        },
                        {
                            text: 'Cajas  (pago según lista de precios)'
                        }
                    ],
                    btnText: 'Ordenar paquete'
                },
                {
                    lang: 'es',
                    name: 'SkyBreeze Gang',
                    price: 255,
                    time: 'hora',
                    packages: [
                        {
                            text: 'Camión + 4 mudanzas'
                        },
                        {
                            text: 'Libre - Caja de Armario'
                        },
                        {
                            text: 'Libre - deslizamiento y película protectora'
                        },
                        {
                            text: 'Libre - uso de una manta de embalaje'
                        },
                        {
                            text: 'Libre - embalaje de televisores y ordenadores'
                        },


                        {
                            text: 'Libre - desmontaje y montaje de muebles transportados'
                        },

                        {
                            text: 'Libre - protección de revestimientos de suelos (parquet, moqueta)'
                        },


                        {
                            text: 'Libre - seguro mínimo para muebles y cosas'
                        },

                    ],
                    optionalTitle: 'Opcional',
                    optionalPackage: [
                        {
                            text: '+1 cargador - 55$/hora'
                        },
                        {
                            text: 'Parada intermedia adicional - 55$/hora'
                        },
                        {
                            text: 'Opción de "Embalaje completo" si se requiere  (Pagado por separado)'
                        },
                        {
                            text: 'Cajas  (pago según lista de precios)'
                        }
                    ],
                    btnText: 'Ordenar paquete'
                },
            ]
            return arr.filter(el => {
                if (el.lang === this.$i18n.locale) {
                    return el
                }
            })
        }
    },
    methods: {
        openServicesModal(e) {
            this.$store.dispatch('choose-service-popup/openPopup', { type: 'packages', package: e })
        }
    },
    mounted() {
        const swiper = new Swiper('.service-packages__row', {
            modules: [Navigation],
            slidesPerView: 'auto',
            spaceBetween: 15,
            iOSEdgeSwipeDetection: true,
            navigation: {
                nextEl: ".service-packages .arrow--next",
                prevEl: ".service-packages .arrow--prew",
            },
            breakpoints: {
                220: {
                    slidesPerView: 1,
                },
                680: {
                    slidesPerView: 1,
                },
            }
        })
    }
}
</script>
<style>
.service-packages {
    background: url('@/assets/img/main/our-services/left.png'), url('@/assets/img/main/our-services/right.png'), #fff;
    background-repeat: no-repeat;
    background-position: 2% center, right bottom;
}

.service-packages__row {
    display: none;
}

.service-packages__row--desctop {
    display: grid;
    grid-template-areas: 'first second third';
    grid-gap: 30px;
    margin-top: 70px;
}

.first {
    grid-area: first;
    width: 100% !important;
}

.second {
    grid-area: second;
    width: 100% !important;
}

.third {
    grid-area: third;
    width: 100% !important;
}

.item-bold:nth-child(1) {
    font-weight: bold;
}

@media screen and (max-width: 1010px) {
    .service-packages__row--desctop {
        grid-template-areas: 'first second'
            'third third';
        grid-gap: 20px;
    }

    .second .service-packages__coll,
    .first .service-packages__coll {
        margin-bottom: 0;
    }

}

@media screen and (max-width: 992px) {
    .service-packages {
        background: url('@/assets/img/main/our-services/left-t.png'), url('@/assets/img/main/our-services/right-t.png'), #fff;
        background-repeat: no-repeat;
        background-position: 2% top, right top;
    }
}

@media screen and (max-width: 768px) {
    .service-packages {
        background: url('@/assets/img/main/our-services/left-m.png'), url('@/assets/img/main/our-services/right-m.png'), #fff;
        background-repeat: no-repeat;
        background-position: 2% top, right bottom;
    }

    .service-packages__row {
        display: block;
    }

    .service-packages__row--desctop {
        display: none;
    }

    .service-packages__coll {
        width: 335px !important;
    }
}
</style>