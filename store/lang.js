export const state = () => ({
    langs: [],
    langid: null
})

export const getters = {
    LANGS(state) {
        return state.langs
    },
    dataLang(state) {
        return !!state.langs
    },
    LANG_ID(state) {
        return state.langid
    }
}

export const mutations = {
    setLangs(state, langs) {
        state.langs = langs
    },
    setLangInfo(state, langinfo) {
        state.langid = langinfo.id
        this.$cookies.set('langId', langinfo ? langinfo.id : 2)
        this.$cookies.set('i18n_redirected', langinfo ? langinfo.alias : 'en')
    }
}

export const actions = {
    async getLangs(ctx) {
        const res = await this.$axios.$get('front/langs').then(res => {
            return res.data
        })
        ctx.commit('setLangs', res)
    },
    async getAllInfo(ctx, langID) {
        try {
            if (langID) {
                ctx.dispatch('loader/getLoading', true, { root: true })
                const translations = await this.$axios.$get(`front/translations?search[langs_id]=${langID}&limit=-1`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('translations/getTranslations', translations, { root: true })
                const services = await this.$axios.$get(`front/services?search[langs_id]=${langID}&limit=-1`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('services/getServices', services, { root: true })
                const blog = await this.$axios.$get(`front/articles?search[langs_id]=${langID}&limit=-1`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('blog/getBlogs', blog, { root: true })

                const faq = await this.$axios.$get(`front/faq?search[langs_id]=${langID}&limit=-1`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('faq/getFaq', faq, { root: true })
                const whyWe = await this.$axios.$get(`front/whyWe?search[langs_id]=${langID}&limit=-1`)
                    .then(res => {
                        return res.data
                    })
                ctx.dispatch('why-we/getWhyWe', whyWe, { root: true })
                ctx.dispatch('loader/getLoading', false, { root: true })
                return true
            }
        } catch (error) {
            console.error(error);
        }
    },
    async settingLangID(ctx, lang) {
        const langVal = await lang
        if (langVal) {
            ctx.dispatch('getAllInfo', langVal.id)
            ctx.commit('setLangInfo', langVal)
        }
    }
}
