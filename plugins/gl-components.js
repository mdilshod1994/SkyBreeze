import Vue from 'vue'
import ChooseServiceBtn from '@/components/UI/ChooseService.vue'

const components = { ChooseServiceBtn }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})