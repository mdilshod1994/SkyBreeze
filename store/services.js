export const state = () => ({
    services: [],
    sortedTop: [],
    sortedBottom: []
})

export const getters = {
    SERVICES(state) {
        return state.services
    },
    SERVICES_SORTED_TOP(state) {
        return state.sortedTop
    },
    SERVICES_SORTED_BOTTOM(state) {
        return state.sortedBottom
    }
}

export const mutations = {
    setServices(state, services) {
        state.services = services
        let servicesSortTop = ['home-moving', 'office-moving', 'for-elderly-moving', 'apartment-moving',]
        state.sortedTop = services.filter(item => {
            for (let index = 0; index < servicesSortTop.length; index++) {
                const element = servicesSortTop[index];
                if (item.alias === element) {
                    return item
                }
            }
        });
        let servicesSortBottom = ['furniture-disassembly', 'furniture-transportation', 'local-moving', 'long-journey', 'packing-things', 'personal-property',]
        state.sortedBottom = services.filter(item => {
            for (let index = 0; index < servicesSortBottom.length; index++) {
                const element = servicesSortBottom[index];
                if (item.alias === element) {
                    return item
                }
            }
        });
    },
}

export const actions = {
    getServices(ctx, services) {
        ctx.commit('setServices', services)
    }
}
