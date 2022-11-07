<template>
    <div>
        <footer class="footer">
            <div class="wrapper footer__wrap">
                <div class="footer__first">
                    <a href="#" class="footer__logo">
                        <img src="@/assets/img/icons/logo-footer.svg" alt="">
                    </a>
                    <div class="footer__first-items">
                        <div class="footer__first-item">
                            <div class="footer__caption">Адрес</div>
                            <div class="footer__first-desc">Los Angeles, CA 90015, USA</div>
                        </div>
                        <div class="footer__first-item">
                            <div class="footer__caption">Часы работы</div>
                            <div class="footer__first-desc">Пн-Вс: 07:00 AM - 09:00 PM</div>
                        </div>
                        <div class="footer__first-item">
                            <div class="footer__caption">Телефон</div>
                            <a href="tel:" class="footer__tel">+1 431 231 6523</a>
                        </div>
                    </div>
                    <a href="#" class="footer__btn btn">Cвязаться с нами</a>
                </div>
                <div class="footer__center">
                    <div class="footer__caption">Наши услуги</div>
                    <div class="footer__menu">
                        <ul>
                            <li v-for="link in services" :key="link.id">
                                <div @click="$router.push(localePath(`/our-services/${link.alias}`))">
                                    <nuxt-link :to="switchLocalePath($i18n.locale)">
                                        {{ link.name_short }}
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__last">
                    <div class="footer__last-box">
                        <div class="footer__caption">Правила</div>
                        <div class="footer__menu">
                            <ul>
                                <li>
                                    <a href="#">ссылканаправило1</a>
                                </li>
                                <li>
                                    <a href="#">ссылканаправило2</a>
                                </li>
                                <li>
                                    <a href="#">ссылканаправило3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer__last-box">
                        <div class="footer__caption">Социальные сети</div>
                        <div class="footer__social">
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/instagram.svg" alt="">
                            </a>
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/snapchat.svg" alt="">
                            </a>
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/fb.svg" alt="">
                            </a>
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/telegram.svg" alt="">
                            </a>
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/linkedin.svg" alt="">
                            </a>
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/twitter.svg" alt="">
                            </a>
                            <a href="#" class="footer__social-link">
                                <img src="@/assets/img/footer/icon-1.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="bottom">
            <div class="wrapper bottom__wrap flex">
                <div class="bottom__copiright">© Sky Breeze 2022. Все права защищены </div>
                <div class="bottom__buttons flex">
                    <a href="#" class="bottom__link">Политика конфиденциальности</a>
                    <a href="#" class="bottom__link">Обработка персональных данных</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        services() {
            return this.$store.getters['services/SERVICES']
        }
    },
}
</script>
<style>

</style>