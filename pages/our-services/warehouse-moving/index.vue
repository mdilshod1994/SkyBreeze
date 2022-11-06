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
                        <li>Складские переезды, контейнеры</li>
                    </ul>
                </div>
            </div>
        </section>
        <service-promo />
        <warehouse-peculiarities />
        <why-apply />
        <main-order />
    </div>
</template>
<script>
import WarehousePeculiarities from '../../../components/our-services/warehouse/WarehousePeculiarities.vue'
import MainOrder from '../../../components/reuse/MainOrder.vue'
import ServicePeculiarities from '../../../components/reuse/ServicePeculiarities.vue'
import ServicePromo from '../../../components/reuse/ServicePromo.vue'
import WhyApply from '../../../components/reuse/WhyApply.vue'
export default {
    components: { ServicePromo, ServicePeculiarities, WarehousePeculiarities, WhyApply, MainOrder },

}
</script>
<style>

</style>