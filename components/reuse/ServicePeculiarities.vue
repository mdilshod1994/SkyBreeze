<template>
    <section class="scene service-peculiarities">
        <div class="wrapper">
            <div class="service-peculiarities__title title h2">Особенности домашнего переезда</div>
            <div class="service-peculiarities__body" v-if="$route.path === '/our-services/personal-property'">
                <div class="service-peculiarities__row">
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">
                            <p>Личное имущество – это довольно обширная категория, к которой относится широкий круг
                                вещей. Поэтому и его перевозка должна осуществляться с учетом характера груза,
                                количества вещей и маршрута. </p>
                        </div>
                    </div>
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">
                            <p>Если планируете переезд и хотите отправить имущество с транспортной компанией, желательно
                                сначала разобрать домашние вещи, поделив их на несколько категорий:</p>
                        </div>
                    </div>
                </div>
                <div class="peculiarities">
                    <div class="peculiarities__row">
                        <div class="peculiarities__coll">
                            <div class="peculiarities__icon">
                                <img src="@/assets/img/personal-property/service-peculiarities/icon-1.svg" alt="">
                            </div>
                            <div class="peculiarities__desc">
                                <p>
                                    <strong>Для продажи</strong>
                                </p>
                            </div>
                        </div>
                        <div class="peculiarities__coll">
                            <div class="peculiarities__icon">
                                <img src="@/assets/img/personal-property/service-peculiarities/icon-2.svg" alt="">
                            </div>
                            <div class="peculiarities__desc">
                                <p>
                                    <strong>Для переработки</strong>
                                </p>
                            </div>
                        </div>
                        <div class="peculiarities__coll">
                            <div class="peculiarities__icon">
                                <img src="@/assets/img/personal-property/service-peculiarities/icon-3.svg" alt="">
                            </div>
                            <div class="peculiarities__desc">
                                <p>
                                    <strong>Для благотворительности</strong>
                                </p>
                            </div>
                        </div>
                        <div class="peculiarities__coll">
                            <div class="peculiarities__icon">
                                <img src="@/assets/img/personal-property/service-peculiarities/icon-4.svg" alt="">
                            </div>
                            <div class="peculiarities__desc">
                                <p>
                                    <strong>Для переезда</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service-peculiarities__row">
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">
                            <p>Ненужные вещи лучше оставить. Есть масса вариантов, что с ними можно сделать. Например,
                                продать или отдать на благотворительность. Вещи в плохом состоянии можно отдать на
                                переработку. Оставшееся имущество нужно подготовить к транспортировке.</p>
                            <p>При перевозке важно позаботиться о сохранности изделий. Некоторые предметы, к примеру,
                                домашний текстиль, можно перевозить в обычных коробках. </p>
                        </div>
                    </div>
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">
                            <p>Вещи, представляющие особую ценность, например, произведения искусства или эксклюзивную
                                мебель, нужно упаковывать особенно тщательно.</p>
                            <p>Если перевозится сразу много вещей, то их помещают в коробки и наносят на них
                                соответствующую маркировку. С ее помощью можно облегчить задачу по разбору и сортировке
                                груза.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service-peculiarities__body" v-else>
                <div class="service-peculiarities__row">
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">Даже при переезде на небольшое расстояние следует
                            учитывать все особенности транспортировки имущества. И в первую очередь следует позаботиться
                            о транспорте.</div>
                    </div>
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">Часто в домах присутствует крупногабаритная бытовая
                            техника, которую владельцы забирают с собой при переезде, то же касается и крупной мебели.
                            Увезти такие вещи на личном автомобиле просто невозможно.</div>
                    </div>
                </div>
                <div class="service-peculiarities__img img-cover">
                    <img class="img-desctop" src="@/assets/img/home-moving/service-peculiarities/img.jpg" alt="">
                    <img class="img-table" src="@/assets/img/home-moving/service-peculiarities/img-table.jpg" alt="">
                    <img class="img-mobile" src="@/assets/img/home-moving/service-peculiarities/img-mobile.jpg" alt="">
                </div>
                <div class="service-peculiarities__row" v-if="!$route.path === '/our-services/office-moving'">
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">К тому же, при самостоятельном переезде из-за большого
                            объема имущества придется не раз возвращаться к старому дому для перевозки вещей. В итоге
                            можно не только потратить значительную сумму на топливо, но и забыть или попросту потерять в
                            спешке часть вещей</div>
                    </div>
                    <div class="service-peculiarities__coll">
                        <div class="service-peculiarities__desc">А если учесть тот факт, что на многократные загрузки и
                            разгрузки уйдет много сил, то переезд может превратиться в настоящий кошмар. Однако можно
                            упростить задачу и доверить работу надежным специалистам.</div>
                    </div>
                </div>
                <div class="office-stages" v-if="$route.path === '/our-services/office-moving'">
                    <div class="office-stages__title h3">Офисный переезд подразумевает следующие этапы:</div>
                    <div class="office-stages__row">
                        <div class="office-stages__coll">
                            <div class="office-stages__coll-box">
                                <div class="office-stages__icon img-contain">
                                    <img src="@/assets/img/office-moving/office-stages/icon-1.svg" alt="">
                                </div>
                                <div class="office-stages__coll-desc">разборка/сборка мебели</div>
                            </div>
                            <div class="office-stages__box">
                                <div class="office-stages__arrow">
                                    <img src="@/assets/img/office-moving/office-stages/arrow.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="office-stages__coll">
                            <div class="office-stages__coll-box">
                                <div class="office-stages__icon img-contain">
                                    <img src="@/assets/img/office-moving/office-stages/icon-2.svg" alt="">
                                </div>
                                <div class="office-stages__coll-desc">упаковка/распаковка офисного<br> имущества</div>
                            </div>
                            <div class="office-stages__box">
                                <div class="office-stages__arrow">
                                    <img src="@/assets/img/office-moving/office-stages/arrow.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="office-stages__coll">
                            <div class="office-stages__coll-box">
                                <div class="office-stages__icon img-contain">
                                    <img src="@/assets/img/office-moving/office-stages/icon-3.svg" alt="">
                                </div>
                                <div class="office-stages__coll-desc">отключение/подключение оргтехники</div>
                            </div>
                            <div class="office-stages__box">
                                <div class="office-stages__arrow">
                                    <img src="@/assets/img/office-moving/office-stages/arrow.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="office-stages__coll">
                            <div class="office-stages__coll-box">
                                <div class="office-stages__icon img-contain">
                                    <img src="@/assets/img/office-moving/office-stages/icon-4.svg" alt="">
                                </div>
                                <div class="office-stages__coll-desc">расстановка оргтехники и мебели</div>
                            </div>
                            <div class="office-stages__box">
                                <div class="office-stages__arrow">
                                    <img src="@/assets/img/office-moving/office-stages/arrow.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="office-stages__coll">
                            <div class="office-stages__coll-box">
                                <div class="office-stages__icon img-contain">
                                    <img src="@/assets/img/office-moving/office-stages/icon-5.svg" alt="">
                                </div>
                                <div class="office-stages__coll-desc">перевозка офиса по&nbsp;новому адресу</div>
                            </div>
                            <div class="office-stages__box">
                                <div class="office-stages__arrow">
                                    <img src="@/assets/img/office-moving/office-stages/arrow.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="office-stages__body">
                        <div class="office-stages__body-row">
                            <div class="office-stages__body-coll">
                                <div class="office-stages__body-desc">
                                    <p><strong>Неподготовленный офисный переезд напоминает ураган</strong>, после
                                        которого часть имущества сложно найти, а другая часть оказывается повреждена.
                                    </p>
                                    <p>Некоторые вещи могут быть безвозвратно утеряны, а какие-то – сломаны, поцарапаны,
                                        деформированы.</p>
                                </div>
                            </div>
                            <div class="office-stages__body-coll">
                                <div class="office-stages__body-desc">
                                    <p>
                                        <strong>Сложность такого переезда зависит от количества рабочих мест.</strong>
                                    </p>
                                    <p>Наиболее легкой считается перевозка малого офиса (до 3-х рабочих мест).</p>
                                    <p>Сложнее перевозить средние и большие офисы (10 рабочих мест и более, 25 рабочих
                                        мест и более).</p>
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
export default {

}
</script>
<style>

</style>