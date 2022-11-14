<template>
    <section class="scene faq bg-white">
        <div class="wrapper">
            <div class="faq__title title h2" v-if="translations.length > 0">{{ translations[8].text }}</div>
            <div class="faq__body">
                <div v-for="(item, index) in faq" :key="item.id" :class="`accordion ${isActive ? 'active' : ''}`">
                    <div class="accordion__top" @click="showContent(index)" v-if="faq.length">
                        <div class="accordion__caption">{{ item.ask }}</div>
                        <div class="accordion__icon">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="accordion__hidden">
                        <div class="accordion__desc">
                            <p v-html="item.answer"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['translations'],
    data() {
        return {
            activeItem: null,
            isActive: false
        }
    },
    computed: {
        faq() {
            return this.$store.getters['faq/FAQ']
        }
    },
    methods: {
        showContent(ind) {
            var accordionTop = document.querySelectorAll('.accordion');
            accordionTop.forEach((el, i) => {
                if (i === ind) {
                    el.classList.toggle("active");
                }
            })
        }
    }
}
</script>
<style>

</style>