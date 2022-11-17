<template>
    <div v-if="service.length > 0">
        <section class="main-top">
            <div class="wrapper">
                <div class="breadcrumbs">
                    <ul>
                        <li>
                            <bread-crump-btn-home />
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
                    </div>
                    <div class="service-promo__wrap">
                        <div class="service-promo__title h1">{{ service[0].name }}</div>
                        <div class="service-promo__desc desc"> {{ service[0].description }} </div>
                        <div class="promo__btn btn" v-if="translationsSite.length > 0" @click="openServicesModal(service[0])">
                            {{ translationsSite[5].text }}</div>
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
import MainOrder from '../../../components/reuse/MainOrder.vue'
import BreadCrumpBtnHome from '../../../components/UI/breadCrumpBtnHome.vue'
export default {
    components: {
        MainOrder,
        BreadCrumpBtnHome
    },
    data() {
        return {
            service: []
        }
    },
    computed: {
        services() {
            return this.$store.getters['services/SERVICES']
        },
        translationsSite() {
            let topMenu = this.$store.getters['translations/TRANSLATIONS'].filter(el => el.type === 'site')
            return topMenu
        },
    },
    methods: {
        openServicesModal(e) {
            this.$store.dispatch('choose-service-popup/openPopup', { type: 'services', info: { e } })
        },
        async getService() {
            try {
                this.$store.dispatch('loader/getLoading', true)
                const langID = this.$cookies.get('langId')
                const service = await this.$axios.get(`front/services?search[alias]=${this.$route.path.split("/").pop()}`)
                    .then(res => {
                        return res.data.data
                    })
                if (service) {
                    service.filter(el => {
                        if (el.langs_id == langID) {
                            this.service.push(el)
                            document.title = el.name
                        }
                    })
                    this.$store.dispatch('loader/getLoading', false)
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