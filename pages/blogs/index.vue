<template>
    <div>
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <div @click="$router.push(localePath(`/`))">
                                <nuxt-link :to="switchLocalePath($i18n.locale)">Главная</nuxt-link>
                            </div>
                        </li>
                        <li>Блог</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="blog">
            <div class="wrapper">
                <div class="blog__title title-big h1">Блог</div>
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
export default {
    name: 'blogs',
    // head() {
    //     return {
    //         title: "About page"
    //     };
    // },
    computed: {
        blogs() {
            return this.$store.getters['blog/BLOGS']
        }
    }
}
</script>
<style>

</style>