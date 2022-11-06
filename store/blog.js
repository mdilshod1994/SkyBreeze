export const state = () => ({
    blogs: []
})

export const getters = {
    BLOGS(state) {
        return state.blogs
    }
}

export const mutations = {
    setBlogs(state, blogs) {
        state.blogs = blogs
    },
}

export const actions = {
    getBlogs(ctx, blogs) {
        ctx.commit('setBlogs', blogs)
    }
}
