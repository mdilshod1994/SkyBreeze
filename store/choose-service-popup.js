export const state = () => ({
    isActive: false,
    valueType: {}
})

export const getters = {
    IS_ACTIVE(state) {
        return state.isActive
    },
    VALUE_TYPE(state) {
        return state.valueType
    }
}

export const mutations = {
    OPEN_POPUP(state, type) {
        state.isActive = true
        state.valueType = type
    },
    CLOSE_POPUP(state) {
        state.isActive = false
        state.valueType = {}
    }
}

export const actions = {
    openPopup(ctx, type) {
        console.log(type);
        ctx.commit('OPEN_POPUP', type)
    },
    closePopup(ctx) {
        ctx.commit('CLOSE_POPUP')
    }
}