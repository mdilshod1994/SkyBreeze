<template>
    <section class="scene service-benefits bg-white">
        <div class="wrapper">
            <div class="service-benefits__title title h2">Наши преимущества</div>
            <div class="service-benefits-info" v-if="!$route.path === '/our-services/long-journey-moving'">
                <div class="service-benefits-info__coll">
                    <div class="service-benefits-info__desc">Мы специализируемся на различных видах перевозок, и наши
                        специалисты готовы оказать помощь в домашнем переезде. Благодаря&nbsp;большому автопарку мы
                        сможем подобрать оптимальную технику для ваших задач и осуществить транспортировку вещей в
                        минимальные сроки.</div>
                </div>
                <div class="service-benefits-info__coll">
                    <div class="service-benefits-info__desc">При необходимости вы также можете обратиться к нам за
                        помощью еще на этапе упаковки имущества. В таком случае опытные специалисты смогут грамотно
                        распределить груз, с учетом хрупкости и габаритов, а по приезду оперативно произвести
                        распаковку.</div>
                </div>
            </div>
            <div class="service-benefits__body" v-if="$route.path === '/our-services/home-moving'">
                <div class="service-benefits__body-title h3">Благодаря нам вы&nbsp;сможете:</div>
                <div class="service-benefits__row">
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/home-moving/service-benefits/icon-1.svg" alt="">
                        </div>
                        <div class="service-benefits__caption">Исключить травмы и&nbsp;сэкономить силы</div>
                        <div class="service-benefits__desc">Во время перемещения тяжелых вещей неподготовленный человек
                            может не только переутомиться, но и получить травмы. Особенно, если дело касается такого
                            ответственного периода в жизни.</div>
                    </div>
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/home-moving/service-benefits/icon-2.svg" alt="">
                        </div>
                        <div class="service-benefits__caption">Сэкономить</div>
                        <div class="service-benefits__desc">Обращение к опытным грузчикам зачастую оказывается дешевле,
                            чем самостоятельная перевозка вещей. В первую очередь это связано со стоимостью топлива, но
                            главным образом вы экономите собственное время.</div>
                    </div>
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/home-moving/service-benefits/icon-3.svg" alt="">
                        </div>
                        <div class="service-benefits__caption">Оставить только положительные эмоции</div>
                        <div class="service-benefits__desc">Загрузка и перевозка вещей является одной из основных причин
                            стресса во время переезда. Доверив эту задачу специалистам, вы сможете значительно сократить
                            количество негативных эмоций от процесса.</div>
                    </div>
                </div>
            </div>
            <div class="service-benefits__body" v-if="$route.path === '/our-services/apartment-moving'">
                <div class="service-benefits__body-title h3">Для сохранности личных вещей наш мувинг-сервис:</div>
                <div class="service-benefits__row">
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/apartment-moving/service-benefits/icon-1.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Соблюдает технологию</strong> упаковки и перевозки
                            предметов разных типов</div>
                    </div>
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/apartment-moving/service-benefits/icon-2.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Предлагает услугу Full package</strong> для упаковки
                            всех вещей по отдельности</div>
                    </div>
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/apartment-moving/service-benefits/icon-3.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Защищает колонны</strong>, стены и другие элементы в
                            жилье от повреждений при переноске имущества</div>
                    </div>
                    <div class="service-benefits__coll">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/apartment-moving/service-benefits/icon-4.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Использует качественные</strong> упаковочные
                            материалы</div>
                    </div>
                </div>
            </div>
            <div class="service-benefits-info" v-if="!$route.path === '/our-services/long-journey-moving'">
                <div class="service-benefits-info__coll">
                    <div class="service-benefits-info__desc">Мувинг-сервис имеет собственные стандарты организации
                        перевозки имущества. Поэтому, пользуясь услугами нашей компании, можно не беспокоиться по поводу
                        сохранности личных вещей.</div>
                </div>
                <div class="service-benefits-info__coll">
                    <div class="service-benefits-info__desc">Переезд вместе с профессиональным перевозчиком избавит от
                        хлопот и доставит положительные эмоции. Останется только пригласить друзей и родственников на
                        новоселье.</div>
                </div>
            </div>
            <div class="service-benefits__body" v-if="$route.path === '/our-services/long-journey-moving'">
                <div class="service-benefits__row">
                    <div class="service-benefits__coll service-benefits__coll--big">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/long-journey/service-benefits/icon-1.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Специалисты нашей компании осуществляют различные
                                виды дальних перевозок.</strong> Вы можете обратиться к нам не только для переездов
                            между городами или штатами, но и для межгосударственной транспортировки вещей.</div>
                    </div>
                    <div class="service-benefits__coll service-benefits__coll--big">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/long-journey/service-benefits/icon-2.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Наиболее главной задачей для нас является
                                необходимость в предоставлении качественных услуг</strong>, чтобы такой важный этап
                            жизни как дальний переезд ассоциировался у вас только с положительными эмоциями.</div>
                    </div>
                    <div class="service-benefits__coll service-benefits__coll--big">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/long-journey/service-benefits/icon-3.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>Благодаря большому автопарку мы готовы предоставить
                                оптимальный вариант техники</strong>, которая позволит доставить имущество в минимальные
                            сроки.</div>
                    </div>
                    <div class="service-benefits__coll service-benefits__coll--big">
                        <div class="service-benefits__icon">
                            <img src="@/assets/img/long-journey/service-benefits/icon-4.svg" alt="">
                        </div>
                        <div class="service-benefits__desc"><strong>При необходимости, наши специалисты готовы
                                предоставить дополнительные услуги.</strong> Помимо погрузки и разгрузки, мы предлагаем
                            упаковку имущества. К примеру, если среди вещей есть хрупкие изделия, то мы можем помочь с
                            их упаковкой, что даст дополнительную гарантию сохранности. </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style>

</style>