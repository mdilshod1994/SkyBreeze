<template>
    <div>
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <bread-crump-btn-home />
                        </li>
                        <li v-if="translations.length > 0"> {{ translations[3].text }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="blog">
            <div class="wrapper">
                <div class="blog__title title-big h1" v-if="translations.length > 0"> {{ translations[3].text }}</div>
                <div class="blog__wrap">
                    <div v-for="blog in blogs" :key="blog.id"
                        @click="$router.push(localePath(`/blogs/${blog.files_id}`))">
                        <nuxt-link class="blog-card" :to="switchLocalePath($i18n.locale)">
                            <div class="blog-card__img img-cover">
                                <img :src="`${blog.photo.server}/${blog.photo.path}`" alt="">
                            </div>
                            <div class="blog-card__bottom">
                                <div class="blog-card__caption">{{ blog.name }}</div>
                            </div>
                        </nuxt-link>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script>
import breadCrumpBtnHome from '../../components/UI/breadCrumpBtnHome.vue'
export default {
    components: { breadCrumpBtnHome },
    name: 'blogs',
    computed: {
        blogs() {
            return this.$store.getters['blog/BLOGS']
        },
        translations() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'top_menu')
            return topMenu
        }
    },
    mounted() {
        let titleHeads = [{ name: 'Blog', val: 'en' }, { name: 'Blog', val: 'es' }, { name: 'Блог', val: 'ru' }, ''].filter(el => {
            if (el.val === this.$cookies.get('i18n_redirected')) {
                return el
            }
        })
        document.title = titleHeads[0].name
    }
}
</script>
<style>

</style>