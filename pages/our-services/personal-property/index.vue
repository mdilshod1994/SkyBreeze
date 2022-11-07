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
        <section class="service-promo service-promo--office">
            <div class="wrapper">
                <div class="service-promo__body">
                    <div class="service-promo__bg img-cover p-absolute" v-html="service[0].photos">
                        <!-- <img class="img-desctop" src="img/furniture-transportation/service-promo/bg.jpg" alt="">
                        <img class="img-table" src="img/furniture-transportation/service-promo/bg-table.jpg" alt="">
                        <img class="img-mobile" src="img/furniture-transportation/service-promo/bg-mobile.jpg" alt=""> -->
                    </div>
                    <div class="service-promo__wrap">
                        <div class="service-promo__title h1">{{ service[0].name }}</div>
                        <div class="service-promo__desc desc"> {{ service[0].description }} </div>
                        <choose-service-btn class="promo__btn"> Оформить заявку</choose-service-btn>
                    </div>
                </div>
            </div>
        </section>
        <div v-html="service[0].content">
        </div>
        <main-order :item="service[0].content_in_form" />
    </div>
</template>
<script>
import MovingInfo from '../../../components/our-services/personal-property/MovingInfo.vue'
import MainOrder from '../../../components/reuse/MainOrder.vue'
import ServicePeculiarities from '../../../components/reuse/ServicePeculiarities.vue'
import ServicePromo from '../../../components/reuse/ServicePromo.vue'
export default {
    components: { ServicePromo, ServicePeculiarities, MovingInfo, MainOrder },
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
                const service = await this.$axios.get(`/services?search[alias]=${this.$route.path.split("/").pop()}`)
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