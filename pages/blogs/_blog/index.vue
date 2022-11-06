<template>
    <div>
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Блог</a></li>
                        <li>Как перевезти вещи на новое место жительство: чек-лист и полезные советы</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="article" v-if="blogItem.length > 0">
            <div class="wrapper">
                <div class="article__text">
                    <div class="article__top">
                        <h1>Как перевезти вещи на новое место жительство: чек-лист и полезные советы</h1>
                        <div class="article__images">
                            <img class="img-desctop" src="@/assets/img/article/img.jpg" alt="">
                            <img class="img-table" src="@/assets/img/article/img-table.jpg" alt="">
                            <img class="img-mobile" src="@/assets/img/article/img-mobile.jpg" alt="">
                        </div>
                    </div>
                    <p>Вы собрались переезжать? Жители США очень мобильны. По статистике, наибольшее количество
                        переездов происходит из-за смены места работы.</p>
                    <p>Вне зависимости от того, получили ли вы работу в другом городе, либо просто нашли жилье
                        повышенной комфортабельности. Мы поддерживаем решение о переезде, несмотря на причины,
                        поспособствовавшие смене места&nbsp;жительства. Позвольте рассказать об особенностях
                        перевозки вещей и поделиться секретами, которые помогут&nbsp;пережить хлопотный процесс.</p>
                    <div></div>
                    <div v-html="blogItem[0].content"></div>
                    <!-- <h2>Чек-лист перед переездом</h2>
                    <p>
                        <strong>Чтобы переезд прошел эффективно, рекомендуем решить 3 задачи:</strong>
                    </p>
                    <div class="article__info">
                        <div class="article__coll">
                            <div class="article__number">1</div>
                            <div class="article__desc">Определить перечень вещей, которые возьмете с собой</div>
                        </div>
                        <div class="article__coll">
                            <div class="article__number">2</div>
                            <div class="article__desc">Подумать об упаковке груза</div>
                        </div>
                        <div class="article__coll article__coll--table">
                            <div class="article__number">3</div>
                            <div class="article__desc">Организовать процесс переезда</div>
                        </div>
                    </div>
                    <h2>Расскажем подробно о каждом этапе.</h2>
                    <h3>Расхламление</h3>
                    <p>Самое сложное в переезде – сборы. Перед переездом рекомендуем разобрать вещи в доме, поделив их
                        на 2 группы – первую возьмете с собой, вторую оставите. С первой группой более или менее
                        понятно. Берем с собой все, что пригодится на новом месте жительства. Эти вещи можно даже внести
                        в список, чтобы ничего не оставить. Если разбираете шкафы и столы, мелкую фурнитуру положите в
                        отдельный пакет и сделайте на нем соответствующую подпись, чтобы не потерять. Можно приклеить
                        этот пакет к самому предмету. Так в дальнейшем облегчите сборку.</p>
                    <p>Вещи, которые не нужны, например, давно не использовались, лучше оставить. Их можно отдать на
                        благотворительность, продать или утилизировать. Во многих городах США есть некоммерческие и
                        благотворительные организации, которые могут передать вещи нуждающимся. Воспользовавшись их
                        услугами, вы не только избавитесь от ненужных вам предметов, но и порадуете других людей.</p>
                    <h3>Упаковка</h3>
                    <p>От того, насколько качественно упакованы вещи, напрямую зависит их сохранность при перевозке. Вы
                        можете заняться упаковкой самостоятельно. Но для этого потребуется предварительно закупить
                        коробки, воздушно-пузырчатую пленку и другие материалы. А после тратить время на упаковку.
                        Предметы нужно правильно разместить. Так, тяжелые вещи обычно располагают на дно коробок, а
                        легкие – ставят сверху.</p>
                    <p>Если пользуетесь услугами мувинг-сервиса, то упаковка обычно входит в компетенцию перевозчика.
                        Наша фирма предлагает клиентам Full package. В рамках услуги мы за фиксированную плату упакуем
                        все, до мелочей – каждую кружку, тарелку, вазу и другие вещи. Это является гарантией того, что
                        груз будет доставлен до места назначения в сохранности.</p>
                    <h3>Перевозка</h3>
                    <p>Мало кто перевозит вещи своими силами. Это сложно и хлопотно. Часто личный автомобиль не подходит
                        для перевозки грузов. Поэтому обычно транспортировкой вещей занимается мувинг-компания. Вам
                        остается переехать самостоятельно.</p>
                    <p>На новом месте стоит позаботиться о том, чтобы грузчики не повредили мебель и вещи, когда будут
                        заносить их внутрь помещения. Например, можно временно закрыть откосы и полы.</p>
                    <p>Переезд завершен, остается самое приятное – расставить предметы по нужным местам и создать
                        атмосферу по душе.</p> -->
                </div>
            </div>
        </section>

        <section class="other-articles bg-white">
            <div class="wrapper">
                <div class="other-articles__title title h2">Другие статьи</div>
                <div class="other-articles__wrap">
                    <a href="#" class="blog-card">
                        <div class="blog-card__img img-cover">
                            <img src="@/assets/img/article/other-articles/img-1.jpg" alt="">
                        </div>
                        <div class="blog-card__bottom">
                            <div class="blog-card__caption">Как перевезти вещи на новое место жительство: чек-лист и
                                полезные советы</div>
                        </div>
                    </a>
                    <a href="#" class="blog-card">
                        <div class="blog-card__img img-cover">
                            <img src="@/assets/img/article/other-articles/img-2.jpg" alt="">
                        </div>
                        <div class="blog-card__bottom">
                            <div class="blog-card__caption">Особенности организации офисного переезда</div>
                        </div>
                    </a>
                    <a href="#" class="blog-card">
                        <div class="blog-card__img img-cover">
                            <img src="@/assets/img/article/other-articles/img-3.jpg" alt="">
                        </div>
                        <div class="blog-card__bottom">
                            <div class="blog-card__caption">Как перевезти вещи на новое место жительство: чек-лист и
                                полезные советы</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'blog',
    data() {
        return {
            blogItem: []
        }
    },
    computed: {
        blogs() {
            return this.$store.getters['blog/BLOGS']
        },
    },
    methods: {
        async getBlog() {
            try {
                const langID = this.$cookies.get('langId')
                const blogs = await this.$axios.get(`/articles?search[langs_id]=${langID}`)
                    .then(res => {
                        return res.data.data
                    })
                if (blogs) {
                    blogs.filter(el => {
                        if (el.files_id == this.$route.params.blog) {
                            this.blogItem.push(el)
                            console.log(el);
                        }
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    async mounted() {
        await this.getBlog()
    },
    watch: {
        blogs(newVal) {
            if (newVal) {
                this.getBlog()
            }
        }
    }

}
</script>
<style>

</style>