<template lang="html">
  <v-navigation-drawer
   v-model="drawer"
   temporary
   app
   :mini-variant="mini"
 >
   <v-list class="pt-0">
     <v-list-item
     v-for="(item, i) in menu"
     :key="i"
     router
     exact
     :to="item.link">
       <v-list-item-title>
         <v-icon>{{ item.icon }}</v-icon>
       </v-list-item-title>
       <v-list-item-content>
         <v-list-item-title>{{ item.title }}</v-list-item-title>
       </v-list-item-content>
     </v-list-item>
   </v-list>
 </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    mini: false,
    right: true,
    rightDrawer: false
  }),
  computed: {
    ...mapGetters([
      'menu'
    ]),
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('setDrawer', val)
      }
    }
  },
  methods: {}
}
</script>

<style lang="css">
</style>
