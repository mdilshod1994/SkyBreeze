export const state = () => ({
    whyWe: []
})

export const getters = {
    WHY_WE(state) {
        return state.whyWe
    }
}

export const mutations = {
    setWhyWe(state, whyWe) {
        state.whyWe = whyWe
    },
}

export const actions = {
    async getWhyWe(ctx, whyWe) {
        ctx.commit('setWhyWe', whyWe)
    },

}
