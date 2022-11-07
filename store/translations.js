export const state = () => ({
    translations: []
})

export const getters = {
    TRANSLATIONS(state) {
        return state.translations
    }
}

export const mutations = {
    setTranslations(state, translations) {
        state.translations = translations
    },
}

export const actions = {
    async getTranslations(ctx, translations) {
        ctx.commit('setTranslations', translations)
    },

}
