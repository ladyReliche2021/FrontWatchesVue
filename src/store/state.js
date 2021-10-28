// https://vuex.vuejs.org/en/state.html

export default {
    plushDialog: false,
    drawer: false,

    postDialog: false,
    plusRemoteDialog:false,
    activePost: null,
    remoteActivePlus:null,

    status: {
        loading: false,
        success: false,
        error: false
    },
    menu: [
        { icon: 'mdi-home-outline', title: 'Local', link: '/' },
        { icon: 'mdi-newspaper', title: 'G News', link: '/remote-post' },
        { icon: 'mdi-server', title: 'Api .Net', link: '/remote-plus' }
    ],
}
