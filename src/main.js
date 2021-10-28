// main.js
import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'

// Filters
import DateFilter from '@/filters/Date'

// Global Components
import Toolbar from '@/components/Navigation/Toolbar'
import PostDialog from '@/components/LocalPosts/LocalPostDialog'
import RemotePlusDialog from '@/components/RemotePlus/RemotePlusDialog'
import Footer from '@/components/Navigation/Footer'

Vue.component('app-toolbar', Toolbar)
Vue.component('app-post-dialog', PostDialog)
Vue.component('app-remote-plus-dialog', RemotePlusDialog)
Vue.component('app-footer', Footer)

Vue.config.productionTip = false

// Register the filters
Vue.filter('date', DateFilter)
Vue.filter('capitalize', (value) => {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('truncate', (value, limit) => {
  return value.substring(0, limit)
})
Vue.filter('tailing', (value, tail) => {
  return value + tail
})

Vue.prototype.$siteName = process.env.VUE_APP_TITLE || 'blog'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
