<template>
    <div v-if="service.length > 0">
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <div @click="$router.push(localePath(`/`))">
                                <nuxt-link :to="switchLocalePath($i18n.locale)">Главная</nuxt-link>
                            </div>
                        </li>
                        <li>{{ service[0].name }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="promo service-promo--office">
            <div class="promo__bg" v-html="service[0].photos">
                <!-- <img class="img-desctop" src="@/assets/img/main/promo/bg.svg" alt="">
                <img class="img-table" src="@/assets/img/main/promo/bg-table.svg" alt="">
                <img class="img-mobile" src="@/assets/img/main/promo/bg-mobile.svg" alt=""> -->
            </div>
            <div class="wrapper">
                <div class="promo__wrap">
                    <div class="promo__title">{{ service[0].name }}</div>
                    <div class="promo__subtitle">{{ service[0].description }}</div>
                    <choose-service-btn class="promo__btn"> Выбери услугу</choose-service-btn>
                </div>
            </div>
        </section>
        <div v-html="service[0].content">
        </div>
        <main-order :item="service[0].content_in_form" />
    </div>
</template>
<script>
import DisassemblyPeculiarities from '../../../components/our-services/furniture/DisassemblyPeculiarities.vue'
import MainOrder from '../../../components/reuse/MainOrder.vue'
import ServicePromo from '../../../components/reuse/ServicePromo.vue'
export default {
    components: { ServicePromo, DisassemblyPeculiarities, MainOrder },
    data() {
        return {
            service: []
        }
    },
    computed: {
        services() {
            return this.$store.getters['services/SERVICES']
        },
    },
    methods: {
        async getService() {
            try {
                const langID = this.$cookies.get('langId')
                const service = await this.$axios.get(`/services?search[alias]=${this.$route.query.page}`)
                    .then(res => {
                        return res.data.data
                    })
                if (service) {
                    service.filter(el => {
                        if (el.langs_id == langID) {
                            this.service.push(el)
                        }
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    async mounted() {
        await this.getService()
    },
    watch: {
        services(newVal) {
            if (newVal) {
                this.getService()
            }
        }
    }
}
</script>
<style>

</style>