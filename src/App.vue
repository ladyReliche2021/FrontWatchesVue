<template>
  <v-app>
    <div class="text-xs-center" v-if="loading">
      <v-progress-circular
        :size="50"
        color="green"
        indeterminate
      ></v-progress-circular>
    </div>
    <app-toolbar color="#5cb85c" v-if="!loading"></app-toolbar>
    <v-main v-if="!loading">
      <transition appear name="fade">
        <router-view></router-view>
      </transition>
    </v-main>

    <app-footer v-if="!loading"></app-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE,
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
transition-property: opacity;
transition-duration: .25s;
}
.fade-enter-active {
transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
opacity: 0;
}
</style>
