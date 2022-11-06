<template>
    <div>
        <section class="about-promo">
            <div class="about-promo__bg p-absolute img-cover">
                <img class="img-desctop" src="@/assets/img/about/about-promo/bg.svg" alt="">
                <img class="img-table" src="@/assets/img/about/about-promo/bg-table.svg" alt="">
                <img class="img-mobile" src="@/assets/img/about/about-promo/bg-mobile.svg" alt="">
            </div>
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <div @click="$router.push(localePath(`/`))">
                                <nuxt-link :to="switchLocalePath($i18n.locale)">Главная</nuxt-link>
                            </div>
                        </li>
                        <li>О нас</li>
                    </ul>
                </div>
                <div class="about-promo__wrap">
                    <div class="about-promo__title title-big h1">О нас</div>
                    <div class="about-promo__subtitle">Наша компания занимается перевозкой вещей. Мы предлагаем большой
                        спектр основных и дополнительных услуг, принимаем и доставляем грузы, осуществляем их упаковку и
                        страхование. Если вам необходима перевозка имущества, мы с радостью выполним эту задачу.</div>
                </div>
            </div>
        </section>

        <section class="scene about-story about-info bg-white">
            <div class="wrapper">
                <div class="about-title title h2">История и миссия</div>
                <div class="about-info__row">
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p>Наша компания появилась в Калифорнии, но в будущем планирует расширить географию
                                присутствия
                                на другие штаты.</p>
                            <p>Фирма была основана практикующими специалистами с опытом работы в мувинг-сфере. Основная
                                задача нашей деятельности заключается в следующем – мы хотим предоставлять качественные
                                услуги, связанные с перевозкой вещей, чтобы переезд доставлял людям только приятные
                                эмоции.
                            </p>
                            <p>Мы не просто мувинг-сервис, а компания полного цикла со своим сайтом и мобильным
                                приложением.
                                Нашей особенностью является стремление к развитию и использование современных
                                технологий.
                            </p>
                        </div>
                    </div>
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p>Миссия нашей организации – стать одной из ведущих транспортных компаний на уровне страны
                                и
                                объединить тысячи других мувинговых компаний и частных перевозчиков в США.</p>
                        </div>
                        <div class="about-story__info">
                            <div class="about-story__caption">Мы стремимся к достижению этой глобальной цели, а пока что
                                сами оказываем качественные услуги по переезду с высоким уровнем сервиса.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="scene about-story about-info">
            <div class="wrapper">
                <div class="about-title title h2">Особенности работы</div>
                <div class="about-info__row">
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p>Мы осуществляем доставку вещей по территории США. Наши специалисты успешно организуют не
                                только местные, но и междугородние переезды. Вне зависимости от расстояния, на которое
                                вам
                                нужно доставить груз, мы с удовольствием возьмемся за эту работу.</p>
                        </div>
                    </div>
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p>Работа компании ведется как в крупных городах, так и в маленьких населенных пунктах.
                                Отработанная схема позволяет снизить влияние фактора удаленности и добиваться
                                оптимальных
                                результатов.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="scene about-team about-info bg-white">
            <div class="wrapper">
                <div class="about-title title h2">Наши лица</div>
                <div class="about-info__row">
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p>Наша компания многонациональная и лояльно относится ко всем. Поскольку мы расширяемся, то
                                постоянно находимся в поиске новых лиц. Если вы интересуетесь мувинг-сферой, хотели бы
                                работать в данной отрасли и (или) имеете аналогичный опыт работы, то приглашаем наладить
                                деловые отношения. Наша организация всегда рада талантливым людям! Всем кандидатам
                                гарантируем достойный уровень оплаты труда.</p>
                        </div>
                    </div>
                    <div class="about-info__coll">
                        <div class="about-info__desc">
                            <p>Кроме того, мы заинтересованы в сотрудничестве с организациями разных уровней. Предлагаем
                                системным интеграторам, предприятиям в сфере торговли и другим фирмам и частным лицам,
                                которым интересны наши услуги, рассмотреть предложение о сотрудничестве. Если вы
                                заинтересованы в деловых отношениях, то просим вас написать нам об этом.</p>
                        </div>
                    </div>
                </div>
                <div class="about-order">
                    <div class="about-order__title">Заполните форму обратной связи для сотрудничества и мы свяжемся с
                        вами
                    </div>
                    <form action="#" class="about-order__form form">
                        <div class="about-order__row">
                            <div class="about-order__coll">
                                <div class="about-order__row">
                                    <div class="about-order__coll">
                                        <label class="form__label">
                                            <input type="text" class="form__field field" placeholder="Ваше имя">
                                        </label>
                                    </div>
                                    <div class="about-order__coll">
                                        <label class="form__label">
                                            <input type="text" class="form__field field" placeholder="Ваша фамилия">
                                        </label>
                                    </div>
                                </div>
                                <label class="form__label">
                                    <input type="text" class="form__field field" placeholder="Ваша эл.почта">
                                </label>
                            </div>
                            <div class="about-order__coll">
                                <label class="form__label">
                                    <textarea class="form__field field" placeholder="Ваше сообщение"></textarea>
                                </label>
                            </div>
                        </div>
                        <div class="about-order__bottom">
                            <button class="form__btn btn">Отправить</button>
                            <div class="form__checbox">
                                <label class="checbox">
                                    <input type="checkbox" name="value" value="active" checked>
                                    <div class="checbox__icon"></div>
                                    <div class="checbox__caption">Соглашаюсь с <a href="#">Политикой Конфиденциальности
                                            и
                                            Обработкой Персональных данных</a></div>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <why-we />
    </div>
</template>
<script>
import WhyWe from '../components/reuse/WhyWe.vue'
export default {
    components: { WhyWe },

}
</script>
<style>

</style>