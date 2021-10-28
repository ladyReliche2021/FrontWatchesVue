// https://vuex.vuejs.org/en/mutations.html

export default {
    setplushDialog: (state, payload) => { state.plushDialog = payload },
  
    setPostDialog: (state, payload) => { state.postDialog = payload },
    setPlusRemoteDialog: (state, payload) => { state.plusRemoteDialog = payload },
    setActivePost: (state, payload) => { state.activePost = payload },
    setRemoteActivePlus: (state, payload) => { state.remoteActivePlus = payload },

    setDrawer: (state, payload) => { state.drawer = payload },
    LOADING: (state) => {
        state.status = {
        loading: true,
        success: false,
        error: false
        }
    },
    SUCCESS: (state) => {
        state.status = {
        loading: false,
        success: true,
        error: false
        }
    },
    ERROR: (state, payload) => {
        state.status = {
        loading: false,
        success: false,
        error: payload
        }
    },
    CLEAR_ERROR: (state) => {
        state.status = {
        loading: false,
        success: false,
        error: false
        }
    },
}
