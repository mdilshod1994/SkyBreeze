<template>
    <section class="scene main-services bg-white">
        <div class="wrapper">
            <div class="main-services__title title h2">Наши услуги по&nbsp;переезду</div>
            <div class="main-services__body" v-if="services.length > 0">
                <div class="main-services__row">
                    <div class="main-services__coll"
                        @click="$router.push(localePath({ path: `/our-services/${services[2].alias}`, query: { page: `${services[2].alias}` } }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)"
                            class="main-services__box main-services__box--blue">
                            <div class="main-services__caption">{{ services[2].name }}</div>
                            <div class="main-services__icon">
                                <img v-if="services[2].icon_home"
                                    :src="`${services[2].icon_home.server}/${services[2].icon_home.path}`" alt="">
                                <svg v-else width="101" height="94" viewBox="0 0 101 94" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="56.5" cy="56.5" r="56" stroke="white" />
                                    <path
                                        d="M64.1214 62.6785V83.5646C64.121 83.9837 64.2032 84.3988 64.3633 84.7861C64.5235 85.1734 64.7583 85.5254 65.0545 85.8219C65.3507 86.1184 65.7025 86.3536 66.0897 86.5141C66.4768 86.6745 66.8918 86.7571 67.3109 86.7571H81.7293C82.1487 86.7575 82.564 86.6752 82.9516 86.5149C83.3391 86.3546 83.6912 86.1195 83.9877 85.823C84.2842 85.5264 84.5194 85.1743 84.6797 84.7868C84.84 84.3993 84.9223 83.984 84.9219 83.5646V57.5258H89.1052C90.0879 57.5254 91.0469 57.2236 91.8527 56.6612C92.6586 56.0988 93.2726 55.3028 93.6119 54.3805C93.9512 53.4582 93.9995 52.454 93.7503 51.5034C93.5011 50.5529 92.9664 49.7016 92.2183 49.0644L59.5039 21.2061C58.4407 20.3008 57.09 19.8037 55.6936 19.8037C54.2973 19.8037 52.9465 20.3008 51.8834 21.2061L19.169 49.0644C18.4191 49.7008 17.8828 50.5521 17.6326 51.5033C17.3824 52.4544 17.4303 53.4595 17.7699 54.3825C18.1095 55.3055 18.7243 56.102 19.5313 56.6642C20.3383 57.2263 21.2985 57.5271 22.282 57.5258H26.4654V83.5676C26.4662 84.4138 26.8029 85.2251 27.4015 85.8231C28.0001 86.4212 28.8117 86.7571 29.6579 86.7571H44.0733C44.9192 86.7571 45.7304 86.4211 46.3286 85.823C46.9267 85.2248 47.2627 84.4135 47.2627 83.5676V62.6816L64.1214 62.6785Z"
                                        stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="main-services__coll main-services__coll--flex">
                        <div @click="$router.push(localePath({ path: `/our-services/${services[3].alias}`, query: { page: `${services[3].alias}` } }))"
                            class="main-services__box">
                            <nuxt-link :to="switchLocalePath($i18n.locale)">
                                <div class="main-services__caption">{{ services[3].name }}</div>
                                <div class="main-services__icon">
                                    <img v-if="services[3].icon_home"
                                        :src="`${services[3].icon_home.server}/${services[3].icon_home.path}`" alt="">
                                    <svg v-else width="100" height="94" viewBox="0 0 100 94" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M39.9849 64.3226V42.8564C39.9849 38.2457 45.2002 33.0303 55.631 33.0303C66.0618 33.0303 71.2772 38.2457 71.2772 42.8564V64.3226"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M35.769 74.753C35.2168 74.753 34.769 74.3053 34.769 73.753V65.3223C34.769 64.77 35.2168 64.3223 35.769 64.3223H75.4921C76.0444 64.3223 76.4921 64.77 76.4921 65.3223V73.753C76.4921 74.3053 76.0444 74.753 75.4921 74.753H35.769Z"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M48.6768 22.5996H62.5844" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M27.8154 43.4609V62.3225C27.8154 63.427 28.7109 64.3225 29.8154 64.3225H81.4462C82.5508 64.3225 83.4462 63.427 83.4462 62.3225V43.4609"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M43.4614 90.3994H67.7999" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M55.6309 74.7539V90.4001" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M55.6309 22.5996V33.0304" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <circle cx="56.5" cy="56.5" r="56" stroke="#28AECB" />
                                    </svg>
                                </div>
                            </nuxt-link>
                        </div>
                        <div @click="$router.push(localePath({ path: `/our-services/${services[1].alias}`, query: { page: `${services[1].alias}` } }))"
                            class="main-services__box">
                            <nuxt-link :to="switchLocalePath($i18n.locale)">
                                <div class="main-services__caption">{{ services[1].name }}</div>
                                <div class="main-services__icon">
                                    <img v-if="services[1].icon_home"
                                        :src="`${services[1].icon_home.server}/${services[1].icon_home.path}`" alt="">
                                    <svg v-else width="100" height="94" viewBox="0 0 100 94" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="56.5" cy="56.5" r="56" stroke="#28AECB" />
                                        <path d="M53.5038 77.3023L50.5076 65.3175L44.5151 56.3288V38.3516"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M35.5265 56.3288L32.5303 47.3402L44.5151 38.3516L53.5038 44.344L62.4924 45.8421"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M44.5153 34.1565C46.17 34.1565 47.5115 32.815 47.5115 31.1603C47.5115 29.5055 46.17 28.1641 44.5153 28.1641C42.8605 28.1641 41.519 29.5055 41.519 31.1603C41.519 32.815 42.8605 34.1565 44.5153 34.1565Z"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M41.5188 65.3171L35.5264 77.302M68.4847 77.302V51.8342C68.4847 50.6422 68.9582 49.499 69.8011 48.6562C70.6439 47.8134 71.7871 47.3398 72.979 47.3398C74.171 47.3398 75.3141 47.8134 76.157 48.6562C76.9998 49.499 77.4733 50.6422 77.4733 51.8342V53.3323"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </nuxt-link>
                        </div>

                    </div>
                    <div class="main-services__coll main-services__coll--table">
                        <div @click="$router.push(localePath({ path: `/our-services/${services[3].alias}`, query: { page: `${services[3].alias}` } }))"
                            class="main-services__box">
                            <nuxt-link :to="switchLocalePath($i18n.locale)">
                                <div class="main-services__caption">{{ services[3].name }}</div>
                                <div class="main-services__icon">
                                    <img v-if="services[3].icon_home"
                                        :src="`${services[3].icon_home.server}/${services[3].icon_home.path}`" alt="">
                                    <svg v-else width="100" height="94" viewBox="0 0 100 94" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M39.9849 64.3226V42.8564C39.9849 38.2457 45.2002 33.0303 55.631 33.0303C66.0618 33.0303 71.2772 38.2457 71.2772 42.8564V64.3226"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M35.769 74.753C35.2168 74.753 34.769 74.3053 34.769 73.753V65.3223C34.769 64.77 35.2168 64.3223 35.769 64.3223H75.4921C76.0444 64.3223 76.4921 64.77 76.4921 65.3223V73.753C76.4921 74.3053 76.0444 74.753 75.4921 74.753H35.769Z"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M48.6768 22.5996H62.5844" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M27.8154 43.4609V62.3225C27.8154 63.427 28.7109 64.3225 29.8154 64.3225H81.4462C82.5508 64.3225 83.4462 63.427 83.4462 62.3225V43.4609"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M43.4614 90.3994H67.7999" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M55.6309 74.7539V90.4001" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M55.6309 22.5996V33.0304" stroke="#28AECB" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <circle cx="56.5" cy="56.5" r="56" stroke="#28AECB" />
                                    </svg>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="main-services__coll main-services__coll--table">
                        <div @click="$router.push(localePath({ path: `/our-services/${services[1].alias}`, query: { page: `${services[1].alias}` } }))"
                            class="main-services__box">
                            <nuxt-link :to="switchLocalePath($i18n.locale)">
                                <div class="main-services__caption">{{ services[1].name }}</div>
                                <div class="main-services__icon">
                                    <img v-if="services[1].icon_home"
                                        :src="`${services[1].icon_home.server}/${services[1].icon_home.path}`" alt="">
                                    <svg v-else width="100" height="94" viewBox="0 0 100 94" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="56.5" cy="56.5" r="56" stroke="#28AECB" />
                                        <path d="M53.5038 77.3023L50.5076 65.3175L44.5151 56.3288V38.3516"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M35.5265 56.3288L32.5303 47.3402L44.5151 38.3516L53.5038 44.344L62.4924 45.8421"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M44.5153 34.1565C46.17 34.1565 47.5115 32.815 47.5115 31.1603C47.5115 29.5055 46.17 28.1641 44.5153 28.1641C42.8605 28.1641 41.519 29.5055 41.519 31.1603C41.519 32.815 42.8605 34.1565 44.5153 34.1565Z"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M41.5188 65.3171L35.5264 77.302M68.4847 77.302V51.8342C68.4847 50.6422 68.9582 49.499 69.8011 48.6562C70.6439 47.8134 71.7871 47.3398 72.979 47.3398C74.171 47.3398 75.3141 47.8134 76.157 48.6562C76.9998 49.499 77.4733 50.6422 77.4733 51.8342V53.3323"
                                            stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </nuxt-link>
                        </div>

                    </div>
                    <div class="main-services__coll"
                        @click="$router.push(localePath({ path: `/our-services/${services[0].alias}`, query: { page: `${services[0].alias}` } }))">
                        <nuxt-link :to="switchLocalePath($i18n.locale)" class="main-services__box main-services__box">
                            <div class="main-services__caption">{{ services[0].name }}</div>
                            <div class="main-services__icon">
                                <img v-if="services[0].icon_home"
                                    :src="`${services[0].icon_home.server}/${services[0].icon_home.path}`" alt="">
                                <svg v-else width="101" height="94" viewBox="0 0 101 94" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="56.5" cy="56.5" r="56" stroke="#28AECB" />
                                    <path
                                        d="M44.5151 69.3407L49.4802 64.3755H54.4454L57.8217 60.9992C61.2729 62.2016 65.03 62.1968 68.4781 60.9857C71.9263 59.7746 74.8612 57.4289 76.8025 54.3325C78.7438 51.2361 79.5766 47.5724 79.1644 43.9411C78.7523 40.3097 77.1197 36.9259 74.5339 34.3433C71.948 31.7606 68.5621 30.1323 64.9303 29.7247C61.2984 29.3171 57.6358 30.1545 54.5418 32.0996C51.4478 34.0448 49.1058 36.9827 47.899 40.4323C46.6922 43.882 46.6922 47.6391 47.8988 51.0888L29.6196 69.3407V79.271H39.5499L44.5151 74.3058V69.3407Z"
                                        stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M66.8581 44.515C68.2292 44.515 69.3406 43.4035 69.3406 42.0324C69.3406 40.6613 68.2292 39.5498 66.8581 39.5498C65.487 39.5498 64.3755 40.6613 64.3755 42.0324C64.3755 43.4035 65.487 44.515 66.8581 44.515Z"
                                        stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </nuxt-link>
                    </div>
                    <div class="main-services__coll main-services__coll--big">
                        <nuxt-link to="/our-services/warehouse-moving" class="main-services__box main-services__box">
                            <div class="main-services__caption">Складской переезд</div>
                            <div class="main-services__icon">
                                <svg width="101" height="94" viewBox="0 0 101 94" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="56.5" cy="56.5" r="56" stroke="#28AECB" />
                                    <path
                                        d="M54.0893 33.0151C54.8268 32.6055 55.6564 32.3906 56.4999 32.3906C57.3434 32.3906 58.1731 32.6055 58.9105 33.0151L77.5671 43.3773C77.9538 43.5924 78.2761 43.907 78.5005 44.2885C78.7248 44.67 78.8431 45.1045 78.8431 45.5471V65.9911C78.8429 66.8765 78.6059 67.7458 78.1568 68.5088C77.7076 69.2718 77.0626 69.9008 76.2885 70.3307L58.9105 79.9879C58.1731 80.3974 57.3434 80.6123 56.4999 80.6123C55.6564 80.6123 54.8268 80.3974 54.0893 79.9879L36.7113 70.3307C35.9376 69.901 35.2928 69.2724 34.8437 68.5098C34.3946 67.7473 34.1574 66.8786 34.1567 65.9936V45.5471C34.1567 45.1045 34.275 44.67 34.4994 44.2885C34.7237 43.907 35.046 43.5924 35.4328 43.3773L54.0918 33.0151H54.0893Z"
                                        stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M34.1567 44.0869L56.4999 56.4998M56.4999 56.4998L78.8431 44.0869M56.4999 56.4998V81.3255"
                                        stroke="#28AECB" stroke-linejoin="round" />
                                    <path d="M45.3284 50.2937L67.6715 37.8809M41.6045 57.3145L49.0522 61.4653"
                                        stroke="#28AECB" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="service-selection">
                    <choose-service-btn> Выбери услугу</choose-service-btn>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        services() {
            return this.$store.getters['services/SERVICES_SORTED_TOP']
        }
    }
}
</script>
<style>
.main-services__coll div {
    /* width: 100%; */
}
</style>