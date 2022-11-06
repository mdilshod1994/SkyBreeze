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
    },
    servicesSortTop(state, services) {
        state.sortedTop = services
    },
    servicesSortBottom(state, services) {
        state.sortedBottom = services
    }
}

export const actions = {
    getServices(ctx, services) {
        ctx.commit('setServices', services)

        let servicesSortTopArray = ['home-moving', 'office-moving', 'for-elderly-moving', 'apartment-moving',]

        let sortedTop = services.filter(item => {
            for (let index = 0; index < servicesSortTopArray.length; index++) {
                const element = servicesSortTopArray[index];
                if (item.alias === element) {
                    return item
                }
            }
        });

        ctx.commit('servicesSortTop', sortedTop)


        let servicesSortBottomArrya = ['furniture-disassembly', 'furniture-transportation', 'local-moving', 'long-journey', 'packing-things', 'personal-property',]

        let sortedBottom = services.filter(item => {
            for (let index = 0; index < servicesSortBottomArrya.length; index++) {
                const element = servicesSortBottomArrya[index];
                if (item.alias === element) {
                    return item
                }
            }
        });

        ctx.commit('servicesSortBottom', sortedBottom)
    }
}
