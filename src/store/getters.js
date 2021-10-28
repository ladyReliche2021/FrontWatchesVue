// https://vuex.vuejs.org/en/getters.html

export default {
    plushDialog: state => { return state.plushDialog },

    menu: state => { return state.menu },
    getSettings: state => { return state.settings },
    getPosts: state => { return state.posts },
    
    getActivePost: state => { return state.activePost },
    getRemoteActivePlus: state => { return state.remoteActivePlus },
    
    loading: state => { return state.status.loading },
}
