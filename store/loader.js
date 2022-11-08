export const state = () => ({
    loadingIs: false
})

export const getters = {
    LOADER(state) {
        return state.loadingIs
    }
}

export const mutations = {
    setLoading(state, loadingIs) {
        state.loadingIs = loadingIs
    },
}

export const actions = {
    async getLoading(ctx, loadingIs) {
        ctx.commit('setLoading', loadingIs)
    },
}
