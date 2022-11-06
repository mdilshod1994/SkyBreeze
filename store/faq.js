export const state = () => ({
    faq: []
})

export const getters = {
    FAQ(state) {
        return state.faq
    }
}

export const mutations = {
    setFaq(state, faq) {
        state.faq = faq
    },
}

export const actions = {
    async getFaq(ctx, faq) {
        ctx.commit('setFaq', faq)
    },

}
