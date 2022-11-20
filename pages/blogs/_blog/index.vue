<template>
    <div v-if="blogItem.length > 0">
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <bread-crump-btn-home />
                        </li>
                        <li>
                            <div @click="$router.push(localePath(`/blogs`))">
                                <nuxt-link :to="switchLocalePath($i18n.locale)" v-if="translations.length > 0">{{
                                        translations[3].text
                                }}</nuxt-link>
                            </div>
                        </li>
                        <li>{{ blogItem[0].name }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="article">
            <div class="wrapper">
                <div class="article__text">
                    <div class="article__top">
                        <h1>{{ blogItem[0].name }}</h1>
                        <div class="article__images"
                            v-if="blogItem[0].id === '1' || blogItem[0].id === '2' || blogItem[0].id === '3'">
                            <img class="img-desctop" src="@/assets/img/article/img.jpg" alt="">
                            <img class="img-table" src="@/assets/img/article/img-table.jpg" alt="">
                            <img class="img-mobile" src="@/assets/img/article/img-mobile.jpg" alt="">
                        </div>
                        <div class="article__images" v-else>
                            <img class="img-desctop" src="@/assets/img/article/img1.jpg" alt="">
                            <img class="img-table" src="@/assets/img/article/img-table1.jpg" alt="">
                            <img class="img-mobile" src="@/assets/img/article/img-mobile1.jpg" alt="">
                        </div>
                    </div>
                    <div v-html="blogItem[0].content"></div>
                </div>
            </div>
        </section>

        <!-- <section class="other-articles bg-white">
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
        </section> -->
    </div>
</template>
<script>
import breadCrumpBtnHome from '../../../components/UI/breadCrumpBtnHome.vue'
export default {
    components: { breadCrumpBtnHome },
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
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'top_menu')
            return topMenu
        }
    },
    methods: {
        async getBlog() {
            try {
                this.$store.dispatch('loader/getLoading', true)
                const langID = this.$cookies.get('langId')
                const blogs = await this.$axios.get(`front/articles?search[langs_id]=${langID}&search[alias]=${this.$route.params.blog}&limit=-1`)
                    .then(res => {
                        return res.data.data
                    })
                if (blogs) {
                    this.blogItem = blogs
                    document.title = blogs[0].name
                    this.$store.dispatch('loader/getLoading', false)
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    async mounted() {
        await this.getBlog()
        console.log(this.$route.params.blog);
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