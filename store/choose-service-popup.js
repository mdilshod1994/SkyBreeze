export const state = () => ({
    isActive: false
})

export const getters = {
    IS_ACTIVE(state) {
        return state.isActive
    }
}

export const mutations = {
    OPEN_POPUP(state) {
        state.isActive = true
    },
    CLOSE_POPUP(state) {
        state.isActive = false
    }
}

export const actions = {
    openPopup(ctx) {
        ctx.commit('OPEN_POPUP')
    },
    closePopup(ctx) {
        ctx.commit('CLOSE_POPUP')
    }
}