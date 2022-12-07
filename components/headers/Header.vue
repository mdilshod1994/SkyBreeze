<template>
    <header class="header">
        <div class="wrapper header__wrap">
            <div class="header__first">
                <div class="header__burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div @click="$router.push(localePath('/'))">
                    <nuxt-link class="logo" :to="switchLocalePath($i18n.locale)">
                        <img src="@/assets/img/icons/logo.svg" alt="">
                    </nuxt-link>
                </div>
                <!-- <nuxt-link to="/" class="logo">
                    <img src="@/assets/img/icons/logo.svg" alt="">
                </nuxt-link> -->
                <div class="header__content">
                    <div class="header__scroll dragscroll">
                        <nav class="header__menu">
                            <ul v-if="translations.length > 0">
                                <li class="menu-item-has-children">
                                    <div class="menu-item-has-children__link">{{ translations[0].text }}</div>
                                    <ul>
                                        <li v-for="link in services" :key="link.id">
                                            <div @click="$router.push(localePath(`/our-services/${link.alias}`))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    {{ link.name }}
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <!-- <li>
                                            <div @click="$router.push(localePath('/our-services/apartment-moving'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Квартирный переезд
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/office-moving'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Офисный переезд
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/warehouse-moving'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Складские переезды,
                                                    контейнеры
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/elderly-moving'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Переезд для пожилых людей
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/local-moving'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Локальный / местный переезд
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/long-journey-moving'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Междугородний / дальний
                                                    переезд
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                @click="$router.push(localePath('/our-services/furniture-transportation'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Перевозка мебели
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/personal-property'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Перевозка личного имущества
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div @click="$router.push(localePath('/our-services/packing-things'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Упаковка и распаковка вещей
                                                </nuxt-link>
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                @click="$router.push(localePath('/our-services/furniture-disassembly'))">
                                                <nuxt-link class="text-header-bold text-middle"
                                                    :to="switchLocalePath($i18n.locale)">
                                                    Разборка и сборка мебели
                                                </nuxt-link>
                                            </div>
                                        </li> -->
                                    </ul>
                                </li>
                                <li>
                                    <div @click="$router.push(localePath('/our-services'))">
                                        <nuxt-link class="text-header-bold text-middle"
                                            :to="switchLocalePath($i18n.locale)">
                                            {{ translations[1].text }}
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div @click="$router.push(localePath('/about-us'))">
                                        <nuxt-link class="text-header-bold text-middle"
                                            :to="switchLocalePath($i18n.locale)">
                                            {{ translations[2].text }}
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div @click="$router.push(localePath('/blogs'))">
                                        <nuxt-link class="text-header-bold text-middle"
                                            :to="switchLocalePath($i18n.locale)">
                                            {{ translations[3].text }}
                                        </nuxt-link>
                                    </div>
                                </li>
                                <!-- <li>
                                    <div @click="$router.push(localePath('/contact'))">
                                        <nuxt-link class="text-header-bold text-middle"
                                            :to="switchLocalePath($i18n.locale)">
                                            Контакты
                                        </nuxt-link>
                                    </div>
                                </li> -->
                            </ul>
                        </nav>
                        <!--div class="header__buttons">
						<a href="#" class="header__btn btn btn--item">Вход</a>
						<a href="#" class="header__link link">Регистрация</a>
					</div-->
                    </div>
                </div>
            </div>
            <div class="header__last">
                <div class="language">
                    <div class="language__top">
                        <div class="language__caption">{{ currLang }}</div>
                        <div class="language__arrow">
                            <svg width="8" height="11" viewBox="0 0 8 11" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8 7.35218L4.4 11L3.6 11L1.58597e-06 7.35218L0.800002 6.54155L3.43432 9.21086L3.43432 0L4.56569 0L4.56569 9.21086L7.2 6.54155L8 7.35218Z"
                                    fill="#28AECB" />
                            </svg>
                        </div>
                    </div>
                    <div class="language__hide">
                        <div v-for="lang  in langs" :key="lang.id" @click="langSwitch(lang)" style="padding: 5px 0">
                            <router-link :to="switchLocalePath(`${lang.alias}`)" class="language__item">
                                {{ lang.name }}
                            </router-link>
                        </div>
                    </div>
                    <!-- <h1>{{ $t('test') }}</h1> -->
                </div>
                <!--div class="header__buttons">
				<a href="#" class="header__btn btn btn--item">Вход</a>
				<a href="#" class="header__link link">Регистрация</a>
			</div-->
                <a href="tel:+17073759273" class="header__phone">
                    <div class="header__phone-icon">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.53415 5.26936L6.09449 2.45325C5.81324 2.12873 5.29761 2.13017 4.97093 2.45758L2.96468 4.46743C2.36757 5.06527 2.19665 5.95301 2.54208 6.66479C4.60575 10.9376 8.05173 14.3884 12.3217 16.4581C13.0327 16.8035 13.9197 16.6326 14.5168 16.0347L16.5418 14.0061C16.87 13.678 16.8707 13.1595 16.5433 12.8783L13.7164 10.4516C13.4207 10.1977 12.9613 10.2309 12.6649 10.528L11.6813 11.5131C11.6309 11.5659 11.5646 11.6007 11.4926 11.6121C11.4205 11.6236 11.3467 11.6111 11.2825 11.5766C9.67462 10.6507 8.34088 9.3152 7.41708 7.70614C7.38249 7.64177 7.36996 7.56784 7.38143 7.49567C7.39289 7.4235 7.42771 7.35709 7.48055 7.30662L8.46132 6.32513C8.75843 6.02657 8.79088 5.56503 8.53415 5.26864V5.26936Z"
                                stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p class="header__phone-text">
                        +1-707-3-SkyBre
                    </p>
                </a>
            </div>
        </div>
    </header>
</template>
<script>

import $ from 'jquery'

export default {
    name: 'Header',
    data() {
        return {
            currLang: 'EN',
        }
    },
    computed: {
        langs() {
            return this.$store.getters['lang/LANGS']
        },
        services() {
            return this.$store.getters['services/SERVICES']
        },
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'top_menu')
            return topMenu
        }
    },
    methods: {
        async langSwitch(e) {
            await this.$store.dispatch('lang/settingLangID', e)
            this.currLang = this.$cookies.get('i18n_redirected').toUpperCase()
        }
    },
    async mounted() {
        if (this.$cookies.get('i18n_redirected')) {
            this.currLang = this.$cookies.get('i18n_redirected').toUpperCase()
        }
        await this.$store.dispatch('lang/getLangs')

        let $windowWidth = window.innerWidth;

        /*Header scroll*/
        function scrollHeader() {
            let top = document.querySelector('html').scrollTop;
            if (top > 5) {
                document.querySelector('.header').classList.add("active");
            } else {
                document.querySelector('.header').classList.remove("active");
            }
        }

        scrollHeader();
        window.addEventListener('scroll', function () {
            scrollHeader();
        });

        // Main menu open

        var headerBurger = document.querySelectorAll('.header__burger');
        for (var i = 0; i < headerBurger.length; i++) {
            headerBurger[i].addEventListener('click', function (event) {
                this.classList.toggle("active");
                document.querySelector('body').classList.toggle("active");
                document.querySelector('.header__content').classList.toggle("active");
            });
        }

        if ($windowWidth <= '1180') {
            $(".menu-item-has-children div").on("click", function (e) {
                e.preventDefault();
                $(this).parent().find("ul").slideToggle(300);
            });
        }

        // Main menu open

        $('.language__top').on("click", function (event) {
            $(this).parent().toggleClass('active');
            if ($(this).parent().hasClass('active')) {
                $('.language__hide').slideDown(300);
                $('.language__hide').on("click", function (event) {
                    $(this).parent().removeClass('active');
                    $('.language__hide').slideUp(300);
                })
            } else {
                $('.language__top').removeClass('active');
                $('.language__hide').slideUp(300);
            }
        });
    },
    watch: {
        $route(to, from) {
            if (to || from) {
                let content = document.querySelector('.header__content')
                let burger = document.querySelector('.header__burger')
                burger.classList.remove('active')
                content.classList.remove('active')
            }
        }
    }
}
</script>
<style lang="scss">
@media screen and (max-width: 540px) {
    .header {
        &__phone-text {
            display: none;
        }
    }
}
</style>