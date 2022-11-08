export const state = () => ({
    partners: []
})

export const getters = {
    PARTNERS(state) {
        return state.partners
    }
}

export const mutations = {
    setPartners(state, partners) {
        state.partners = partners
    },
}

export const actions = {
    async getPartners(ctx) {
        const res = await this.$axios.$get('front/partners').then(res => {
            return res.data
        })
        ctx.commit('setPartners', res)
    },

}
