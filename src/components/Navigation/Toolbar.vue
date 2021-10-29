<template >
  <div>
    <v-app-bar fixed app :color="color">
      <v-app-bar-nav-icon
      @click.stop="onDrawer"
      class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" exact class="black--text">
        <div class="headline white--text" >
          <v-icon>mdi-watch</v-icon> <strong>Blog</strong>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        text
        class="white--text"
        v-for="(item, i) in this.menu"
        :key="i"
        router
        :to="item.link">
          <!-- <v-icon color="primary" left>{{item.icon}}</v-icon> -->
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <Drawer></Drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Drawer from './Drawer'
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'white'
    }
  },
  components: {
    Drawer
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters([
      'menu',
      'getSettings'
    ]),
    toolbarTitle () {
      return this.getSettings.metadata.logo_text
    }
  },
  methods: {
    onDrawer () {
      this.$store.commit('setDrawer', true)
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
div.v-app-bar-title__content {
    width: 90px!important;
}
</style>
