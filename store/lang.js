export const state = () => ({
    langs: []
})

export const getters = {
    LANGS(state) {
        return state.langs
    }
}

export const mutations = {
    setLangs(state, langs) {
        state.langs = langs
    },
}

export const actions = {
    async getLangs(ctx) {
        const res = await this.$axios.$get('/langs').then(res => {
            return res.data
        })
        ctx.commit('setLangs', res)
    },
    async getAllInfo(ctx, langID) {
        try {
            if (langID) {
                const blog = await this.$axios.$get(`/articles?search[langs_id]=${langID}`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('blog/getBlogs', blog, { root: true })
                const services = await this.$axios.$get(`/services?search[langs_id]=${langID}`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('services/getServices', services, { root: true })
                const faq = await this.$axios.$get(`/faq?search[langs_id]=${langID}`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('faq/getFaq', faq, { root: true })
                const whyWe = await this.$axios.$get(`/whyWe?search[langs_id]=${langID}`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('why-we/getWhyWe', whyWe, { root: true })
            }
        } catch (error) {
            console.error(error);
        }
    }
}
