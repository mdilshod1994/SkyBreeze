export const state = () => ({
    isActive: false,
    value: {},
    type: '',
    package: ''
})

export const getters = {
    IS_ACTIVE(state) {
        return state.isActive
    },
    VALUE(state) {
        return state.value
    },
    TYPE(state) {
        return state.type
    },
    PACKAGE(state) {
        return state.package
    }
}

export const mutations = {
    OPEN_POPUP(state, type) {
        state.isActive = true
        state.value = type.e
        state.type = type.type
        if (type.package) {
            state.package = type.package
        }
    },
    CLOSE_POPUP(state) {
        state.isActive = false
        state.value = {}
        state.type = ''
        state.package = ''
    }
}

export const actions = {
    openPopup(ctx, type) {
        ctx.commit('OPEN_POPUP', type)
    },
    closePopup(ctx) {
        ctx.commit('CLOSE_POPUP')
    }
}